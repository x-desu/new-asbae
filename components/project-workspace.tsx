"use client"

import { BarChart3, Building2, ChevronDown, FilePlus2, FolderOpen, Home, Inbox, Search, ScanLine, SlidersHorizontal, ArrowUpRight, MoreHorizontal, CheckCircle2 } from "lucide-react"

export const workspaceViews = [
  { id: "today", label: "Today", icon: Home, title: "Start with a clear picture.", description: "Urgent cases, citizen updates, and department follow-ups in one daily workspace." },
  { id: "intake", label: "Intake queue", icon: Inbox, title: "Turn incoming requests into action.", description: "Bring scans, messages, email, and voice into a structured review queue." },
  { id: "cases", label: "Cases", icon: FolderOpen, title: "Keep every case moving.", description: "Follow ownership, department, priority, and the next action through to resolution." },
] as const

const cases = [
  { id: "VC-000013", subject: "Electricity supply restoration", citizen: "Sample citizen A", department: "Electricity", status: "Forwarded", tone: "blue", priority: "High" },
  { id: "VC-000012", subject: "Pension payment follow-up", citizen: "Sample citizen B", department: "Social Welfare", status: "In progress", tone: "amber", priority: "Normal" },
  { id: "VC-000011", subject: "Drinking water supply request", citizen: "Sample citizen C", department: "Jal Nigam", status: "Needs review", tone: "violet", priority: "Urgent" },
  { id: "VC-000010", subject: "Community road maintenance", citizen: "Sample citizen D", department: "Municipal works", status: "Resolved", tone: "green", priority: "Normal" },
]

/** Representative screens based on the MLA Connect marketing preview; no real records. */
export default function ProjectWorkspace({ active = 0, onSelect }: { active?: number; onSelect?: (index: number) => void }) {
  return (
    <div className="project-window">
      <div className="project-browser"><div className="window-dots"><i /><i /><i /></div><span><span className="browser-lock">▣</span> Vidhayak Connect / Office workspace</span><span className="preview-label">Sample data</span></div>
      <div className="project-app">
        <aside className="project-sidebar">
          <div className="project-brand"><span>VC</span><div>Vidhayak Connect<small>Constituency workspace</small></div><ChevronDown size={13} /></div>
          <div className="project-search"><Search size={13} /> Search workspace <span>⌘ K</span></div>
          <p className="project-nav-label">WORKSPACE</p>
          {workspaceViews.map(({label,icon:Icon},index) => <button type="button" key={label} aria-pressed={index===active} onClick={()=>onSelect?.(index)} className={`project-nav-item ${index===active?"is-active":""}`}><Icon size={15} />{label}{index===1&&<span className="nav-count">4</span>}</button>)}
          <div className="project-nav-static"><ScanLine size={15} /> Capture</div>
          <div className="project-nav-static"><FilePlus2 size={15} /> New request</div>
          <div className="project-nav-static"><Building2 size={15} /> Departments</div>
          <div className="project-nav-static"><BarChart3 size={15} /> Reports</div>
          <div className="project-sidebar-bottom"><span className="project-avatar">SO</span><div>Sample office<small>Office team</small></div><MoreHorizontal size={15} /></div>
        </aside>
        <div className="project-main">
          <div className="project-topbar"><span>Workspace <span>/</span> <strong>{workspaceViews[active].label}</strong></span><div><span className="project-secure"><CheckCircle2 size={11} /> Office workspace</span><span className="project-avatar">SO</span></div></div>
          <div className="project-mobile-tabs" aria-label="Preview screens">{workspaceViews.map((view,i)=><button type="button" key={view.id} aria-pressed={i===active} onClick={()=>onSelect?.(i)}>{view.label}</button>)}</div>
          <div className="project-screen" key={active}>
            {active===0 ? <>
              <div className="project-title-row"><div><span className="project-kicker">YOUR OFFICE AT A GLANCE</span><h3>Good morning, office team <span>✦</span></h3><p>Here’s what needs your attention today.</p></div><span className="project-ui-button"><FilePlus2 size={12} /> New request</span></div>
              <div className="project-metrics">{[
                ["Needs review","6","New cases awaiting review","violet"], ["Urgent","3","High-priority requests","amber"], ["Citizen updates","9","Ready for a status update","blue"], ["Follow-ups due","4","Department replies pending","green"],
              ].map(([label,value,note,tone])=><div key={label}><span className={`metric-marker ${tone}`} /> <span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div>
              <div className="project-dashboard-grid"><div className="project-block"><div className="project-block-title"><h4>Your action checklist</h4><span>Today</span></div>{[["Review new cases","6 new requests need staff review","Review"],["Update citizens","9 citizens are waiting for a status update","Prepare"],["Check SLA risk","2 cases are approaching their deadline","View"]].map(([title,text,action],i)=><div className="project-action-row" key={title}><span className={`action-index tone-${i}`}>0{i+1}</span><div><strong>{title}</strong><small>{text}</small></div><span>{action} <ArrowUpRight size={10} /></span></div>)}</div><div className="project-block"><div className="project-block-title"><h4>Case overview</h4><MoreHorizontal size={15} /></div><div className="project-chart"><div className="project-donut"><strong>24<small>sample cases</small></strong></div><div className="project-chart-legend"><span><i /> In progress <b>12</b></span><span><i /> Forwarded <b>8</b></span><span><i /> Resolved <b>4</b></span></div></div></div></div>
              <div className="project-block project-recent"><div className="project-block-title"><h4>Recent activity</h4><span>View all ↗</span></div><div className="project-activity"><span className="activity-dot" /><p><strong>Department follow-up recorded</strong><small>Electricity supply restoration · Sample case</small></p><span>Just now</span></div></div>
            </> : active===1 ? <>
              <div className="project-title-row"><div><span className="project-kicker">CAPTURE → REVIEW → ACTION</span><h3>Intake queue</h3><p>Review incoming requests before creating a case.</p></div><span className="project-ui-button"><ScanLine size={12} /> Capture request</span></div>
              <div className="project-filter-row"><span className="selected">All requests <b>4</b></span><span>Needs review</span><span>Processing</span><SlidersHorizontal size={13} /></div>
              <div className="project-intake-list">{[
                ["IN-0042","Scan","Transformer repair request","Scanned document captured at the office counter.","Needs review","violet"],
                ["IN-0043","WhatsApp","Pension payment enquiry","Message received. Reading the request details.","Reading document","blue"],
                ["IN-0044","Email","School handpump maintenance","Email request ready for staff review.","Needs review","violet"],
                ["IN-0045","Voice","Local road repair request","Hindi voice note · 0:42","Transcribing","amber"],
              ].map(([id,channel,title,text,status,tone])=><div className="project-intake-card" key={id}><span className={`intake-channel ${tone}`}>{channel==="Scan"?<ScanLine size={17}/>:channel==="Email"?<Inbox size={17}/>:<FilePlus2 size={17}/>}</span><div><span className="intake-meta">{id} <i>·</i> {channel}</span><h4>{title}</h4><p>{text}</p></div><span className={`project-status ${tone}`}>{status}</span><ArrowUpRight size={15}/></div>)}</div>
              <div className="project-review-note"><CheckCircle2 size={14} /><span>Staff review stays in control before a request moves into the case workflow.</span></div>
            </> : <>
              <div className="project-title-row"><div><span className="project-kicker">A CLEAR NEXT STEP FOR EVERY REQUEST</span><h3>Cases</h3><p>Track department ownership, progress, and the next action.</p></div><span className="project-ui-button"><FilePlus2 size={12}/> New case</span></div>
              <div className="project-filter-row"><span className="selected">All cases</span><span>Needs review</span><span>In progress</span><span>Resolved</span><SlidersHorizontal size={13}/></div>
              <div className="project-table-wrap"><table className="project-table"><thead><tr><th>Case / request</th><th>Department</th><th>Status</th><th>Priority</th><th /></tr></thead><tbody>{cases.map(row=><tr key={row.id}><td><small>{row.id}</small><strong>{row.subject}</strong><small>{row.citizen}</small></td><td>{row.department}</td><td><span className={`project-status ${row.tone}`}>{row.status}</span></td><td><span className={`priority-dot ${row.priority==="Urgent"?"urgent":""}`} />{row.priority}</td><td><MoreHorizontal size={15}/></td></tr>)}</tbody></table></div>
              <div className="project-case-bottom"><span>Showing 4 illustrative cases</span><span>Department routing · Status history · Follow-ups</span></div>
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}
