import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react"

export default function Home() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) window.location.href = "/desk.html"
  }, [session])

  if (status === "loading") return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:40 }}>🪷</div>
        <div style={{ fontFamily:"Georgia,serif", color:"#7B3A10", marginTop:8 }}>Loading...</div>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA", fontFamily:"sans-serif" }}>
      <div style={{ textAlign:"center", padding:40 }}>
        <img src="/logo.png" style={{ width:90, height:90, borderRadius:"50%", marginBottom:16 }} />
        <div style={{ fontFamily:"Georgia,serif", fontSize:28, color:"#7B3A10", marginBottom:4 }}>Yoga Samvidaa</div>
        <div style={{ fontSize:13, color:"#7A5C44", letterSpacing:".12em", textTransform:"uppercase", marginBottom:32 }}>Studio Desk</div>
        <button onClick={() => signIn("google")} style={{ background:"#7B3A10", color:"#fff", border:"none", padding:"12px 28px", borderRadius:24, fontSize:14, fontWeight:500, cursor:"pointer" }}>
          Sign in with Google
        </button>
        <div style={{ fontSize:11, color:"#B09880", marginTop:16 }}>Use Dr. Arathi's Google account</div>
      </div>
    </div>
  )
}