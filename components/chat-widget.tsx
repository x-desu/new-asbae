"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import {
  quickOptions,
  findKnowledgeResponse,
  isGreeting,
  getSiteContext,
  type QuickOption,
} from "@/lib/chatbot-knowledge"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  options?: QuickOption[]
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm ASBAE's AI assistant. How can I help you today?",
      options: quickOptions,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (viewport) {
        setTimeout(() => {
          viewport.scrollTop = viewport.scrollHeight
        }, 100)
      }
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleQuickOption = (option: QuickOption) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: option.message,
    }

    setMessages((prev) => [...prev, userMessage])
    handleMessage(option.message, userMessage)
  }

  const handleMessage = async (messageContent: string, userMessage: Message) => {
    setIsLoading(true)

    console.log("[v0] Processing message:", messageContent)

    // Check knowledge base first (only for very basic questions)
    const knowledgeResponse = findKnowledgeResponse(messageContent)

    if (knowledgeResponse) {
      console.log("[v0] Using knowledge base response")
      // Use local knowledge base response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: knowledgeResponse,
          options: isGreeting(messageContent) ? quickOptions : undefined,
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 500)
      return
    }

    console.log("[v0] Calling Grok AI API with site context")
    try {
      const siteContext = getSiteContext()

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          siteContext: siteContext, // Pass current site context
        }),
      })

      console.log("[v0] API response status:", response.status)

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (reader) {
        console.log("[v0] Starting to read stream")
        while (true) {
          const { done, value } = await reader.read()
          if (done) {
            console.log("[v0] Stream completed")
            break
          }

          const chunk = decoder.decode(value, { stream: true })
          console.log("[v0] Received chunk:", chunk)

          // AI SDK streams plain text, not JSON
          assistantContent += chunk
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantContent } : m)),
          )
        }
      }
    } catch (error) {
      console.error("[v0] Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Sorry, I'm having trouble connecting right now. Please try again or contact us directly at hello@asbaetech.com or call +91 97534 98392",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    const messageContent = input.trim()
    setInput("")

    await handleMessage(messageContent, userMessage)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 border border-yellow-500/30 ${
          isOpen ? "rotate-45" : "hover:scale-105"
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-6 z-40 w-80 sm:w-96 h-96 sm:h-[450px] bg-black/90 backdrop-blur-xl border border-yellow-500/30 shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b border-yellow-500/20 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                <Bot className="h-4 w-4 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-white">ASBAE Tech Assistant</h3>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-300">Integrated & Online</span>
                </div>
              </div>
            </div>
          </div>

          <ScrollArea ref={scrollAreaRef} className="flex-1 overflow-hidden">
            <div className="p-3 space-y-3 min-h-full">
              {messages.map((message) => (
                <div key={message.id}>
                  <div className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-500/30">
                        <Bot className="h-3 w-3 text-yellow-400" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg px-3 py-2 text-sm break-words ${
                        message.role === "user"
                          ? "bg-yellow-500/20 text-white border border-yellow-500/30"
                          : "bg-gray-800/80 border border-gray-600/30 text-gray-200"
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-1 opacity-70 ${message.role === "user" ? "text-yellow-200" : "text-gray-400"}`}>{formatTime(new Date())}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="h-6 w-6 rounded-full bg-gray-600/50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-500/30">
                        <User className="h-3 w-3 text-gray-300" />
                      </div>
                    )}
                  </div>

                  {message.role === "assistant" && message.options && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-8">
                      {message.options.map((option) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickOption(option)}
                          className="text-xs h-7 px-2 bg-gray-800/50 hover:bg-yellow-500/10 border-gray-600/50 text-gray-300 hover:text-yellow-300 hover:border-yellow-500/30"
                          disabled={isLoading}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-500/30">
                    <Bot className="h-3 w-3 text-yellow-400" />
                  </div>
                  <div className="bg-gray-800/80 border border-gray-600/30 rounded-lg px-3 py-2">
                    <div className="flex gap-1 items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60 animate-bounce"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60 animate-bounce [animation-delay:0.1s]"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/60 animate-bounce [animation-delay:0.2s]"></div>
                      <span className="text-xs text-gray-400 ml-2">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-3 border-t border-yellow-500/20 flex-shrink-0">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                disabled={isLoading}
                className="flex-1 bg-gray-800/50 border-gray-600/50 focus:border-yellow-500/50 text-sm h-9 text-gray-200 placeholder:text-gray-400"
                maxLength={500}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-yellow-500/80 hover:bg-yellow-500/90 text-black px-3 h-9 border border-yellow-500/30"
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
