"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, type UIMessage } from "ai"
import { MessageCircle, X, Send, Square, ArrowUpRight, RotateCcw } from "lucide-react"

const transport = new DefaultChatTransport({api:"/api/chat"})
const initialMessages: UIMessage[] = [{id:"welcome",role:"assistant",parts:[{type:"text",text:"Hi, I’m ASBAE’s assistant. Ask about our platforms, documentation, governance, or your next project."}]}]
const suggestions = ["What services do you offer?", "Tell me about Vidhayak Connect", "How can I discuss a project?"]

export default function ChatWidget() {
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState("")
  const inputRef=useRef<HTMLTextAreaElement>(null)
  const viewport=useRef<HTMLDivElement>(null)
  const follow=useRef(true)
  const {messages,sendMessage,status,error,stop,regenerate,clearError}=useChat({transport,messages:initialMessages})
  const busy=status==="submitted" || status==="streaming"
  const last=messages.at(-1)
  const waiting=busy && (last?.role!=="assistant" || !last.parts.some(p=>p.type==="text"&&p.text.length))
  useEffect(()=>{if(open)inputRef.current?.focus()},[open])
  useEffect(()=>{if(follow.current && viewport.current)viewport.current.scrollTop=viewport.current.scrollHeight},[messages,status,open])
  async function send(text:string){if(!text.trim()||busy)return;clearError();setInput("");follow.current=true;await sendMessage({text:text.trim()})}
  return <>
    <button type="button" className="chat-launcher" aria-label={open?"Close chat":"Open ASBAE chat"} aria-expanded={open} aria-controls="asbae-chat" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<MessageCircle size={20}/>}</button>
    {open && <section id="asbae-chat" className="asbae-chat" aria-label="ASBAE assistant">
      <header className="chat-heading"><div><strong>ASBAE assistant</strong><span>Platforms, documentation & governance</span></div><button type="button" aria-label="Close chat" onClick={()=>setOpen(false)}><X size={18}/></button></header>
      <div ref={viewport} className="chat-conversation" data-nosnippet role="log" aria-label="Conversation" aria-live="off" onScroll={()=>{const el=viewport.current;if(el)follow.current=el.scrollHeight-el.scrollTop-el.clientHeight<80}}>
        {messages.map(message=>{const text=message.parts.filter(p=>p.type==="text").map(p=>p.text).join("");return text ? <div key={message.id} className={`chat-message chat-${message.role}`}><span>{message.role==="user"?"You":"ASBAE"}</span><p>{text}</p></div> : null})}
        {waiting && <div className="chat-waiting" role="status"><i/><i/><i/><span>Preparing your answer…</span></div>}
        {status==="streaming"&&!waiting&&<span className="chat-streaming" role="status">Responding…</span>}
        {error && <div className="chat-error" role="alert"><p>{error.message || "Could not connect. Please try again."}</p><button type="button" onClick={()=>{clearError();void regenerate()}}><RotateCcw size={13}/>Try again</button></div>}
        {messages.length===1 && <div className="chat-suggestions">{suggestions.map(text=><button type="button" key={text} disabled={busy} onClick={()=>void send(text)}>{text}<ArrowUpRight size={12}/></button>)}</div>}
      </div>
      <form className="chat-composer" onSubmit={e=>{e.preventDefault();void send(input)}}>
        <label className="sr-only" htmlFor="asbae-chat-input">Your message</label><textarea id="asbae-chat-input" ref={inputRef} value={input} maxLength={2000} rows={2} placeholder="Ask about your project…" onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();void send(input)}}}/>
        {busy?<button type="button" aria-label="Stop response" onClick={()=>void stop()}><Square size={15}/></button>:<button type="submit" aria-label="Send message" disabled={!input.trim()}><Send size={17}/></button>}
      </form><div className="chat-footnote">AI answers can be imperfect. <a href="/contact">Talk to our team ↗</a></div>
    </section>}
  </>
}
