"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Bell, FileText, Users, PlugZap, FileBarChart } from "lucide-react";

const tasks = [
  {
    title: "Requirements & scope",
    subtitle: "Align stakeholders and expectations",
    icon: <Bell className="w-4 h-4" />,
  },
  {
    title: "Documentation review",
    subtitle: "Keep specifications clear and current",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    title: "Roles & ownership",
    subtitle: "Define responsibilities and next actions",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "System integration",
    subtitle: "Connect workflows through defined interfaces",
    icon: <PlugZap className="w-4 h-4" />,
  },
  {
    title: "Validation & handover",
    subtitle: "Review, document, and prepare the team",
    icon: <FileBarChart className="w-4 h-4" />,
  },
];

export default function AutomatedTasksPanel() {
  const [paused, setPaused] = React.useState(false);
  return (
    <section className="automated-tasks-panel relative w-full bg-background text-foreground">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-sm" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
          <div className="automated-task-card overflow-hidden">
            <div className="automated-task-window relative h-[320px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="automated-task-loop absolute w-full"
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                >
                  {[0,1].map(copy=><div key={copy} aria-hidden={copy===1} className="flex flex-col gap-2 pb-2">{tasks.map((task, i) => (
                    <div
                      key={i}
                      className="automated-task-row flex items-center gap-3 px-4 py-3 relative"
                    >
                      {/* Icon + Content */}
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="flex shrink-0 items-center justify-center text-blue-300/70 w-9 h-9">{task.icon}</div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {task.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {task.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="ml-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300/50" aria-hidden/>
                      </div>
                    </div>
                  ))}</div>)}
                </motion.div>

                {/* Fade effect only inside card */}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            OUR DELIVERY APPROACH
          </Badge>
          <h3 className="text-2xl font-medium tracking-tight text-white">Built around your people and processes.</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">We combine client-centric design, security, scalable technology, and operational insight. From requirements to handover, our approach keeps systems, documentation, and responsibilities aligned.</p>

          <div className="flex gap-3 flex-wrap">
            <Badge className="px-4 py-2 text-sm">Client-centric design</Badge>
            <Badge className="px-4 py-2 text-sm">Defined ownership</Badge>
            <Badge className="px-4 py-2 text-sm">Documented delivery</Badge>
          </div>
          <div className="flex items-center gap-4"><span className="text-[10px] text-muted-foreground">Illustrative delivery workflow</span></div>
        </div>
      </div>
    </section>
  );
}
