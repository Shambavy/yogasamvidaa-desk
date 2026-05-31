import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <div style={{
      minHeight:"100vh", display:"flex", alignItems:"center",
      justifyContent:"center", background:"#FAF3EA",
      fontFamily:"Jost, sans-serif"
    }}>
      <div style={{ textAlign:"center", padding:40 }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🪷</div>
        <div style={{ fontFamily:"Cormorant Garamond, serif", fontSize:28, color:"#7B3A10", marginBottom:4 }}>
          Yoga Samvidaa
        </div>
        <div style={{ fontSize:13, color:"#7A5C44", letterSpacing:".12em", textTransform:"uppercase", marginBottom:32 }}>
          Studio Desk
        </div>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          style={{
            background:"#7B3A10", color:"#fff", border:"none",
            padding:"12px 28px", borderRadius:24, fontSize:14,
            fontWeight:500, cursor:"pointer", fontFamily:"inherit",
            display:"flex", alignItems:"center", gap:10, margin:"0 auto"
          }}
        >
          <span>Sign in with Google</span>
        </button>
        <div style={{ fontSize:11, color:"#B09880", marginTop:16 }}>
          Use Dr. Arathi's Google account to sync Calendar & Meet
        </div>
      </div>
    </div>
  )
}