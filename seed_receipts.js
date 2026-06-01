const { createClient } = require("@supabase/supabase-js")

const supabase = createClient(
  "https://clgjlikftquxpweasesx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZ2psaWtmdHF1eHB3ZWFzZXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNjE5NzYsImV4cCI6MjA5NTczNzk3Nn0.dkGuwunHih9qh5q_eNs-MUAtBp9-nMqHcIS-FkOHK2I"
)

async function seed() {
  console.log("Seeding receipts...")
  const receipts = [
    {id:"RCP-0001",inv:1,date:"2026-01-05",student:"Ramamurthy",csid:"YSPS1001",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0002",inv:2,date:"2026-01-05",student:"Lakshmikara",csid:"YSPS1002",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0003",inv:3,date:"2026-02-01",student:"Uthiralakshmi Sivaraman",csid:"YSPS1003",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0004",inv:4,date:"2026-01-10",student:"Kalaivanan Nv",csid:"YSPS1004",amount:3000,mode:"Cash",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0005",inv:5,date:"2026-01-12",student:"Moushmi",csid:"YSPS1005",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0006",inv:6,date:"2026-01-12",student:"Moushmi",csid:"YSPS1005",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0007",inv:7,date:"2026-02-09",student:"Pavai Sujatha",csid:"YSPS1007",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0008",inv:8,date:"2026-02-09",student:"Ramamurthy",csid:"YSPS1001",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0009",inv:9,date:"2026-02-10",student:"Lakshmikara",csid:"YSPS1002",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0010",inv:10,date:"2026-02-11",student:"Kalaivanan Nv",csid:"YSPS1004",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0011",inv:11,date:"2026-02-12",student:"Uthiralakshmi Sivaraman",csid:"YSPS1003",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0012",inv:12,date:"2026-02-12",student:"Moushmi",csid:"YSPS1005",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0013",inv:13,date:"2026-02-15",student:"Pavai Sujatha",csid:"YSPS1007",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0014",inv:14,date:"2026-02-18",student:"Jayamathi",csid:"YSPS1010",amount:3000,mode:"Cash",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0015",inv:15,date:"2026-02-20",student:"Sanvitha",csid:"YSPS1016",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0016",inv:16,date:"2026-03-01",student:"Ramamurthy",csid:"YSPS1001",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0017",inv:17,date:"2026-03-01",student:"Lakshmikara",csid:"YSPS1002",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0018",inv:18,date:"2026-03-05",student:"Uthiralakshmi Sivaraman",csid:"YSPS1003",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0019",inv:19,date:"2026-03-05",student:"Kalaivanan Nv",csid:"YSPS1004",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0020",inv:20,date:"2026-03-05",student:"Moushmi",csid:"YSPS1005",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0021",inv:21,date:"2026-03-08",student:"Pavai Sujatha",csid:"YSPS1007",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0022",inv:22,date:"2026-03-10",student:"Jayamathi",csid:"YSPS1010",amount:3000,mode:"Cash",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0023",inv:23,date:"2026-03-12",student:"Sanvitha",csid:"YSPS1016",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0024",inv:24,date:"2026-03-15",student:"Aishwarya",csid:"YSAR1141",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0025",inv:25,date:"2026-03-18",student:"Anindita",csid:"YSPS1048",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0026",inv:26,date:"2026-03-20",student:"Senthamarai",csid:"YSPS1043",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0027",inv:27,date:"2026-03-22",student:"Lithikka",csid:"YSPS1044",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0028",inv:28,date:"2026-03-25",student:"Parineetha",csid:"YSPS1045",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0029",inv:29,date:"2026-04-01",student:"Ramamurthy",csid:"YSPS1001",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0030",inv:30,date:"2026-04-01",student:"Lakshmikara",csid:"YSPS1002",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0031",inv:31,date:"2026-04-04",student:"Uthiralakshmi Sivaraman",csid:"YSPS1003",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0032",inv:32,date:"2026-04-05",student:"Kalaivanan Nv",csid:"YSPS1004",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0033",inv:33,date:"2026-04-05",student:"Pavai Sujatha",csid:"YSPS1007",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0034",inv:34,date:"2026-04-08",student:"Tapasya",csid:"YSPS1051",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0035",inv:35,date:"2026-04-10",student:"Jayamathi",csid:"YSPS1010",amount:3000,mode:"Cash",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0036",inv:36,date:"2026-04-12",student:"Aishwarya",csid:"YSAR1141",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0037",inv:37,date:"2026-04-28",student:"Shakila",csid:"YSPS1037",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0038",inv:38,date:"2026-04-29",student:"Aishwarya",csid:"YSAR1141",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0039",inv:39,date:"2026-05-01",student:"Lalitha",csid:"YSPS1039",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0040",inv:40,date:"2026-05-02",student:"Dharshwin",csid:"YSPS1041",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0041",inv:41,date:"2026-05-01",student:"Umarani",csid:"YSPS1041B",amount:5000,mode:"GPay",phone:"",class_id:"fitness_pm",class_raw:"Pm Fitness"},
    {id:"RCP-0042",inv:42,date:"2026-05-12",student:"Sadhvi",csid:"YSPS1042",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0043",inv:43,date:"2026-05-15",student:"Senthamarai",csid:"YSPS1043",amount:1000,mode:"GPay",phone:"",class_id:"therapy",class_raw:"1 On 1"},
    {id:"RCP-0044",inv:44,date:"2026-05-15",student:"Lithikka",csid:"YSPS1044",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0045",inv:45,date:"2026-05-17",student:"Parineetha",csid:"YSPS1045",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0046",inv:46,date:"2026-05-20",student:"Anindita",csid:"YSPS1048",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0047",inv:47,date:"2026-05-19",student:"Pavai Sujatha",csid:"YSPS1007",amount:5000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0048",inv:48,date:"2026-05-23",student:"Moushmi",csid:"YSPS1005",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0049",inv:49,date:"2026-05-23",student:"Hyma",csid:"YSPS1049",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0050",inv:50,date:"2026-05-23",student:"Sharmila",csid:"YSPS1050",amount:2000,mode:"GPay",phone:"",class_id:"weekend",class_raw:"Weekend"},
    {id:"RCP-0051",inv:51,date:"2026-05-23",student:"Tapasya",csid:"YSPS1051",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0052",inv:52,date:"2026-05-23",student:"Anjana",csid:"YSPS1052",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0053",inv:53,date:"2026-05-27",student:"Prathiksha",csid:"YSPS1145",amount:3000,mode:"GPay",phone:"7338869270",class_id:"fitness",class_raw:"11Am Fitness"},
    {id:"RCP-0054",inv:54,date:"2026-05-25",student:"Advik",csid:"YSPS1054",amount:2000,mode:"GPay",phone:"",class_id:"tinyyogis",class_raw:"Children Group"},
    {id:"RCP-0055",inv:55,date:"2026-05-29",student:"Aishwarya",csid:"YSAR1141",amount:3000,mode:"GPay",phone:"",class_id:"fitness",class_raw:"11Am Fitness"}
  ]

  for (const r of receipts) {
    const { error } = await supabase.from("receipts").upsert({
      id: r.id, inv: r.inv, date: r.date,
      student: r.student, csid: r.csid,
      amount: r.amount, mode: r.mode,
      phone: r.phone, class_id: r.class_id,
      class_raw: r.class_raw
    }, { onConflict: "id" })
    if (error) console.log("Receipt error:", r.id, error.message)
    else console.log("✓ Receipt:", r.id, r.student)
  }

  console.log("\nAll done! All 55 receipts loaded.")
}

seed()