import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const { data: session, status } = useSession()
  const [students, setStudents] = useState([])
  const [receipts, setReceipts] = useState([])
  const [classes, setClasses] = useState([])
  const [tab, setTab] = useState("dashboard")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session) loadData()
  }, [session])

  async function loadData() {
    setLoading(true)
    try {
      const [s, r, c] = await Promise.all([
        supabase.from("students").select("*").order("name"),
        supabase.from("receipts").select("*").order("date"),
        supabase.from("classes").select("*"),
      ])
      setStudents(s.data || [])
      setReceipts(r.data || [])
      setClasses(c.data || [])
    } catch(e) { console.error(e) }
    setLoading(false)
  }

  if (status === "loading") return <Loader />
  if (!session) return <Login />

  const mayTotal = receipts.filter(r => r.date && r.date.startsWith("2026-05")).reduce((s,r) => s + (r.amount||0), 0)
  const grandTotal = receipts.reduce((s,r) => s + (r.amount||0), 0)
  const today = new Date()
  const dayOfWeek = today.getDay()
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5

  const styles = {
    shell: { display:"flex", minHeight:"100vh", fontFamily:"sans-serif", background:"#FAF3EA" },
    sidebar: { width:200, background:"#7B3A10", display:"flex", flexDirection:"column", position:"sticky", top:0, height:"100vh" },
    sidebarTop: { padding:"20px 16px", borderBottom:"1px solid rgba(255,255,255,0.1)", textAlign:"center" },
    logo: { fontSize:32 },
    logoText: { fontFamily:"Georgia,serif", fontSize:14, color:"rgba(255,255,255,0.9)", marginTop:6 },
    logoSub: { fontSize:10, color:"rgba(255,255,255,0.45)", letterSpacing:".1em", textTransform:"uppercase" },
    nav: { padding:"12px 8px", flex:1 },
    navItem: (active) => ({ display:"flex", alignItems:"center", gap:8, padding:"9px 12px", borderRadius:8, fontSize:13, color: active ? "#fff" : "rgba(255,255,255,0.65)", cursor:"pointer", marginBottom:2, background: active ? "rgba(255,255,255,0.15)" : "none", border:"none", width:"100%", textAlign:"left", fontFamily:"sans-serif" }),
    main: { flex:1, display:"flex", flexDirection:"column" },
    topbar: { background:"white", borderBottom:"0.5px solid #E8D5C0", padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" },
    title: { fontFamily:"Georgia,serif", fontSize:20, color:"#7B3A10" },
    content: { padding:24 },
    statGrid: { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:20 },
    stat: { background:"white", border:"0.5px solid #E8D5C0", borderRadius:12, padding:"14px 16px" },
    statVal: { fontFamily:"Georgia,serif", fontSize:28, color:"#7B3A10" },
    statLbl: { fontSize:11, color:"#7A5C44", marginTop:4 },
    card: { background:"white", border:"0.5px solid #E8D5C0", borderRadius:12, padding:16, marginBottom:12 },
    sectionTitle: { fontFamily:"Georgia,serif", fontSize:17, color:"#7B3A10", marginBottom:12 },
    row: { display:"flex", alignItems:"center", gap:10, padding:"9px 0", borderBottom:"0.5px solid #F2E8D9" },
    avatar: { width:34, height:34, borderRadius:"50%", background:"#E8D5C0", color:"#7B3A10", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:600, flexShrink:0 },
    btn: { background:"#7B3A10", color:"white", border:"none", padding:"7px 14px", borderRadius:8, fontSize:12, cursor:"pointer", fontFamily:"sans-serif" },
    btnGold: { background:"#C8920A", color:"white", border:"none", padding:"7px 14px", borderRadius:8, fontSize:12, cursor:"pointer", fontFamily:"sans-serif" },
    pill: (color) => ({ fontSize:10, fontWeight:600, padding:"2px 8px", borderRadius:8, background: color==="green" ? "#D8F3DC" : color==="gold" ? "#FDF3DC" : "#F2E8D9", color: color==="green" ? "#2D6A4F" : color==="gold" ? "#C8920A" : "#7B3A10" }),
    table: { width:"100%", borderCollapse:"collapse" },
    th: { fontSize:11, fontWeight:600, color:"#7A5C44", textTransform:"uppercase", letterSpacing:".06em", padding:"8px 10px", textAlign:"left", borderBottom:"1px solid #E8D5C0" },
    td: { padding:"9px 10px", borderBottom:"0.5px solid #F2E8D9", fontSize:13, color:"#2C1810", verticalAlign:"middle" },
  }

  const tabs = [
    { id:"dashboard", label:"Dashboard", icon:"🏡" },
    { id:"students", label:"Students", icon:"🧘" },
    { id:"receipts", label:"Collections", icon:"💰" },
    { id:"schedule", label:"Schedule", icon:"📅" },
  ]

  const pageTitle = { dashboard:"Good morning, Dr. Arathi 🙏", students:"All Students", receipts:"Fee Collections", schedule:"Schedule & Meet" }

  return (
    <div style={styles.shell}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarTop}>
          <div style={styles.logo}>🪷</div>
          <div style={styles.logoText}>Yoga Samvidaa</div>
          <div style={styles.logoSub}>Studio Desk</div>
        </div>
        <nav style={styles.nav}>
          {tabs.map(t => (
            <button key={t.id} style={styles.navItem(tab===t.id)} onClick={() => setTab(t.id)}>
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </nav>
        <div style={{ padding:14, borderTop:"1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize:12, color:"rgba(255,255,255,0.7)", marginBottom:6 }}>Dr. Arathi</div>
          <button onClick={() => signOut()} style={{ fontSize:11, color:"rgba(255,255,255,0.5)", background:"none", border:"none", cursor:"pointer", padding:0 }}>Sign out</button>
        </div>
      </aside>

      <div style={styles.main}>
        <div style={styles.topbar}>
          <div style={styles.title}>{pageTitle[tab]}</div>
          <div style={{ fontSize:12, color:"#7A5C44", background:"#F2E8D9", padding:"5px 12px", borderRadius:16 }}>
            {today.toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}
          </div>
        </div>

        <div style={styles.content}>
          {loading && <div style={{ textAlign:"center", padding:40, color:"#7A5C44" }}>Loading... 🪷</div>}

          {!loading && tab === "dashboard" && (
            <div>
              <div style={styles.statGrid}>
                <div style={styles.stat}><div style={styles.statVal}>{students.length}</div><div style={styles.statLbl}>Active students</div></div>
                <div style={styles.stat}><div style={styles.statVal}>{receipts.length}</div><div style={styles.statLbl}>Total receipts</div></div>
                <div style={styles.stat}><div style={styles.statVal}>₹{mayTotal.toLocaleString("en-IN")}</div><div style={styles.statLbl}>Collected – May 2026</div></div>
                <div style={styles.stat}><div style={styles.statVal}>₹{grandTotal.toLocaleString("en-IN")}</div><div style={styles.statLbl}>Total Jan–May 2026</div></div>
              </div>
              <div style={styles.card}>
                <div style={styles.sectionTitle}>Today's classes — {isWeekday ? "Weekday" : "Weekend"}</div>
                {classes.filter(c => isWeekday ? ["fitness","therapy"].includes(c.id) : ["tinyyogis","weekend"].includes(c.id)).map(c => (
                  <div key={c.id} style={styles.row}>
                    <span style={{ fontSize:20 }}>{c.emoji}</span>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:14, fontWeight:500 }}>{c.name}</div>
                      <div style={{ fontSize:12, color:"#7A5C44" }}>{c.time_slot}</div>
                    </div>
                    {c.meet_link ? <a href={c.meet_link} target="_blank" rel="noreferrer" style={{ fontSize:12, color:"#1a6ea8" }}>Join Meet</a> : <span style={{ fontSize:12, color:"#B09880" }}>No Meet link</span>}
                  </div>
                ))}
              </div>
              <div style={styles.card}>
                <div style={styles.sectionTitle}>Recent receipts</div>
                {[...receipts].sort((a,b) => b.date?.localeCompare(a.date)).slice(0,5).map(r => (
                  <div key={r.id} style={styles.row}>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:13, fontWeight:500 }}>{r.id} · {r.student}</div>
                      <div style={{ fontSize:11, color:"#7A5C44" }}>{r.date} · {r.class_raw}</div>
                    </div>
                    <div style={{ fontSize:14, fontWeight:600, color:"#7B3A10" }}>₹{(r.amount||0).toLocaleString("en-IN")}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && tab === "students" && (
            <div style={styles.card}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                <div style={styles.sectionTitle}>All Students ({students.length})</div>
              </div>
              {students.map((s,i) => {
                const recs = receipts.filter(r => r.csid === s.csid)
                const total = recs.reduce((sum,r) => sum+(r.amount||0), 0)
                return (
                  <div key={s.id} style={styles.row}>
                    <div style={{ fontSize:12, color:"#B09880", minWidth:24 }}>{i+1}</div>
                    <div style={styles.avatar}>{s.initials || s.name?.slice(0,2).toUpperCase()}</div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:14, fontWeight:500 }}>{s.name} <span style={{ fontSize:11, color:"#B09880" }}>{s.csid}</span></div>
                      <div style={{ fontSize:12, color:"#7A5C44" }}>{s.class_id} · {s.phone ? s.phone.slice(0,4)+"XXXXXX" : ""}</div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:12, fontWeight:600, color:"#7B3A10" }}>₹{total.toLocaleString("en-IN")}</div>
                      <div style={{ fontSize:11, color:"#B09880" }}>{recs.length} receipt{recs.length!==1?"s":""}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {!loading && tab === "receipts" && (
            <div style={styles.card}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:16 }}>
                <div style={styles.stat}><div style={styles.statVal}>₹{mayTotal.toLocaleString("en-IN")}</div><div style={styles.statLbl}>May 2026</div></div>
                <div style={styles.stat}><div style={styles.statVal}>{receipts.length}</div><div style={styles.statLbl}>Total receipts</div></div>
                <div style={styles.stat}><div style={styles.statVal}>₹{grandTotal.toLocaleString("en-IN")}</div><div style={styles.statLbl}>Jan–May total</div></div>
              </div>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Student</th>
                    <th style={styles.th}>Class</th>
                    <th style={styles.th}>Amount</th>
                    <th style={styles.th}>Mode</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...receipts].sort((a,b) => a.date?.localeCompare(b.date)).map(r => (
                    <tr key={r.id}>
                      <td style={styles.td}><strong>{r.student}</strong><div style={{ fontSize:11, color:"#B09880" }}>{r.csid}</div></td>
                      <td style={styles.td}>{r.class_raw}</td>
                      <td style={styles.td}>{r.amount > 0 ? <strong>₹{r.amount.toLocaleString("en-IN")}</strong> : "—"}</td>
                      <td style={styles.td}>{r.mode || "—"}</td>
                      <td style={styles.td}>{r.date ? new Date(r.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}) : "—"}</td>
                      <td style={styles.td}>{r.amount > 0 ? <span style={styles.pill("green")}>✓ Paid</span> : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!loading && tab === "schedule" && (
            <div style={styles.card}>
              <div style={styles.sectionTitle}>Classes & Meet Links</div>
              {classes.map(c => (
                <div key={c.id} style={{ ...styles.row, alignItems:"flex-start", padding:"12px 0" }}>
                  <span style={{ fontSize:22 }}>{c.emoji}</span>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14, fontWeight:500 }}>{c.name}</div>
                    <div style={{ fontSize:12, color:"#7A5C44", marginTop:2 }}>{c.days} · {c.time_slot}</div>
                    <div style={{ fontSize:12, color:"#7A5C44", marginTop:2 }}>₹{(c.price||0).toLocaleString("en-IN")}/{c.per}</div>
                    {c.meet_link && <a href={c.meet_link} target="_blank" rel="noreferrer" style={{ fontSize:12, color:"#1a6ea8", marginTop:4, display:"block" }}>{c.meet_link}</a>}
                  </div>
                  {!c.meet_link && <span style={{ fontSize:12, color:"#B09880" }}>No Meet link yet</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Loader() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:40 }}>🪷</div>
        <div style={{ fontFamily:"Georgia,serif", color:"#7B3A10", marginTop:8 }}>Loading...</div>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA", fontFamily:"sans-serif" }}>
      <div style={{ textAlign:"center", padding:40 }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🪷</div>
        <div style={{ fontFamily:"Georgia,serif", fontSize:28, color:"#7B3A10", marginBottom:4 }}>Yoga Samvidaa</div>
        <div style={{ fontSize:13, color:"#7A5C44", letterSpacing:".12em", textTransform:"uppercase", marginBottom:32 }}>Studio Desk</div>
        <button onClick={() => signIn("google")} style={{ background:"#7B3A10", color:"#fff", border:"none", padding:"12px 28px", borderRadius:24, fontSize:14, fontWeight:500, cursor:"pointer" }}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}