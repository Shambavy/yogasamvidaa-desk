import { useSession, signIn } from "next-auth/react"
import { useEffect, useRef } from "react"
import Head from "next/head"

const APP_CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --brown:#7B3A10;
  --brown2:#A0522D;
  --brown-light:#E8D5C0;
  --cream:#FAF3EA;
  --cream2:#F2E8D9;
  --cream3:#EAD9C4;
  --gold:#C8920A;
  --gold-light:#FDF3DC;
  --ink:#2C1810;
  --muted:#7A5C44;
  --hint:#B09880;
  --white:#FFFDF9;
  --green:#2D6A4F;
  --green-l:#D8F3DC;
  --red:#C0392B;
  --red-l:#FDECEA;
  --blue:#1a6ea8;
  --blue-l:#E3F2FD;
  --border:rgba(123,58,16,.13);
  --border2:rgba(123,58,16,.22);
  --shadow:0 2px 16px rgba(44,24,16,.08);
  --shadow2:0 4px 24px rgba(44,24,16,.14);
}

html,body{height:100%;background:var(--cream);color:var(--ink);font-family:'Jost',sans-serif}

/* ── LAYOUT ── */
.shell{display:flex;min-height:100vh}
.sidebar{width:220px;background:var(--brown);flex-shrink:0;display:flex;flex-direction:column;position:sticky;top:0;height:100vh;overflow-y:auto}
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{background:var(--white);border-bottom:0.5px solid var(--border2);padding:14px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;box-shadow:var(--shadow)}
.content{flex:1;padding:28px;overflow-y:auto}

/* ── SIDEBAR ── */
.sb-logo{padding:20px 16px 14px;border-bottom:1px solid rgba(255,255,255,.1);text-align:center}
.sb-logo img{width:64px;height:64px;object-fit:contain;filter:brightness(0) invert(1);opacity:.9}
.sb-logo-text{font-family:'Cormorant Garamond',serif;font-size:15px;color:rgba(255,255,255,.9);margin-top:8px;font-weight:400;letter-spacing:.04em}
.sb-logo-sub{font-size:10px;color:rgba(255,255,255,.45);letter-spacing:.12em;text-transform:uppercase;margin-top:2px}
.sb-nav{padding:12px 8px;flex:1}
.sb-section{font-size:9px;font-weight:600;color:rgba(255,255,255,.3);letter-spacing:.14em;text-transform:uppercase;padding:12px 12px 6px}
.sb-item{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;font-size:13px;color:rgba(255,255,255,.65);cursor:pointer;margin-bottom:2px;transition:all .15s;font-family:'Jost',sans-serif;border:none;background:none;width:100%;text-align:left}
.sb-item:hover{background:rgba(255,255,255,.08);color:rgba(255,255,255,.9)}
.sb-item.active{background:rgba(255,255,255,.15);color:#fff;font-weight:500}
.sb-item .icon{font-size:16px;width:20px;text-align:center;flex-shrink:0}
.sb-item .badge{margin-left:auto;background:var(--gold);color:#fff;font-size:9px;font-weight:700;padding:1px 6px;border-radius:8px}
.sb-bottom{padding:14px;border-top:1px solid rgba(255,255,255,.1)}
.sb-dr{display:flex;align-items:center;gap:8px}
.sb-dr-avatar{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:#fff;flex-shrink:0}
.sb-dr-name{font-size:12px;color:rgba(255,255,255,.8);font-weight:500}
.sb-dr-role{font-size:10px;color:rgba(255,255,255,.4)}

/* ── TOPBAR ── */
.tb-title{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:400;color:var(--brown);font-style:italic}
.tb-date{font-size:12px;color:var(--muted);background:var(--cream2);padding:5px 12px;border-radius:16px;border:0.5px solid var(--border)}
.tb-actions{display:flex;align-items:center;gap:10px}

/* ── PAGES ── */
.page{display:none}.page.active{display:block}

/* ── CARDS ── */
.card{background:var(--white);border:0.5px solid var(--border2);border-radius:14px;padding:20px;box-shadow:var(--shadow)}
.card-title{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:600;color:var(--brown);margin-bottom:14px}

/* ── STAT GRID ── */
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
.stat-card{background:var(--white);border:0.5px solid var(--border2);border-radius:14px;padding:16px 18px;box-shadow:var(--shadow);position:relative;overflow:hidden}
.stat-card::before{content:'';position:absolute;top:-20px;right:-20px;width:70px;height:70px;border-radius:50%;background:var(--cream2);opacity:.6}
.stat-val{font-family:'Cormorant Garamond',serif;font-size:32px;font-weight:600;color:var(--brown);line-height:1}
.stat-lbl{font-size:11px;color:var(--muted);margin-top:5px;font-weight:400}
.stat-sub{font-size:11px;color:var(--hint);margin-top:2px}

/* ── SECTION HEADING ── */
.sec-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:600;color:var(--brown)}
.sec-sub{font-size:12px;color:var(--hint);margin-top:1px}

/* ── BUTTONS ── */
.btn{font-family:'Jost',sans-serif;font-size:13px;font-weight:500;padding:8px 16px;border-radius:8px;cursor:pointer;border:none;transition:all .15s}
.btn-primary{background:var(--brown);color:#fff}.btn-primary:hover{background:var(--brown2)}
.btn-secondary{background:var(--cream2);color:var(--brown);border:0.5px solid var(--border2)}.btn-secondary:hover{background:var(--cream3)}
.btn-green{background:var(--green);color:#fff}.btn-green:hover{opacity:.88}
.btn-gold{background:var(--gold);color:#fff}.btn-gold:hover{opacity:.88}
.btn-wa{background:#25D366;color:#fff}.btn-wa:hover{opacity:.88}
.btn-sm{padding:5px 11px;font-size:12px;border-radius:7px}
.btn-icon{width:32px;height:32px;padding:0;display:flex;align-items:center;justify-content:center;font-size:15px}

/* ── FORM CONTROLS ── */
.form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:12px}
.form-label{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.07em}
.form-control{font-family:'Jost',sans-serif;font-size:13px;padding:9px 12px;border:0.5px solid var(--border2);border-radius:8px;background:var(--white);color:var(--ink);outline:none;transition:border-color .15s;width:100%}
.form-control:focus{border-color:var(--brown2)}
.form-row{display:grid;gap:12px}
.form-row-2{grid-template-columns:1fr 1fr}
.form-row-3{grid-template-columns:1fr 1fr 1fr}

/* ── TABLES / LISTS ── */
.list-item{display:flex;align-items:center;gap:12px;padding:11px 14px;border:0.5px solid var(--border);border-radius:10px;margin-bottom:7px;background:var(--white);transition:border-color .15s;cursor:pointer}
.list-item:hover{border-color:var(--brown-light)}
.list-item-body{flex:1;min-width:0}
.list-item-title{font-size:14px;font-weight:500;color:var(--ink)}
.list-item-sub{font-size:12px;color:var(--muted);margin-top:2px}

/* ── AVATAR ── */
.avatar{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;flex-shrink:0;font-family:'Jost',sans-serif}

/* ── PILLS / BADGES ── */
.pill{font-size:10px;font-weight:600;padding:2px 8px;border-radius:8px;letter-spacing:.04em;display:inline-flex;align-items:center}
.pill-green{background:var(--green-l);color:var(--green)}
.pill-red{background:var(--red-l);color:var(--red)}
.pill-gold{background:var(--gold-light);color:var(--gold)}
.pill-brown{background:var(--cream2);color:var(--brown)}
.pill-blue{background:var(--blue-l);color:var(--blue)}

/* ── DIVIDER ── */
.divider{height:0.5px;background:var(--border);margin:16px 0}

/* ── TODAY CLASSES STRIP ── */
.class-strip{border:0.5px solid var(--border2);border-radius:12px;overflow:hidden;margin-bottom:10px;background:var(--white)}
.class-strip-head{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:0.5px solid var(--border)}
.class-strip-time{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:400;color:var(--brown);min-width:80px;flex-shrink:0}
.class-strip-info{flex:1}
.class-strip-name{font-size:14px;font-weight:500;color:var(--ink)}
.class-strip-sub{font-size:12px;color:var(--muted);margin-top:1px}
.class-strip-actions{display:flex;gap:7px;flex-shrink:0}
.class-strip-foot{padding:8px 16px;background:var(--cream);display:flex;align-items:center;gap:8px}
.meet-link{font-size:12px;color:var(--blue);text-decoration:none;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

/* ── RECEIPT PREVIEW ── */
.receipt-doc{background:#fff;border:1px solid #ccc;border-radius:4px;font-family:'Jost',sans-serif;overflow:hidden;box-shadow:0 2px 20px rgba(0,0,0,.1)}
.rcpt-header{background:#2E7BB4;padding:14px 20px;display:flex;justify-content:space-between;align-items:center}
.rcpt-header-left{font-size:22px;font-weight:700;color:#fff;letter-spacing:.06em}
.rcpt-header-right{font-size:20px;font-weight:700;color:rgba(255,255,255,.7);letter-spacing:.06em}
.rcpt-subheader{background:#3A5A7A;padding:7px 20px;display:flex;justify-content:space-between}
.rcpt-subheader span{font-size:12px;color:rgba(255,255,255,.8);font-weight:500;letter-spacing:.06em}
.rcpt-body{padding:18px 20px}
.rcpt-address-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.rcpt-addr-box{background:#D9E5F0;padding:10px 12px;border-radius:2px}
.rcpt-addr-label{font-size:10px;font-weight:700;color:#2E7BB4;text-transform:uppercase;letter-spacing:.08em;display:flex;gap:4px;margin-bottom:4px}
.rcpt-addr-text{font-size:11px;color:#333;line-height:1.6}
.rcpt-desc-head{display:flex;justify-content:space-between;padding:5px 8px;background:#E8EEF5}
.rcpt-desc-head span{font-size:11px;font-weight:700;color:#2E7BB4;letter-spacing:.06em}
.rcpt-desc-row{display:flex;justify-content:space-between;padding:8px 8px;border-bottom:1px dashed #eee}
.rcpt-desc-row span{font-size:13px;color:#333}
.rcpt-paid-stamp{position:relative;text-align:center;padding:24px 0 10px}
.rcpt-paid-text{font-size:72px;font-weight:900;color:rgba(150,150,150,.18);letter-spacing:.1em;line-height:1;text-transform:uppercase;font-family:'Jost',sans-serif}
.rcpt-totals{margin-left:auto;width:220px;border-top:1px solid #A8C4D8;margin-top:8px}
.rcpt-total-row{display:flex;justify-content:space-between;padding:4px 8px;font-size:12px;color:#555}
.rcpt-total-row.final{background:#2E7BB4;color:#fff;font-weight:700;font-size:13px;padding:6px 8px}

/* ── ATTENDANCE GRID ── */
.attend-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;margin-bottom:14px}
.attend-card{border:1.5px solid var(--border);border-radius:10px;padding:10px 12px;cursor:pointer;transition:all .15s;background:var(--white)}
.attend-card.present{border-color:var(--green);background:#EEF8F1}
.attend-card.absent{border-color:var(--red);background:var(--red-l)}
.attend-card-name{font-size:13px;font-weight:500;color:var(--ink);margin-top:4px}
.attend-card-status{font-size:11px;font-weight:600;margin-top:5px}

/* ── MODAL ── */
.modal-overlay{position:fixed;inset:0;background:rgba(44,24,16,.45);z-index:100;display:flex;align-items:center;justify-content:center;padding:20px}
.modal{background:var(--white);border-radius:16px;padding:24px;width:100%;max-width:460px;box-shadow:0 8px 40px rgba(44,24,16,.2);max-height:90vh;overflow-y:auto}
.modal-title{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:var(--brown);margin-bottom:18px}
.modal-footer{display:flex;gap:8px;justify-content:flex-end;margin-top:18px}

/* ── REMINDER MESSAGE BOX ── */
.reminder-box{background:var(--gold-light);border:1px solid rgba(200,146,10,.25);border-radius:10px;padding:14px 16px;font-size:13px;color:var(--ink);line-height:1.7;white-space:pre-wrap;font-family:'Jost',sans-serif}
.reminder-box em{color:var(--brown);font-style:normal;font-weight:600}

/* ── SCHEDULE TABLE ── */
.sched-table{width:100%;border-collapse:collapse}
.sched-table th{font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;padding:8px 12px;text-align:left;border-bottom:1px solid var(--border2)}
.sched-table td{padding:10px 12px;border-bottom:0.5px solid var(--border);font-size:13px;color:var(--ink);vertical-align:middle}
.sched-table tr:hover td{background:var(--cream)}

/* ── TOAST ── */
.toast{position:fixed;top:20px;left:50%;transform:translateX(-50%);background:var(--brown);color:#fff;padding:10px 20px;border-radius:20px;font-size:13px;font-weight:500;z-index:999;box-shadow:var(--shadow2);animation:toastIn .2s ease}
@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(-8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

/* ── SCROLLBAR ── */
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:var(--brown-light);border-radius:4px}

/* ── RESPONSIVE ── */
@media(max-width:700px){
  .sidebar{display:none}
  .stat-grid{grid-template-columns:1fr 1fr}
  .form-row-2,.form-row-3{grid-template-columns:1fr}
}
`
const APP_HTML = `<div class="shell">
  <!-- ════════════════════════════ SIDEBAR ════════════════════════════ -->
  <aside class="sidebar">
    <div class="sb-logo">
      <svg width="76" height="76" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="logoGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#D4841A"/>
            <stop offset="100%" stop-color="#6B2E08"/>
          </radialGradient>
        </defs>
        <!-- Outer ring -->
        <circle cx="38" cy="38" r="36" fill="url(#logoGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
        <!-- Inner ring -->
        <circle cx="38" cy="38" r="30" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
        <!-- Decorative dots at cardinal points -->
        <circle cx="38" cy="5"  r="1.8" fill="rgba(255,255,255,0.55)"/>
        <circle cx="38" cy="71" r="1.8" fill="rgba(255,255,255,0.55)"/>
        <circle cx="5"  cy="38" r="1.8" fill="rgba(255,255,255,0.55)"/>
        <circle cx="71" cy="38" r="1.8" fill="rgba(255,255,255,0.55)"/>
        <!-- Small dots between -->
        <circle cx="17" cy="11" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <circle cx="59" cy="11" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <circle cx="17" cy="65" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <circle cx="59" cy="65" r="1.2" fill="rgba(255,255,255,0.35)"/>
        <!-- Goddess head (simplified) -->
        <ellipse cx="38" cy="28" rx="7" ry="8.5" fill="rgba(255,255,255,0.88)"/>
        <!-- Crown/headdress suggestion -->
        <path d="M31,23 Q38,16 45,23" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.8)" stroke-width="0.5"/>
        <path d="M33,20 Q38,14 43,20" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" stroke-width="0.5"/>
        <!-- Eyes -->
        <ellipse cx="35" cy="27" rx="1.5" ry="1.2" fill="#6B2E08"/>
        <ellipse cx="41" cy="27" rx="1.5" ry="1.2" fill="#6B2E08"/>
        <!-- Subtle smile -->
        <path d="M35.5,31.5 Q38,33.5 40.5,31.5" fill="none" stroke="#6B2E08" stroke-width="0.8" stroke-linecap="round"/>
        <!-- Shoulders / body suggestion -->
        <path d="M28,38 Q38,42 48,38" fill="rgba(255,255,255,0.5)" stroke="none"/>
        <!-- YOGA text arc top -->
        <path id="topArc" d="M14,38 A24,24 0 0,1 62,38" fill="none"/>
        <text font-size="7" font-weight="700" fill="white" letter-spacing="3" font-family="serif">
          <textPath href="#topArc" startOffset="12%">Y O G A</textPath>
        </text>
        <!-- SAMVIDAA text arc bottom -->
        <path id="botArc" d="M10,40 A28,28 0 0,0 66,40" fill="none"/>
        <text font-size="6.5" font-weight="700" fill="white" letter-spacing="2" font-family="serif">
          <textPath href="#botArc" startOffset="5%">S A M V I D A A</textPath>
        </text>
      </svg>
      <div class="sb-logo-text">Yoga Samvidaa</div>
      <div class="sb-logo-sub">Heal from within</div>
    </div>

    <nav class="sb-nav">
      <div class="sb-section">Main</div>
      <button class="sb-item active" onclick="nav('dashboard',this)"><span class="icon">🏡</span> Dashboard</button>
      <button class="sb-item" onclick="nav('schedule',this)"><span class="icon">📅</span> Schedule & Meet</button>
      <button class="sb-item" onclick="nav('attendance',this)"><span class="icon">✅</span> Attendance</button>

      <div class="sb-section">Finances</div>
      <button class="sb-item" onclick="nav('receipts',this)"><span class="icon">🧾</span> Receipts</button>
      <button class="sb-item" onclick="nav('collections',this)"><span class="icon">💰</span> Collections</button>

      <div class="sb-section">Students</div>
      <button class="sb-item" onclick="nav('students',this)"><span class="icon">🧘</span> All Students <span class="badge" id="studentCountBadge" style="background:rgba(255,255,255,0.25)">39</span></button>
      <button class="sb-item" onclick="nav('reminders',this)"><span class="icon">💬</span> Reminders</button>
    </nav>

    <div class="sb-bottom">
      <div class="sb-dr">
        <div class="sb-dr-avatar">A</div>
        <div>
          <div class="sb-dr-name">Dr. Arathi</div>
          <div class="sb-dr-role">Founder</div><button onclick="window.location.href='/api/auth/signout'" style="font-size:10px;color:rgba(255,255,255,0.4);background:none;border:none;cursor:pointer;margin-top:4px;font-family:inherit;padding:0">Sign out</button>
        </div>
      </div>
    </div>
  </aside>

  <!-- ════════════════════════════ MAIN ════════════════════════════ -->
  <div class="main">
    <div class="topbar">
      <div>
        <div class="tb-title" id="pageTitle">Good morning, Dr. Arathi 🙏</div>
        
      </div>
      <div class="tb-actions">
        <div class="tb-date" id="todayDate"></div>
        <button class="btn btn-primary btn-sm" onclick="openModal('newStudentModal')">+ New student</button>
      </div>
    </div>

    <div class="content">

      <!-- ═══════════ DASHBOARD ═══════════ -->
      <div id="dashboard" class="page active">
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-val" id="statStudents">39</div>
            <div class="stat-lbl">Active students</div>
            <div class="stat-sub">Jan – May 2026</div>
          </div>
          <div class="stat-card">
            <div class="stat-val" id="statToday">4</div>
            <div class="stat-lbl">Classes today</div>
            <div class="stat-sub">2 online · 2 in-studio</div>
          </div>
          <div class="stat-card">
            <div class="stat-val" id="statFee">₹46,000</div>
            <div class="stat-lbl">Collected – May</div>
            <div class="stat-sub">17 students paid in May</div>
          </div>
          <div class="stat-card" style="border-color:rgba(200,146,10,.3)">
            <div class="stat-val" style="color:var(--gold)" id="statExpiring">2</div>
            <div class="stat-lbl">Expiring soon</div>
            <div class="stat-sub">renew this week</div>
          </div>
        </div>

        <div class="form-row form-row-2" style="gap:20px">
          <div>
            <div class="sec-head">
              <div><div class="sec-title">Today's classes</div><div class="sec-sub" id="todayDayLabel"></div></div>
            </div>
            <div id="todayClassList"></div>
          </div>
          <div>
            <div class="sec-head">
              <div><div class="sec-title">Expiring memberships</div><div class="sec-sub">Renew before next class</div></div>
            </div>
            <div id="expiringList"></div>
          </div>
        </div>
      </div>

      <!-- ═══════════ SCHEDULE & MEET ═══════════ -->
      <div id="schedule" class="page">
        <div class="sec-head">
          <div><div class="sec-title">Class Schedule & Google Meet</div><div class="sec-sub">All classes · paste your existing Meet links or generate new ones</div></div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-primary btn-sm" onclick="connectCalendar()">🗓 Sync Google Calendar</button>
            <button class="btn btn-secondary btn-sm" onclick="openModal('newApptModal')">+ New appointment</button>
          </div>
        </div>
        <!-- Calendar info banner -->
        <div style="background:var(--cream2);border:0.5px solid var(--border2);border-radius:8px;padding:10px 16px;margin-bottom:14px;font-size:12px;color:var(--muted);display:flex;gap:8px;align-items:flex-start">
          <span style="font-size:16px;flex-shrink:0">🗓</span>
          <div><strong style="color:var(--brown)">About Sync Google Calendar:</strong> This will add all your recurring classes to your Google Calendar so you always have a reminder. It does <em>not</em> send any emails or notifications to students — it only updates your own calendar. You'll be asked to sign in with Google once.</div>
        </div>
        <!-- Meet link info banner -->
        <div style="background:var(--blue-l);border:0.5px solid rgba(26,110,168,.2);border-radius:8px;padding:10px 16px;margin-bottom:14px;font-size:12px;color:#1a4a6e;display:flex;gap:8px;align-items:flex-start">
          <span style="font-size:16px;flex-shrink:0">📹</span>
          <div><strong>About Meet links:</strong> For group classes you can generate a new permanent link — it will be reused every session. <strong>No email is sent to anyone when you generate a link.</strong> For Therapy & Vedic Chanting, paste your own existing Meet link since those are appointment-by-appointment.</div>
        </div>
        <div id="calSyncBanner" style="display:none;background:var(--green-l);border:0.5px solid #95d5a8;border-radius:8px;padding:10px 14px;font-size:13px;color:var(--green);margin-bottom:14px">
          ✓ Google Calendar synced — all recurring classes are added to your calendar. No emails sent to students.
        </div>
        <div class="card" style="padding:0;overflow:hidden">
          <table class="sched-table">
            <thead>
              <tr>
                <th>Class</th><th>Days</th><th>Time</th><th>Fee</th><th>Students</th><th>Meet link</th><th></th>
              </tr>
            </thead>
            <tbody id="scheduleTableBody"></tbody>
          </table>
        </div>

        <div style="margin-top:24px">
          <div class="sec-head"><div class="sec-title">Upcoming 1-on-1 appointments</div></div>
          <div id="apptList"></div>
          <div id="apptEmpty" style="font-size:13px;color:var(--hint);padding:10px 0">No appointments scheduled yet. Add one using the button above.</div>
        </div>
      </div>

      <!-- ═══════════ ATTENDANCE ═══════════ -->
      <div id="attendance" class="page">
        <div class="sec-head">
          <div><div class="sec-title">Mark Attendance</div></div>
          <div style="display:flex;gap:8px;align-items:center">
            <select class="form-control" id="attendClassSelect" style="width:auto" onchange="buildAttendGrid()"></select>
            <div style="font-size:12px;color:var(--muted)" id="attendDateLabel"></div>
          </div>
        </div>
        <div style="background:var(--cream2);border-radius:8px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--brown);display:flex;justify-content:space-between;align-items:center">
          <span id="attendSummary">Tap a student to mark present or absent</span>
          <div style="display:flex;gap:6px">
            <button class="btn btn-secondary btn-sm" onclick="markAll(true)">All present</button>
            <button class="btn btn-secondary btn-sm" onclick="markAll(false)">Clear</button>
          </div>
        </div>
        <div class="attend-grid" id="attendGrid"></div>
        <button class="btn btn-primary" style="width:100%;padding:11px" onclick="saveAttendance()">Save attendance for this class</button>
      </div>

      <!-- ═══════════ RECEIPTS ═══════════ -->
      <div id="receipts" class="page">
        <div class="form-row form-row-2" style="gap:20px">
          <div>
            <div class="sec-title" style="margin-bottom:14px">Generate Receipt</div>
            <div class="card">
              <div class="form-group">
                <label class="form-label">Student</label>
                <select class="form-control" id="rcptStudent" onchange="onRcptStudentChange()">
                  <option value="">Select student…</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Careseeker ID</label>
                <input class="form-control" id="rcptCSID" placeholder="e.g. YSPS1145">
              </div>
              <div class="form-group">
                <label class="form-label">Class / Description</label>
                <select class="form-control" id="rcptClass" onchange="onRcptClassChange()">
                  <option value="">Select class…</option>
                </select>
              </div>
              <div class="form-row form-row-2">
                <div class="form-group">
                  <label class="form-label">Amount (₹)</label>
                  <input class="form-control" type="number" id="rcptAmt" placeholder="0" oninput="refreshReceipt()">
                  <div id="rcptFeeNote" style="font-size:10px;color:var(--brown);margin-top:3px"></div>
                </div>
                <div class="form-group">
                  <label class="form-label">Invoice #</label>
                  <input class="form-control" id="rcptInvNum" placeholder="53">
                </div>
              </div>
              <div class="form-row form-row-2">
                <div class="form-group">
                  <label class="form-label">Payment mode</label>
                  <select class="form-control" id="rcptMode" onchange="refreshReceipt()">
                    <option>UPI</option><option>Cash</option><option>Card</option><option>Bank transfer</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Date</label>
                  <input class="form-control" type="date" id="rcptDate" oninput="refreshReceipt()">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Student phone</label>
                <input class="form-control" id="rcptPhone" placeholder="+91 ...">
              </div>
              <div style="display:flex;gap:8px;margin-top:4px">
                <button class="btn btn-primary" style="flex:1" onclick="generateReceipt()">Generate & save</button>
              </div>
            </div>
          </div>

          <div>
            <div class="sec-title" style="margin-bottom:14px">Preview</div>
            <div id="receiptPreviewWrap">
              <div style="padding:40px;text-align:center;color:var(--hint);font-size:13px;background:var(--cream2);border-radius:12px;border:0.5px solid var(--border)">
                Fill the form to preview the receipt
              </div>
            </div>
            <div id="rcptActions" style="display:none;margin-top:10px">
              <div style="background:var(--green-l);border-radius:8px;padding:10px 14px;font-size:13px;color:var(--green);margin-bottom:10px;display:flex;align-items:center;gap:8px">
                <span>✓</span> Receipt generated and saved. Share with student:
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn btn-wa" style="flex:1" onclick="previewWhatsApp()">📱 Preview & Send on WhatsApp</button>
                <button class="btn btn-secondary" onclick="previewPrint()">🖨 Preview & Print</button>
              </div>
            </div>

            <div style="margin-top:20px">
              <div class="sec-title" style="font-size:15px;margin-bottom:10px">Recent receipts</div>
              <div id="recentReceiptsList"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════ COLLECTIONS ═══════════ -->
      <div id="collections" class="page">
        <div class="sec-head" style="flex-wrap:wrap;gap:10px">
          <div><div class="sec-title">Fee Collections</div><div class="sec-sub">Jan – May 2026 · all receipts</div></div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <select id="studentFilterSelect" class="form-control" style="width:220px;font-size:13px" onchange="onStudentFilter(this.value)">
              <option value="">All students</option>
            </select>
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('studentFilterSelect').value='';buildCollections('')">Clear</button>
          </div>
        </div>
        <div id="filterTotal" style="font-size:13px;color:var(--muted);margin-bottom:12px;padding:8px 14px;background:var(--cream2);border-radius:8px;display:none"></div>
        <div class="stat-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="stat-card">
            <div class="stat-val" id="coll_stat1">₹46,000</div>
            <div class="stat-lbl" id="coll_lbl1">Collected – May 2026</div>
          </div>
          <div class="stat-card">
            <div class="stat-val" id="coll_stat2">55</div>
            <div class="stat-lbl" id="coll_lbl2">Total receipts</div>
          </div>
          <div class="stat-card">
            <div class="stat-val" id="coll_stat3">₹98,500</div>
            <div class="stat-lbl" id="coll_lbl3">Total Jan – May 2026</div>
          </div>
        </div>
        <div class="card" style="padding:0;overflow:hidden">
          <table class="sched-table">
            <thead><tr><th>Student</th><th>Class</th><th>Amount</th><th>Mode</th><th>Date</th><th>Status</th><th></th></tr></thead>
            <tbody id="collectionsBody"></tbody>
          </table>
        </div>
      </div>

      <!-- ═══════════ STUDENTS ═══════════ -->
      <div id="students" class="page">
        <div class="sec-head">
          <div><div class="sec-title">All Students</div></div>
          <div style="display:flex;gap:8px">
            <select class="form-control" style="width:220px;font-size:13px" id="studentDropdown" onchange="filterStudents(this.value)">
              <option value="">All students (39)</option>
            </select>
            <button class="btn btn-primary btn-sm" onclick="openModal('newStudentModal')">+ Add student</button>
          </div>
        </div>
        <div id="studentListWrap"></div>
      </div>

      <!-- ═══════════ REMINDERS ═══════════ -->
      <div id="reminders" class="page">
        <div class="sec-head">
          <div><div class="sec-title">Class Reminders</div><div class="sec-sub">Auto-composed in Dr. Arathi's exact format · one tap to send</div></div>
        </div>
        <div style="background:var(--cream2);border:0.5px solid var(--border2);border-radius:10px;padding:12px 16px;margin-bottom:18px;font-size:13px;color:var(--muted)">
          💡 Reminders are auto-drafted for <strong style="color:var(--brown)">tomorrow's classes</strong> based on the schedule. Tap <strong style="color:var(--brown)">Send on WhatsApp</strong> to open the pre-filled message.
        </div>
        <div id="remindersList"></div>
      </div>

    </div><!-- /content -->
  </div><!-- /main -->
</div><!-- /shell -->

<!-- ════════════ MODALS ════════════ -->

<!-- New Student -->
<div class="modal-overlay" id="newStudentModal" style="display:none" onclick="if(event.target===this)closeModal('newStudentModal')">
  <div class="modal">
    <div class="modal-title">Add New Student</div>
    <div class="form-row form-row-2">
      <div class="form-group"><label class="form-label">Full name</label><input class="form-control" id="ns_name" placeholder="Name"></div>
      <div class="form-group"><label class="form-label">Careseeker ID</label><input class="form-control" id="ns_csid" placeholder="YSPS####"></div>
    </div>
    <div class="form-row form-row-2">
      <div class="form-group"><label class="form-label">Phone</label><input class="form-control" id="ns_phone" placeholder="+91 ..."></div>
      <div class="form-group"><label class="form-label">Email</label><input class="form-control" id="ns_email" type="email" placeholder="email@…"></div>
    </div>
    <div class="form-group"><label class="form-label">Class enrolled</label>
      <select class="form-control" id="ns_class"></select>
    </div>
    <div class="form-group"><label class="form-label">Source</label>
      <select class="form-control" id="ns_source">
        <option>Walk-in</option><option>WhatsApp enquiry</option><option>Instagram</option><option>Website</option><option>Referral</option>
      </select>
    </div>
    <div class="form-group"><label class="form-label">Health notes</label><textarea class="form-control" id="ns_notes" rows="2" placeholder="Conditions, goals, special requirements…"></textarea></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('newStudentModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveNewStudent()">Save student</button>
    </div>
  </div>
</div>

<!-- New Appointment -->
<div class="modal-overlay" id="newApptModal" style="display:none" onclick="if(event.target===this)closeModal('newApptModal')">
  <div class="modal">
    <div class="modal-title">New 1-on-1 Appointment</div>
    <div class="form-group"><label class="form-label">Student</label>
      <select class="form-control" id="appt_student"><option value="">Select student…</option></select>
    </div>
    <div class="form-row form-row-2">
      <div class="form-group"><label class="form-label">Date</label><input class="form-control" type="date" id="appt_date"></div>
      <div class="form-group"><label class="form-label">Time</label><input class="form-control" type="time" id="appt_time" value="16:00"></div>
    </div>
    <div class="form-group"><label class="form-label">Session type</label>
      <select class="form-control" id="appt_type">
        <option>Therapy Session (₹1,000)</option>
        <option>Vedic Chanting (₹500)</option>
      </select>
    </div>
    <div class="form-group"><label class="form-label">Mode</label>
      <select class="form-control" id="appt_mode">
        <option>In-studio</option><option>Online (Google Meet)</option>
      </select>
    </div>
    <div class="form-group"><label class="form-label">Notes</label><textarea class="form-control" id="appt_notes" rows="2" placeholder="Any special focus or context…"></textarea></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('newApptModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveAppt()">Book & add to calendar</button>
    </div>
  </div>
</div>

<!-- WhatsApp Preview Modal -->
<div class="modal-overlay" id="waPreviewModal" style="display:none" onclick="if(event.target===this)closeModal('waPreviewModal')">
  <div class="modal" style="max-width:420px">
    <div class="modal-title">📱 WhatsApp message preview</div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">This is exactly what will be sent to the student. Tap <strong>Open WhatsApp</strong> to send — it opens pre-filled, you just tap Send.</div>
    <!-- Simulated phone UI -->
    <div style="background:#E5DDD5;border-radius:12px;padding:16px;margin-bottom:14px">
      <div style="background:white;border-radius:0 10px 10px 10px;padding:12px 14px;max-width:90%;font-size:13px;line-height:1.7;color:#111;box-shadow:0 1px 2px rgba(0,0,0,.12)" id="waPreviewText"></div>
      <div style="font-size:10px;color:#666;margin-top:5px;text-align:right">from Yoga Samvidaa</div>
    </div>
    <div style="font-size:12px;color:var(--hint);margin-bottom:14px">📲 Sending to: <strong id="waPreviewPhone" style="color:var(--ink)"></strong></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('waPreviewModal')">Cancel</button>
      <button class="btn btn-wa" onclick="doSendWhatsApp()">Open WhatsApp & Send</button>
    </div>
  </div>
</div>

<!-- Print Preview Modal -->
<div class="modal-overlay" id="printPreviewModal" style="display:none" onclick="if(event.target===this)closeModal('printPreviewModal')">
  <div class="modal" style="max-width:540px">
    <div class="modal-title">🖨 Print / Save as PDF</div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:12px">Preview of what will be printed. Click <strong>Print</strong> to open the print dialog — choose "Save as PDF" to get a PDF file you can share.</div>
    <div id="printPreviewContent" style="transform:scale(0.85);transform-origin:top left;width:117%"></div>
    <div class="modal-footer" style="margin-top:0">
      <button class="btn btn-secondary" onclick="closeModal('printPreviewModal')">Close</button>
      <button class="btn btn-primary" onclick="doPrint()">🖨 Print / Save PDF</button>
    </div>
  </div>
</div>

<!-- Renew Preview Modal -->
<div class="modal-overlay" id="renewPreviewModal" style="display:none" onclick="if(event.target===this)closeModal('renewPreviewModal')">
  <div class="modal" style="max-width:400px">
    <div class="modal-title" id="renewModalTitle">Renew membership</div>
    <div style="font-size:13px;color:var(--muted);margin-bottom:16px" id="renewModalDesc"></div>
    <div style="background:var(--cream2);border-radius:10px;padding:14px 16px;margin-bottom:16px">
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:.06em">What happens when you click Confirm:</div>
      <div style="font-size:13px;color:var(--ink);line-height:2">
        1. Goes to <strong>Receipts</strong> with this student pre-filled<br>
        2. Class and fee are <strong>auto-filled</strong> — just verify<br>
        3. Hit <strong>Generate & save</strong> → receipt is ready<br>
        4. Tap <strong>Send on WhatsApp</strong> → one tap sends it
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('renewPreviewModal')">Cancel</button>
      <button class="btn btn-primary" id="renewConfirmBtn">Go to Receipts →</button>
    </div>
  </div>
</div>

<!-- Remind Preview Modal -->
<div class="modal-overlay" id="remindPreviewModal" style="display:none" onclick="if(event.target===this)closeModal('remindPreviewModal')">
  <div class="modal" style="max-width:420px">
    <div class="modal-title">💬 Reminder preview</div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:10px">This message will open pre-filled in WhatsApp. Just tap Send.</div>
    <div style="background:#E5DDD5;border-radius:12px;padding:16px;margin-bottom:14px">
      <div style="background:white;border-radius:0 10px 10px 10px;padding:12px 14px;max-width:90%;font-size:13px;line-height:1.7;color:#111;box-shadow:0 1px 2px rgba(0,0,0,.12)" id="remindPreviewText"></div>
    </div>
    <div style="font-size:12px;color:var(--hint);margin-bottom:14px">📲 To: <strong id="remindPreviewName" style="color:var(--ink)"></strong></div>
    <div style="background:var(--cream2);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--muted);margin-bottom:14px">
      ℹ️ No message is sent automatically. You tap <strong>Open WhatsApp</strong> and press Send yourself. This gives you a chance to review first.
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('remindPreviewModal')">Cancel</button>
      <button class="btn btn-wa" id="remindSendBtn">Open WhatsApp & Send</button>
    </div>
  </div>
</div>

<!-- Toast -->
<div class="toast" id="toastEl" style="display:none"></div>`

export default function Home() {
  const { data: session, status } = useSession()
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (!session || scriptLoaded.current) return
    scriptLoaded.current = true
    const script = document.createElement("script")
    script.src = "/app.js"
    script.onload = () => {
      Promise.all([
        fetch("/api/students").then(r => r.json()),
        fetch("/api/receipts").then(r => r.json()),
      ]).then(([students, receipts]) => {
        if (Array.isArray(students) && students.length > 0) {
          window.STUDENTS = students.map((s,i) => ({
            id: i+1, name: s.name, csid: s.csid||"",
            phone: s.phone||"", classId: s.class_id||"therapy",
            initials: s.initials||s.name.slice(0,2).toUpperCase(),
            color: "#EAD9C4", tcolor: "#7B3A10",
            status: s.status||"active", remaining: s.remaining||8
          }))
        }
        if (Array.isArray(receipts) && receipts.length > 0) {
          window.RECEIPTS = receipts.map(r => ({
            id: r.id, inv: r.inv, date: r.date,
            student: r.student, csid: r.csid||"",
            amount: r.amount||0, mode: r.mode||"—",
            phone: r.phone||"", classId: r.class_id||"therapy",
            classRaw: r.class_raw||""
          }))
        }
        if (window.rebuildApp) window.rebuildApp()
      }).catch(e => console.error("Data load:", e))
    }
    document.body.appendChild(script)
  }, [session])

  if (status === "loading") return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA" }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:40 }}>🪷</div>
        <div style={{ fontFamily:"Georgia,serif", color:"#7B3A10", marginTop:8 }}>Loading...</div>
      </div>
    </div>
  )

  if (!session) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FAF3EA", fontFamily:"sans-serif" }}>
      <div style={{ textAlign:"center", padding:40 }}>
        <div style={{ fontSize:48, marginBottom:12 }}>🪷</div>
        <div style={{ fontFamily:"Georgia,serif", fontSize:28, color:"#7B3A10", marginBottom:4 }}>Yoga Samvidaa</div>
        <div style={{ fontSize:13, color:"#7A5C44", letterSpacing:".12em", textTransform:"uppercase", marginBottom:32 }}>Studio Desk</div>
        <button onClick={() => signIn("google")} style={{ background:"#7B3A10", color:"#fff", border:"none", padding:"12px 28px", borderRadius:24, fontSize:14, fontWeight:500, cursor:"pointer" }}>
          Sign in with Google
        </button>
        <div style={{ fontSize:11, color:"#B09880", marginTop:16 }}>Use Dr. Arathi\'s Google account</div>
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>Yoga Samvidaa – Studio Desk</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: APP_CSS }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: APP_HTML }} />
    </>
  )
}
