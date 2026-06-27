
// ══════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════
const CLASSES = [
  { id:"therapy",    name:"Therapy Session",           desc:"Personalized one-on-one, holistic healing", days:"Appointment basis", time:"By appointment", price:1000, per:"session", type:"Individual", emoji:"🧘" },
  { id:"fitness",    name:"Fitness Group Session",     desc:"11am group · Mon–Fri · 5 days ₹5,000 / 3 days ₹3,000 per month", days:"Mon – Fri", time:"11:00 AM – 12:00 PM", price:5000, price3:3000, per:"month", type:"Group", emoji:"🏃" },
  { id:"fitness_pm", name:"PM Fitness Group Session",  desc:"Evening group session", days:"Mon – Fri", time:"By schedule", price:5000, per:"month", type:"Group", emoji:"🌆" },
  { id:"weekend",    name:"Weekend Fitness Session",   desc:"Saturday & Sunday", days:"Sat & Sun", time:"11:00 AM – 12:00 PM", price:2000, per:"month", type:"Group", emoji:"🌅" },
  { id:"tinyyogis",  name:"Tiny Yogi's Session",       desc:"Children's yoga (ages 4–12)", days:"Sat & Sun", time:"10:00 AM – 11:00 AM", price:2000, per:"month", type:"Group", emoji:"👶" },
  { id:"vedic",      name:"Vedic Chanting",            desc:"Sacred chanting, mind clarity", days:"Appointment basis", time:"By appointment", price:500, per:"session", type:"Individual", emoji:"🕉️" },
  
];

const _day = new Date().getDay(); // 0=Sun,1=Mon..6=Sat
const TODAY_CLASS_IDS = (_day >= 1 && _day <= 5)
  ? ["fitness","therapy"]          // Weekdays: Fitness 11am + Therapy (appointment)
  : ["tinyyogis","weekend","therapy"]; // Weekends: Tiny Yogis + Weekend Fitness + Therapy

let STUDENTS = [
  {
    "id": 1,
    "name": "Ramamurthy",
    "csid": "YSRG1121",
    "phone": "9840121217",
    "classId": "therapy",
    "initials": "RA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 2,
    "name": "Lakshmikara",
    "csid": "YSRG1122",
    "phone": "9940294444",
    "classId": "therapy",
    "initials": "LA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 3,
    "name": "Dhanalakshmi",
    "csid": "YSDA1123",
    "phone": "7845009962",
    "classId": "therapy",
    "initials": "DH",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 4,
    "name": "Moushmi",
    "csid": "YSMB1124",
    "phone": "9791071087",
    "classId": "weekend",
    "initials": "MO",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 5,
    "name": "Dd",
    "csid": "YSDN1125",
    "phone": "9841112574",
    "classId": "therapy",
    "initials": "DD",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 6,
    "name": "Rajeshwari",
    "csid": "YSRS1126",
    "phone": "8939729864",
    "classId": "therapy",
    "initials": "RA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 7,
    "name": "Sukumari",
    "csid": "YSSD1127",
    "phone": "9500051237",
    "classId": "therapy",
    "initials": "SU",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 8,
    "name": "Vijayalakshmi",
    "csid": "YSVS1128",
    "phone": "7299114466",
    "classId": "therapy",
    "initials": "VI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 9,
    "name": "Pavai Sujatha",
    "csid": "YSPS1129",
    "phone": "9840341028",
    "classId": "fitness",
    "initials": "PS",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 10,
    "name": "Hema",
    "csid": "YSHV1130",
    "phone": "7299114466",
    "classId": "therapy",
    "initials": "HE",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 11,
    "name": "Sushma",
    "csid": "YSSV1131",
    "phone": "9962214528",
    "classId": "therapy",
    "initials": "SU",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 12,
    "name": "Vidya",
    "csid": "YSVB1132",
    "phone": "9789349418",
    "classId": "therapy",
    "initials": "VI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 13,
    "name": "Balaji",
    "csid": "YSBJ1133",
    "phone": "9655444679",
    "classId": "therapy",
    "initials": "BA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 14,
    "name": "Shanthi",
    "csid": "YSSB1134",
    "phone": "9840523436",
    "classId": "therapy",
    "initials": "SH",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 15,
    "name": "Prinitha",
    "csid": "YSPB1135",
    "phone": "9566071329",
    "classId": "therapy",
    "initials": "PR",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 16,
    "name": "Senthamarai",
    "csid": "YSSS1136",
    "phone": "9940085618",
    "classId": "therapy",
    "initials": "SE",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 17,
    "name": "Nishanth",
    "csid": "YSNT1137",
    "phone": "8754717043",
    "classId": "therapy",
    "initials": "NI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 18,
    "name": "Mrdula",
    "csid": "YSMD1138",
    "phone": "9725108280",
    "classId": "therapy",
    "initials": "MR",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 19,
    "name": "Jayamathi",
    "csid": "YSJM1139",
    "phone": "9444268643",
    "classId": "fitness",
    "initials": "JA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 20,
    "name": "Aishwarya",
    "csid": "YSAR1141",
    "phone": "9840937267",
    "classId": "fitness",
    "initials": "AI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 21,
    "name": "Sakthi Devi",
    "csid": "YSSD1142",
    "phone": "7708381166",
    "classId": "fitness",
    "initials": "SD",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 22,
    "name": "Sahiba Agarwal",
    "csid": "YSSA1143",
    "phone": "9677229851",
    "classId": "therapy",
    "initials": "SA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 23,
    "name": "Evan Choudary",
    "csid": "YSEC1140",
    "phone": "8639808879",
    "classId": "fitness",
    "initials": "EC",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 24,
    "name": "Vidya",
    "csid": "YSVK1144",
    "phone": "978977077",
    "classId": "therapy",
    "initials": "VI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 25,
    "name": "Prathiksha",
    "csid": "YSPS1145",
    "phone": "7338869270",
    "classId": "fitness",
    "initials": "PR",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 26,
    "name": "Advik",
    "csid": "YSAV1147",
    "phone": "9840937267",
    "classId": "tinyyogis",
    "initials": "AD",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 27,
    "name": "Tapasya",
    "csid": "YSTP1151",
    "phone": "9840494313",
    "classId": "tinyyogis",
    "initials": "TA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 28,
    "name": "Anjana",
    "csid": "YSAJ1149",
    "phone": "9962902728",
    "classId": "tinyyogis",
    "initials": "AN",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 29,
    "name": "Sanvitha",
    "csid": "YSSV1150",
    "phone": "9963002728",
    "classId": "tinyyogis",
    "initials": "SA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 30,
    "name": "Shakila",
    "csid": "YSSK1152",
    "phone": "9840400808",
    "classId": "therapy",
    "initials": "SH",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 31,
    "name": "Lalitha",
    "csid": "YSLT1153",
    "phone": "7259375719",
    "classId": "refund",
    "initials": "LA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 32,
    "name": "Dharshwin",
    "csid": "YSDA1155",
    "phone": "9710530615",
    "classId": "tinyyogis",
    "initials": "DH",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 33,
    "name": "Umarani",
    "csid": "YSUR1154",
    "phone": "9342396075",
    "classId": "fitness_pm",
    "initials": "UM",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 34,
    "name": "Sadhvi",
    "csid": "YSSS1156",
    "phone": "2132458956",
    "classId": "fitness",
    "initials": "SA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 35,
    "name": "Lithikka",
    "csid": "YSLK1157",
    "phone": "8608350546",
    "classId": "tinyyogis",
    "initials": "LI",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 36,
    "name": "Parineetha",
    "csid": "YSPA1158",
    "phone": "9841665605",
    "classId": "tinyyogis",
    "initials": "PA",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 37,
    "name": "Anindita",
    "csid": "YSAK1159",
    "phone": "7042555917",
    "classId": "fitness",
    "initials": "AN",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 38,
    "name": "Hyma",
    "csid": "YSHM1160",
    "phone": "9840494313",
    "classId": "weekend",
    "initials": "HY",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  },
  {
    "id": 39,
    "name": "Sharmila",
    "csid": "YSSM1161",
    "phone": "9710530615",
    "classId": "weekend",
    "initials": "SH",
    "color": "#EAD9C4",
    "tcolor": "#7B3A10",
    "status": "active",
    "remaining": 8
  }
];

let RECEIPTS = [
  {
    "id": "RCP-0001",
    "inv": 1,
    "date": "2026-01-20",
    "student": "Ramamurthy",
    "csid": "YSRG1121",
    "amount": 0,
    "mode": "—",
    "phone": "9840121217",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0002",
    "inv": 2,
    "date": "",
    "student": "Lakshmikara",
    "csid": "YSRG1122",
    "amount": 0,
    "mode": "—",
    "phone": "9940294444",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0003",
    "inv": 3,
    "date": "2026-02-01",
    "student": "Dhanalakshmi",
    "csid": "YSDA1123",
    "amount": 0,
    "mode": "—",
    "phone": "7845009962",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0004",
    "inv": 4,
    "date": "2026-01-10",
    "student": "Moushmi",
    "csid": "YSMB1124",
    "amount": 1000,
    "mode": "GPay",
    "phone": "9791071087",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0005",
    "inv": 5,
    "date": "2026-01-12",
    "student": "Dhanalakshmi",
    "csid": "YSDA1123",
    "amount": 0,
    "mode": "—",
    "phone": "7845009962",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0006",
    "inv": 6,
    "date": "2026-01-28",
    "student": "Dd",
    "csid": "YSDN1125",
    "amount": 0,
    "mode": "0.0",
    "phone": "9841112574",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0007",
    "inv": 7,
    "date": "2026-02-09",
    "student": "Rajeshwari",
    "csid": "YSRS1126",
    "amount": 1000,
    "mode": "GPay",
    "phone": "8939729864",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0008",
    "inv": 8,
    "date": "2026-02-09",
    "student": "Sukumari",
    "csid": "YSSD1127",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9500051237",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0009",
    "inv": 9,
    "date": "2026-02-10",
    "student": "Vijayalakshmi",
    "csid": "YSVS1128",
    "amount": 0,
    "mode": "—",
    "phone": "7299114466",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0010",
    "inv": 10,
    "date": "2026-02-11",
    "student": "Pavai Sujatha",
    "csid": "YSPS1129",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9840341028",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0011",
    "inv": 11,
    "date": "2026-02-12",
    "student": "Hema",
    "csid": "YSHV1130",
    "amount": 0,
    "mode": "—",
    "phone": "7299114466",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0012",
    "inv": 12,
    "date": "2026-02-12",
    "student": "Sushma",
    "csid": "YSSV1131",
    "amount": 0,
    "mode": "—",
    "phone": "9962214528",
    "classId": "therapy",
    "classRaw": ""
  },
  {
    "id": "RCP-0013",
    "inv": 13,
    "date": "2026-02-14",
    "student": "Vidya",
    "csid": "YSVB1132",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9789349418",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0014",
    "inv": 14,
    "date": "2026-02-14",
    "student": "Balaji",
    "csid": "YSBJ1133",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9655444679",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0015",
    "inv": 15,
    "date": "2026-02-18",
    "student": "Shanthi",
    "csid": "YSSB1134",
    "amount": 1000,
    "mode": "GPay",
    "phone": "9840523436",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0016",
    "inv": 16,
    "date": "2026-02-21",
    "student": "Prinitha",
    "csid": "YSPB1135",
    "amount": 1000,
    "mode": "GPay",
    "phone": "9566071329",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0017",
    "inv": 17,
    "date": "2026-02-21",
    "student": "Moushmi",
    "csid": "YSMB1124",
    "amount": 1000,
    "mode": "GPay",
    "phone": "9791071087",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0018",
    "inv": 18,
    "date": "2026-02-23",
    "student": "Senthamarai",
    "csid": "YSSS1136",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9940085618",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0019",
    "inv": 19,
    "date": "2026-02-25",
    "student": "Nishanth",
    "csid": "YSNT1137",
    "amount": 1000,
    "mode": "GPay",
    "phone": "8754717043",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0020",
    "inv": 20,
    "date": "2026-02-28",
    "student": "Mrdula",
    "csid": "YSMD1138",
    "amount": 1000,
    "mode": "Bank Transfer",
    "phone": "9725108280",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0021",
    "inv": 21,
    "date": "2026-03-16",
    "student": "Sukumari",
    "csid": "YSSD1127",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9500051237",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0022",
    "inv": 22,
    "date": "2026-03-19",
    "student": "Pavai Sujatha",
    "csid": "YSPS1129",
    "amount": 5000,
    "mode": "Cash",
    "phone": "9840341028",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0023",
    "inv": 23,
    "date": "2026-03-19",
    "student": "Vijayalakshmi",
    "csid": "YSVS1128",
    "amount": 0,
    "mode": "—",
    "phone": "7299114466",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0024",
    "inv": 24,
    "date": "2026-03-20",
    "student": "Jayamathi",
    "csid": "YSJM1139",
    "amount": 3000,
    "mode": "GPay",
    "phone": "9444268643",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0025",
    "inv": 25,
    "date": "2026-03-20",
    "student": "Aishwarya",
    "csid": "YSAR1141",
    "amount": 3000,
    "mode": "Cash",
    "phone": "9840937267",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0026",
    "inv": 26,
    "date": "2026-03-20",
    "student": "Sakthi Devi",
    "csid": "YSSD1142",
    "amount": 2500,
    "mode": "GPay",
    "phone": "7708381166",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0027",
    "inv": 27,
    "date": "2026-03-23",
    "student": "Sahiba Agarwal",
    "csid": "YSSA1143",
    "amount": 1000,
    "mode": "GPay",
    "phone": "9677229851",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0028",
    "inv": 28,
    "date": "2026-03-24",
    "student": "Senthamarai",
    "csid": "YSSS1136",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9940085618",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0029",
    "inv": 29,
    "date": "2026-03-26",
    "student": "Evan Choudary",
    "csid": "YSEC1140",
    "amount": 5000,
    "mode": "GPay",
    "phone": "8639808879",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0030",
    "inv": 30,
    "date": "2026-03-26",
    "student": "Vidya",
    "csid": "YSVK1144",
    "amount": 1000,
    "mode": "GPay",
    "phone": "978977077",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0031",
    "inv": 31,
    "date": "2026-03-04",
    "student": "Prathiksha",
    "csid": "YSPS1145",
    "amount": 3000,
    "mode": "GPay",
    "phone": "7338869270",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0032",
    "inv": 32,
    "date": "2026-04-20",
    "student": "Jayamathi",
    "csid": "YSJM1139",
    "amount": 3000,
    "mode": "GPay",
    "phone": "9444268643",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0033",
    "inv": 33,
    "date": "2026-04-25",
    "student": "Advik",
    "csid": "YSAV1147",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9840937267",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0034",
    "inv": 34,
    "date": "2026-04-25",
    "student": "Tapasya",
    "csid": "YSTP1151",
    "amount": 2000,
    "mode": "Cash",
    "phone": "9840937267",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0035",
    "inv": 35,
    "date": "2026-04-25",
    "student": "Anjana",
    "csid": "YSAJ1149",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9962902728",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0036",
    "inv": 36,
    "date": "2026-04-25",
    "student": "Sanvitha",
    "csid": "YSSV1150",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9963002728",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0037",
    "inv": 37,
    "date": "2026-04-28",
    "student": "Shakila",
    "csid": "YSSK1152",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9840400808",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0038",
    "inv": 38,
    "date": "2026-04-29",
    "student": "Aishwarya",
    "csid": "YSAR1141",
    "amount": 3000,
    "mode": "GPay",
    "phone": "9840937267",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0039",
    "inv": 39,
    "date": "2026-05-01",
    "student": "Lalitha",
    "csid": "YSLT1153",
    "amount": 3000,
    "mode": "Cash",
    "phone": "7259375719",
    "classId": "refund",
    "classRaw": "Refund"
  },
  {
    "id": "RCP-0040",
    "inv": 40,
    "date": "2026-05-02",
    "student": "Dharshwin",
    "csid": "YSDA1155",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9710530615",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0041",
    "inv": 41,
    "date": "2026-05-01",
    "student": "Umarani",
    "csid": "YSUR1154",
    "amount": 5000,
    "mode": "GPay",
    "phone": "9342396075",
    "classId": "fitness_pm",
    "classRaw": "Pm Fitness"
  },
  {
    "id": "RCP-0042",
    "inv": 42,
    "date": "2026-05-12",
    "student": "Sadhvi",
    "csid": "YSSS1156",
    "amount": 5000,
    "mode": "GPay",
    "phone": "2132458956",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0043",
    "inv": 43,
    "date": "2026-05-15",
    "student": "Senthamarai",
    "csid": "YSSS1136",
    "amount": 1000,
    "mode": "Cash",
    "phone": "9940085618",
    "classId": "therapy",
    "classRaw": "1 On 1"
  },
  {
    "id": "RCP-0044",
    "inv": 44,
    "date": "2026-05-15",
    "student": "Lithikka",
    "csid": "YSLK1157",
    "amount": 2000,
    "mode": "GPay",
    "phone": "8608350546",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0045",
    "inv": 45,
    "date": "2026-05-17",
    "student": "Parineetha",
    "csid": "YSPA1158",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9841665605",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0046",
    "inv": 46,
    "date": "2026-05-20",
    "student": "Anindita",
    "csid": "YSAK1159",
    "amount": 3000,
    "mode": "GPay",
    "phone": "7042555917",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0047",
    "inv": 47,
    "date": "2026-05-19",
    "student": "Pavai Sujatha",
    "csid": "YSPS1129",
    "amount": 5000,
    "mode": "GPay",
    "phone": "9840341028",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0048",
    "inv": 48,
    "date": "2026-05-23",
    "student": "Moushmi",
    "csid": "YSMB1124",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9791071087",
    "classId": "weekend",
    "classRaw": "Weekend"
  },
  {
    "id": "RCP-0049",
    "inv": 49,
    "date": "2026-05-23",
    "student": "Hyma",
    "csid": "YSHM1160",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9840494313",
    "classId": "weekend",
    "classRaw": "Weekend"
  },
  {
    "id": "RCP-0050",
    "inv": 50,
    "date": "2026-05-23",
    "student": "Sharmila",
    "csid": "YSSM1161",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9710530615",
    "classId": "weekend",
    "classRaw": "Weekend"
  },
  {
    "id": "RCP-0051",
    "inv": 51,
    "date": "2026-05-23",
    "student": "Tapasya",
    "csid": "YSTP1151",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9840494313",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0052",
    "inv": 52,
    "date": "2026-05-23",
    "student": "Anjana",
    "csid": "YSAJ1149",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9962902728",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0053",
    "inv": 53,
    "date": "2026-05-27",
    "student": "Prathiksha",
    "csid": "YSPS1145",
    "amount": 3000,
    "mode": "GPay",
    "phone": "7338869270",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  },
  {
    "id": "RCP-0054",
    "inv": 54,
    "date": "2026-05-25",
    "student": "Advik",
    "csid": "YSAV1147",
    "amount": 2000,
    "mode": "GPay",
    "phone": "9840937267",
    "classId": "tinyyogis",
    "classRaw": "Children Group"
  },
  {
    "id": "RCP-0055",
    "inv": 55,
    "date": "2026-05-29",
    "student": "Aishwarya",
    "csid": "YSAR1141",
    "amount": 3000,
    "mode": "GPay",
    "phone": "9840937267",
    "classId": "fitness",
    "classRaw": "11Am Fitness"
  }
];

let APPOINTMENTS = [];
let meetLinks = {};
let attendanceState = {};
let calSynced = false;
let nextInvoice = 56;
let currentReceipt = null;

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
const now = new Date();
document.getElementById("todayDate").textContent = days[now.getDay()]+", "+now.getDate()+" "+months[now.getMonth()]+" "+now.getFullYear();
document.getElementById("todayDayLabel").textContent = days[now.getDay()]+" · "+now.getDate()+" "+months[now.getMonth()];
document.getElementById("attendDateLabel").textContent = now.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short"});
document.getElementById("rcptDate").value = now.toISOString().slice(0,10);
document.getElementById("rcptInvNum").value = nextInvoice;

populateClassDropdowns();
buildDashboard();
buildScheduleTable();
buildStudentList();
buildRecentReceipts();
populateStudentFilter();
populateStudentDropdown();
buildAttendGrid();
buildReminders();
buildCollections();

// ══════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════
function nav(pageId, btn) {
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  document.querySelectorAll(".sb-item").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  const titles={dashboard:"Good morning, Dr. Arathi 🙏",schedule:"Schedule & Google Meet",attendance:"Mark Attendance",receipts:"Fee Receipts",collections:"Fee Collections",students:"All Students",reminders:"Class Reminders"};
  document.getElementById("pageTitle").textContent = titles[pageId]||pageId;
}

// ══════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════
function buildDashboard() {
  // Today classes
  const tcl = document.getElementById("todayClassList");
  tcl.innerHTML = "";
  TODAY_CLASS_IDS.forEach(cid=>{
    const c = CLASSES.find(x=>x.id===cid);
    const studs = STUDENTS.filter(s=>s.classId===cid);
    const ml = meetLinks[cid];
    tcl.innerHTML += `
      <div class="class-strip">
        <div class="class-strip-head">
          <div class="class-strip-time">${c.time.split("–")[0].trim()}</div>
          <div class="class-strip-info">
            <div class="class-strip-name">${c.emoji} ${c.name}</div>
            <div class="class-strip-sub">${studs.length} student${studs.length!==1?"s":""} · ${c.days}</div>
          </div>
          <div class="class-strip-actions">
            <button class="btn btn-secondary btn-sm" onclick="jumpAttend('${cid}')">Attendance</button>
          </div>
        </div>
        <div class="class-strip-foot">
          ${ml ? `<a class="meet-link" href="${ml}" target="_blank">📹 ${ml}</a><button class="btn btn-secondary btn-sm" onclick="copyMeet('${cid}')">Copy</button>` : `<span style="font-size:12px;color:var(--hint)">No Meet link yet</span><button class="btn btn-secondary btn-sm" onclick="genMeet('${cid}');buildDashboard()">+ Generate</button>`}
        </div>
      </div>`;
  });

  // Expiring
  const el = document.getElementById("expiringList");
  el.innerHTML="";
  const exp = STUDENTS.filter(s=>s.status==="expiring");
  exp.forEach(s=>{
    const c=CLASSES.find(x=>x.id===s.classId);
    el.innerHTML+=`
      <div class="list-item">
        <div class="avatar" style="width:36px;height:36px;background:var(--cream2);color:var(--brown);font-size:13px">${s.initials}</div>
        <div class="list-item-body">
          <div class="list-item-title">${s.name}</div>
          <div class="list-item-sub">${c?.name} · ${s.remaining} class${s.remaining!==1?"es":""} left</div>
        </div>
        <button class="btn btn-gold btn-sm" onclick="quickRenew('${s.id}')">Renew</button>
      </div>`;
  });
  if(!exp.length) el.innerHTML=`<div style="font-size:13px;color:var(--hint);padding:10px 0">No expiring memberships 🎉</div>`;
}

// ══════════════════════════════════════════════
// SCHEDULE
// ══════════════════════════════════════════════
function buildScheduleTable() {
  const tb = document.getElementById("scheduleTableBody");
  tb.innerHTML="";
  CLASSES.forEach(c=>{
    const studs=STUDENTS.filter(s=>s.classId===c.id).length;
    const ml=meetLinks[c.id];
    const isIndividual = c.type==="Individual";
    const calCell = calSynced && !isIndividual ? `<span class="pill pill-green">✓ In calendar</span>` : isIndividual ? `<span style="font-size:11px;color:var(--hint)">Appointment-based</span>` : `<span style="font-size:11px;color:var(--hint)">Not yet synced</span>`;
    let meetCell;
    if(ml) {
      meetCell = `<div style="display:flex;align-items:center;gap:6px"><a href="${ml}" target="_blank" style="font-size:11px;color:var(--blue);max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${ml}</a><button class="btn btn-secondary btn-sm" onclick="copyMeet('${c.id}')">Copy</button><button class="btn btn-secondary btn-sm" onclick="clearMeet('${c.id}')">✕</button></div>`;
    } else if(isIndividual) {
      meetCell = `<div style="display:flex;gap:5px;align-items:center"><input id="ml_${c.id}" class="form-control" style="font-size:11px;padding:4px 8px;width:160px" placeholder="Paste your Meet link…"><button class="btn btn-secondary btn-sm" onclick="saveMeetLink('${c.id}')">Save</button></div>`;
    } else {
      meetCell = `<button class="btn btn-secondary btn-sm" onclick="genMeet('${c.id}');buildScheduleTable()">+ Generate</button>`;
    }
    tb.innerHTML+=`<tr>
      <td><strong>${c.emoji} ${c.name}</strong><div style="font-size:11px;color:var(--muted);margin-top:2px">${c.desc}</div></td>
      <td style="font-size:12px">${c.days}</td>
      <td style="font-size:12px">${c.time}</td>
      <td><strong>₹${c.price.toLocaleString("en-IN")}</strong><div style="font-size:11px;color:var(--muted)">/${c.per}</div></td>
      <td style="text-align:center">${studs}</td>
      <td>${meetCell}</td>
      <td>${calCell}</td>
    </tr>`;
  });
}

function connectCalendar() {
  calSynced=true;
  document.getElementById("calSyncBanner").style.display="block";
  buildScheduleTable();
  toast("✓ Google Calendar synced! All recurring classes added.");
}

function genMeet(cid) {
  const code = Math.random().toString(36).slice(2,5)+"-"+Math.random().toString(36).slice(2,7)+"-"+Math.random().toString(36).slice(2,5);
  meetLinks[cid]=`https://meet.google.com/${code}`;
  toast("Google Meet link generated!");
  buildDashboard();
}

function copyMeet(cid) {
  navigator.clipboard?.writeText(meetLinks[cid]);
  toast("Meet link copied!");
}

function saveMeetLink(cid) {
  const val = document.getElementById(`ml_${cid}`)?.value?.trim();
  if(!val || !val.startsWith("http")) { toast("Please paste a valid Meet link","error"); return; }
  meetLinks[cid] = val;
  buildScheduleTable();
  buildDashboard();
  toast("Meet link saved ✓");
}

function clearMeet(cid) {
  delete meetLinks[cid];
  buildScheduleTable();
  buildDashboard();
  toast("Meet link removed");
}

// Appointments
function saveAppt() {
  const s = document.getElementById("appt_student").value;
  const d = document.getElementById("appt_date").value;
  const t = document.getElementById("appt_time").value;
  const ty = document.getElementById("appt_type").value;
  const m = document.getElementById("appt_mode").value;
  if(!s||!d||!t){toast("Please fill all fields","error");return;}
  APPOINTMENTS.push({student:s,date:d,time:t,type:ty,mode:m});
  closeModal("newApptModal");
  buildApptList();
  buildReminders();
  toast("Appointment booked & added to calendar ✓");
}

function buildApptList() {
  const el=document.getElementById("apptList");
  const em=document.getElementById("apptEmpty");
  if(!APPOINTMENTS.length){el.innerHTML="";em.style.display="block";return;}
  em.style.display="none";
  el.innerHTML="";
  APPOINTMENTS.forEach((a,i)=>{
    const dt=new Date(a.date);
    el.innerHTML+=`<div class="list-item">
      <div style="font-size:22px">📌</div>
      <div class="list-item-body">
        <div class="list-item-title">${a.student}</div>
        <div class="list-item-sub">${dt.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long"})} · ${a.time} · ${a.type} · ${a.mode}</div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="deleteAppt(${i})">Remove</button>
    </div>`;
  });
}

function deleteAppt(i){APPOINTMENTS.splice(i,1);buildApptList();buildReminders();}

// ══════════════════════════════════════════════
// ATTENDANCE
// ══════════════════════════════════════════════
function buildAttendGrid() {
  const sel=document.getElementById("attendClassSelect");
  const cid=sel.value||"fitness";
  const studs=STUDENTS.filter(s=>s.classId===cid);
  const grid=document.getElementById("attendGrid");
  grid.innerHTML="";
  studs.forEach(s=>{
    const state=attendanceState[s.id];
    const card=document.createElement("div");
    card.className="attend-card"+(state===true?" present":state===false?" absent":"");
    card.innerHTML=`<div class="avatar" style="width:32px;height:32px;background:var(--cream2);color:var(--brown);font-size:12px">${s.initials}</div><div class="attend-card-name">${s.name.split(" ")[0]}</div><div class="attend-card-status" style="color:${state===true?"var(--green)":state===false?"var(--red)":"var(--hint)"}">${state===true?"✓ Present":state===false?"✗ Absent":"Tap to mark"}</div>`;
    card.onclick=()=>{
      if(attendanceState[s.id]===true) attendanceState[s.id]=false;
      else if(attendanceState[s.id]===false) delete attendanceState[s.id];
      else attendanceState[s.id]=true;
      buildAttendGrid();updateAttendSummary();
    };
    grid.appendChild(card);
  });
  if(!studs.length) grid.innerHTML=`<div style="font-size:13px;color:var(--hint);padding:10px">No students enrolled in this class yet.</div>`;
  updateAttendSummary();
}

function updateAttendSummary() {
  const cid=document.getElementById("attendClassSelect").value||"fitness";
  const studs=STUDENTS.filter(s=>s.classId===cid);
  const p=studs.filter(s=>attendanceState[s.id]===true).length;
  const a=studs.filter(s=>attendanceState[s.id]===false).length;
  document.getElementById("attendSummary").textContent=`${p} present · ${a} absent · ${studs.length-p-a} not marked`;
}

function markAll(val) {
  const cid=document.getElementById("attendClassSelect").value||"fitness";
  STUDENTS.filter(s=>s.classId===cid).forEach(s=>{if(val)attendanceState[s.id]=true;else delete attendanceState[s.id];});
  buildAttendGrid();
}

function saveAttendance() {
  const cid=document.getElementById("attendClassSelect").value||"fitness";
  const c=CLASSES.find(x=>x.id===cid);
  const p=STUDENTS.filter(s=>s.classId===cid&&attendanceState[s.id]===true).length;
  toast(`Attendance saved for ${c.name} · ${p} present ✓`);
}

function jumpAttend(cid) {
  document.getElementById("attendClassSelect").value=cid;
  buildAttendGrid();
  nav("attendance",null);
  document.querySelectorAll(".sb-item")[2].classList.add("active");
  document.querySelectorAll(".sb-item").forEach((b,i)=>{if(i!==2)b.classList.remove("active");});
}

// ══════════════════════════════════════════════
// RECEIPTS
// ══════════════════════════════════════════════
function populateClassDropdowns() {
  ["rcptClass","ns_class"].forEach(id=>{
    const sel=document.getElementById(id);
    if(!sel)return;
    CLASSES.forEach(c=>{
      const o=document.createElement("option");
      o.value=c.id; o.textContent=`${c.name} — ₹${c.price.toLocaleString("en-IN")}/${c.per}`;
      sel.appendChild(o);
    });
  });
  ["rcptStudent","appt_student","ns_class"].forEach(id=>{});
  // Students in selects
  const rs=document.getElementById("rcptStudent");
  const as=document.getElementById("appt_student");
  STUDENTS.forEach(s=>{
    [rs,as].forEach(sel=>{
      const o=document.createElement("option");
      o.value=s.id; o.textContent=s.name;
      sel.appendChild(o);
    });
  });
  // ns_class populated above
  const nc=document.getElementById("ns_class");
  CLASSES.forEach(c=>{const o=document.createElement("option");o.value=c.id;o.textContent=c.name;nc.appendChild(o);});
}

function onRcptStudentChange() {
  const sid = document.getElementById("rcptStudent").value;
  // Match by id OR by name (value might be id or name depending on how dropdown was built)
  let s = STUDENTS.find(x => String(x.id) === String(sid));
  if (!s) s = STUDENTS.find(x => x.name === sid);
  if (!s && sid) s = STUDENTS.find(x => x.csid === sid);
  if (s) {
    document.getElementById("rcptCSID").value = s.csid || "";
    document.getElementById("rcptPhone").value = s.phone || "";
    document.getElementById("rcptClass").value = s.classId || "";
    onRcptClassChange();
    refreshReceipt();
  }
}

function onRcptClassChange() {
  const cid=document.getElementById("rcptClass").value;
  const c=CLASSES.find(x=>x.id===cid);
  if(c){
    document.getElementById("rcptAmt").value=c.price;
    // For fitness show a helper note
    const note=document.getElementById("rcptFeeNote");
    if(note) note.textContent = (cid==="fitness")
      ? "⚡ 5-day=₹5,000 · 3-day=₹3,000 — edit amount as needed"
      : "";
  }
  refreshReceipt();
}

function refreshReceipt() {
  const sid=document.getElementById("rcptStudent").value;
  const s=STUDENTS.find(x=>x.id==sid);
  if(!s) return;
  const cid=document.getElementById("rcptClass").value;
  const c=CLASSES.find(x=>x.id===cid)||{name:"—"};
  const amt=document.getElementById("rcptAmt").value||0;
  const invNum=document.getElementById("rcptInvNum").value||nextInvoice;
  const date=document.getElementById("rcptDate").value||now.toISOString().slice(0,10);
  const dt=new Date(date);
  const dateStr=dt.toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"});
  const mode=document.getElementById("rcptMode").value;
  document.getElementById("receiptPreviewWrap").innerHTML=buildReceiptHTML({id:`RCP-${String(invNum).padStart(4,"0")}`,student:s.name,csid:s.csid||document.getElementById("rcptCSID").value,classId:cid,className:c.name,amount:parseInt(amt),mode,date,dateStr,phone:document.getElementById("rcptPhone").value});
}

function buildReceiptHTML(r) {
  return `<div class="receipt-doc">
    <div class="rcpt-header"><div class="rcpt-header-left">YOGA SAMVIDAA</div><div class="rcpt-header-right">RECEIPT</div></div>
    <div class="rcpt-subheader"><span>INVOICE #${r.id.split("-")[1]||"52"}</span><span>DATE ${r.dateStr||r.date}</span></div>
    <div class="rcpt-body">
      <div class="rcpt-address-row">
        <div class="rcpt-addr-box">
          <div class="rcpt-addr-label">📬 MAILING INFO</div>
          <div class="rcpt-addr-text">No 46, Villa No: 2, Ground Floor<br>Singaravelar 3rd Cross Street,<br>Ranjit Nagar, Neelangarai, ECR,<br>Chennai – 600115<br>Phone: 9840082055</div>
        </div>
        <div class="rcpt-addr-box">
          <div class="rcpt-addr-label">📋 BILL TO</div>
          <div class="rcpt-addr-text"><strong>Name: ${r.student}</strong><br>Careseeker ID: ${r.csid||"—"}<br>Phone: ${r.phone||"—"}</div>
        </div>
      </div>
      <div class="rcpt-desc-head"><span>DESCRIPTION</span><span>AMOUNT</span></div>
      <div class="rcpt-desc-row"><span>${r.className||r.classRaw||r.classId}</span><span>₹${parseInt(r.amount).toLocaleString("en-IN")}.00</span></div>
      <div class="rcpt-paid-stamp"><div class="rcpt-paid-text">PAID</div></div>
      <div style="display:flex;justify-content:flex-end">
        <div class="rcpt-totals">
          <div class="rcpt-total-row"><span>SUBTOTAL</span><span>₹${parseInt(r.amount).toLocaleString("en-IN")}.00</span></div>
          <div class="rcpt-total-row"><span>TAX</span><span>—</span></div>
          <div class="rcpt-total-row"><span>DISCOUNT</span><span>—</span></div>
          <div class="rcpt-total-row final"><span>TOTAL</span><span>₹${parseInt(r.amount).toLocaleString("en-IN")}.00</span></div>
        </div>
      </div>
      <div style="margin-top:12px;font-size:10px;color:#999;text-align:center">Payment mode: ${r.mode} · yogasamvidaa.com · Heal from within 🪷</div>
    </div>
  </div>`;
}

function generateReceipt() {
  const sid=document.getElementById("rcptStudent").value;
  const s=STUDENTS.find(x=>x.id==sid);
  if(!s||!document.getElementById("rcptAmt").value){toast("Please fill student and amount","error");return;}
  const cid=document.getElementById("rcptClass").value;
  const c=CLASSES.find(x=>x.id===cid)||{name:"—"};
  const amt=parseInt(document.getElementById("rcptAmt").value);
  const invNum=document.getElementById("rcptInvNum").value||nextInvoice;
  const date=document.getElementById("rcptDate").value;
  const dt=new Date(date);
  const dateStr=dt.toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"});
  const mode=document.getElementById("rcptMode").value;
  const phone=document.getElementById("rcptPhone").value||s.phone;
  currentReceipt={id:`RCP-${String(invNum).padStart(4,"0")}`,student:s.name,csid:s.csid,classId:cid,className:c.name,amount:amt,mode,date,dateStr,phone};
  RECEIPTS.unshift(currentReceipt);
  nextInvoice=parseInt(invNum)+1;
  document.getElementById("rcptInvNum").value=nextInvoice;
  document.getElementById("rcptActions").style.display="block";
  document.getElementById("receiptPreviewWrap").innerHTML=buildReceiptHTML(currentReceipt);
  buildRecentReceipts();
  buildCollections();
  toast(`Receipt ${currentReceipt.id} generated ✓`);
}

function previewWhatsApp() {
  if(!currentReceipt){toast("Generate a receipt first","error");return;}
  const msg=`Namaste ${currentReceipt.student} 🙏\n\nPlease find your payment receipt:\n\nInvoice: ${currentReceipt.id}\nDate: ${currentReceipt.dateStr}\nClass: ${currentReceipt.className}\nAmount paid: ₹${currentReceipt.amount.toLocaleString("en-IN")}\nMode: ${currentReceipt.mode}\n\nThank you! See you on the mat 🪷\n\n🪷Yoga Samvidaa`;
  document.getElementById("waPreviewText").innerHTML = msg.replace(/\n/g,"<br>");
  const phone = (currentReceipt.phone||"").replace(/\D/g,"");
  document.getElementById("waPreviewPhone").textContent = phone ? `+91 ${phone}` : "(no phone on file)";
  openModal("waPreviewModal");
}

function doSendWhatsApp() {
  if(!currentReceipt) return;
  const msg=`Namaste ${currentReceipt.student} 🙏\n\nPlease find your payment receipt:\n\nInvoice: ${currentReceipt.id}\nDate: ${currentReceipt.dateStr}\nClass: ${currentReceipt.className}\nAmount paid: ₹${currentReceipt.amount.toLocaleString("en-IN")}\nMode: ${currentReceipt.mode}\n\nThank you! See you on the mat 🪷\n\n🪷Yoga Samvidaa`;
  const phone=(currentReceipt.phone||"").replace(/\D/g,"");
  closeModal("waPreviewModal");
  if(phone) window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`,"_blank");
  else toast("No phone number on file for this student","error");
}

function previewPrint() {
  if(!currentReceipt){toast("Generate a receipt first","error");return;}
  document.getElementById("printPreviewContent").innerHTML = buildReceiptHTML(currentReceipt);
  openModal("printPreviewModal");
}

function doPrint() {
  const w=window.open("","_blank");
  w.document.write(`<!DOCTYPE html><html><head><title>Receipt ${currentReceipt?.id||""}</title><style>body{margin:20px;font-family:sans-serif}.rcpt-header{background:#2E7BB4;padding:14px 20px;display:flex;justify-content:space-between}.rcpt-header-left,.rcpt-header-right{color:white;font-weight:700;font-size:18px}.rcpt-subheader{background:#3A5A7A;padding:7px 20px;display:flex;justify-content:space-between;color:rgba(255,255,255,.8);font-size:12px}.rcpt-body{padding:16px 20px}.rcpt-address-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}.rcpt-addr-box{background:#D9E5F0;padding:10px 12px}.rcpt-addr-label{font-size:10px;font-weight:700;color:#2E7BB4;text-transform:uppercase;margin-bottom:4px}.rcpt-addr-text{font-size:11px;line-height:1.6}.rcpt-desc-head{display:flex;justify-content:space-between;padding:5px 8px;background:#E8EEF5;font-size:11px;font-weight:700;color:#2E7BB4}.rcpt-desc-row{display:flex;justify-content:space-between;padding:8px;border-bottom:1px dashed #eee;font-size:13px}.rcpt-paid-text{font-size:60px;font-weight:900;color:rgba(150,150,150,.15);text-align:center;padding:20px 0;letter-spacing:.1em}.rcpt-totals{margin-left:auto;width:200px}.rcpt-total-row{display:flex;justify-content:space-between;padding:4px 8px;font-size:12px;color:#555}.rcpt-total-row.final{background:#2E7BB4;color:white;font-weight:700;font-size:13px;padding:6px 8px}</style></head><body>${buildReceiptHTML(currentReceipt)}</body></html>`);
  w.document.close();
  setTimeout(()=>w.print(),400);
  closeModal("printPreviewModal");
}

function shareWhatsApp() { previewWhatsApp(); }
function printReceipt() { previewPrint(); }

function buildRecentReceipts() {
  const el=document.getElementById("recentReceiptsList");
  el.innerHTML="";
  // Sort DESCENDING — newest first
  const sorted = [...RECEIPTS]
    .filter(r=>r.amount && r.amount > 0)
    .sort((a,b)=>b.date.localeCompare(a.date));
  sorted.slice(0,6).forEach(r=>{
    const dt = r.date ? new Date(r.date) : null;
    const dateStr = dt ? dt.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}) : "—";
    el.innerHTML+=`<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:0.5px solid var(--border);cursor:pointer" onclick="viewReceipt('${r.id}')">
      <div>
        <div style="font-size:13px;font-weight:500;color:var(--ink)">${r.id} · ${r.student}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:1px">${dateStr} · ${r.mode} · ${friendlyClass(r)}</div>
      </div>
      <div style="font-size:15px;font-weight:600;color:var(--brown)">₹${r.amount.toLocaleString("en-IN")}</div>
    </div>`;
  });
}

// ══════════════════════════════════════════════
// COLLECTIONS
// ══════════════════════════════════════════════
function friendlyClass(r) {
  const map = {
    "therapy":"Therapy Session (1-on-1)",
    "fitness":"Fitness Group (11am)",
    "fitness_pm":"PM Fitness Group",
    "weekend":"Weekend Fitness Session",
    "tinyyogis":"Tiny Yogi's Session",
    "vedic":"Vedic Chanting",
    "refund":"Refund"
  };
  return map[r.classId] || r.classRaw || r.classId;
}

function buildCollections(filterCsid="") {
  const tb=document.getElementById("collectionsBody");
  tb.innerHTML="";
  const sorted = [...RECEIPTS].sort((a,b)=>a.date.localeCompare(b.date));
  const filtered = filterCsid ? sorted.filter(r=>r.csid===filterCsid) : sorted;

  // ── Compute stats from filtered set ──
  const filtTotal  = filtered.reduce((s,r)=>s+(r.amount||0),0);
  const filtCount  = filtered.length;
  const filtMay    = filtered.filter(r=>r.date.startsWith("2026-05")).reduce((s,r)=>s+(r.amount||0),0);
  const stuName    = filterCsid ? (filtered[0]?.student||"Student") : null;

  // ── Update stat cards ──
  if(filterCsid && stuName) {
    document.getElementById("coll_stat1").textContent = `₹${filtMay.toLocaleString("en-IN")}`;
    document.getElementById("coll_lbl1").textContent  = `May 2026 · ${stuName}`;
    document.getElementById("coll_stat2").textContent = filtCount;
    document.getElementById("coll_lbl2").textContent  = `Receipts · ${stuName}`;
    document.getElementById("coll_stat3").textContent = `₹${filtTotal.toLocaleString("en-IN")}`;
    document.getElementById("coll_lbl3").textContent  = `Total paid · ${stuName}`;
  } else {
    const allMay   = RECEIPTS.filter(r=>r.date.startsWith("2026-05")).reduce((s,r)=>s+(r.amount||0),0);
    const allTotal = RECEIPTS.reduce((s,r)=>s+(r.amount||0),0);
    document.getElementById("coll_stat1").textContent = `₹${allMay.toLocaleString("en-IN")}`;
    document.getElementById("coll_lbl1").textContent  = "Collected – May 2026";
    document.getElementById("coll_stat2").textContent = RECEIPTS.length;
    document.getElementById("coll_lbl2").textContent  = "Total receipts";
    document.getElementById("coll_stat3").textContent = `₹${allTotal.toLocaleString("en-IN")}`;
    document.getElementById("coll_lbl3").textContent  = "Total · Jan – May 2026";
  }

  // ── Render rows ──
  filtered.forEach(r=>{
    const dt = r.date ? new Date(r.date) : null;
    const dateStr = dt ? dt.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}) : "—";
    const hasPaid = r.amount && r.amount > 0;
    const statusCell = hasPaid ? `<span class="pill pill-green">✓ Paid</span>` : `<span style="color:var(--hint)">—</span>`;
    const amtCell    = hasPaid ? `<strong>₹${r.amount.toLocaleString("en-IN")}</strong>` : `<span style="color:var(--hint)">—</span>`;
    const modeCell   = hasPaid && r.mode !== "—" ? r.mode : `<span style="color:var(--hint)">—</span>`;
    tb.innerHTML+=`<tr>
      <td><strong>${r.student}</strong><div style="font-size:11px;color:var(--muted)">${r.csid||"—"}</div></td>
      <td>${friendlyClass(r)}</td>
      <td>${amtCell}</td>
      <td>${modeCell}</td>
      <td>${dateStr}</td>
      <td>${statusCell}</td>
      <td><button class="btn btn-secondary btn-sm" onclick="viewReceipt('${r.id}')">View</button></td>
    </tr>`;
  });
}
function viewReceipt(rid) {
  const r=RECEIPTS.find(x=>x.id===rid);
  if(!r)return;
  const c=CLASSES.find(x=>x.id===r.classId)||{name:r.classId};
  const dt=new Date(r.date);
  r.dateStr=dt.toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"});
  r.className=c.name;
  currentReceipt=r;
  document.getElementById("receiptPreviewWrap").innerHTML=buildReceiptHTML(r);
  document.getElementById("rcptActions").style.display="block";
  nav("receipts",null);
  document.querySelectorAll(".sb-item")[3].classList.add("active");
}

// ══════════════════════════════════════════════
// STUDENTS
// ══════════════════════════════════════════════
function buildStudentList(filter="") {
  const wrap=document.getElementById("studentListWrap");
  wrap.innerHTML="";
  const list=filter?STUDENTS.filter(s=>s.name.toLowerCase().includes(filter.toLowerCase())||s.csid.toLowerCase().includes(filter.toLowerCase())):STUDENTS;
  // Update count badge
  const cb=document.getElementById("studentCountBadge");
  if(cb) cb.textContent=STUDENTS.length;
  // Summary row
  wrap.innerHTML+=`<div style="font-size:12px;color:var(--muted);padding:4px 2px 10px;display:flex;justify-content:space-between"><span>${list.length} student${list.length!==1?"s":""} ${filter?"found":"total"}</span><span style="color:var(--brown);font-weight:500">Jan–May 2026</span></div>`;
  list.forEach((s,idx)=>{
    const c=CLASSES.find(x=>x.id===s.classId);
    const statusPill=s.status==="expiring"?`<span class="pill pill-gold">⚠ Expiring</span>`:`<span class="pill pill-green">Active</span>`;
    const cname = s.classId==="fitness"?"Fitness Group (11am)":c?.name||"—";
    wrap.innerHTML+=`<div class="list-item">
      <div style="font-size:12px;font-weight:600;color:var(--hint);min-width:26px;text-align:center;flex-shrink:0">${idx+1}</div>
      <div class="avatar" style="width:36px;height:36px;background:var(--cream2);color:var(--brown);font-size:13px;flex-shrink:0">${s.initials}</div>
      <div class="list-item-body">
        <div class="list-item-title">${s.name} <span style="font-size:11px;color:var(--hint);font-weight:400">${s.csid}</span></div>
        <div class="list-item-sub">${c?.emoji||""} ${cname} · ${s.phone?s.phone.slice(0,4)+"XXXXXX":""}</div>
        <div style="margin-top:5px;display:flex;gap:6px;align-items:center">${statusPill}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
        <button class="btn btn-secondary btn-sm" onclick="quickRenew('${s.id}')">Renew</button>
        <button class="btn btn-secondary btn-sm" onclick="sendReminder('${s.id}')">Remind</button>
      </div>
    </div>`;
  });
}

function populateStudentDropdown() {
  const sel = document.getElementById("studentDropdown");
  if(!sel) return;
  while(sel.options.length > 1) sel.remove(1);
  [...STUDENTS]
    .sort((a,b)=>a.name.localeCompare(b.name))
    .forEach(s=>{
      const o = document.createElement("option");
      o.value = s.csid || s.name.toLowerCase();
      o.textContent = `${s.name} — ${s.csid}`;
      sel.appendChild(o);
    });
  // Update count in first option
  sel.options[0].textContent = `All students (${STUDENTS.length})`;
}

function filterStudents(val) {
  if(!val) { buildStudentList(""); return; }
  // Match by csid or name
  const list = STUDENTS.filter(s =>
    s.csid === val ||
    s.name.toLowerCase() === val.toLowerCase()
  );
  const wrap = document.getElementById("studentListWrap");
  wrap.innerHTML = "";
  if(!list.length) { wrap.innerHTML=`<div style="padding:20px;color:var(--hint);font-size:13px">No student found.</div>`; return; }
  list.forEach((s,idx)=>{
    const c = CLASSES.find(x=>x.id===s.classId);
    const cname = s.classId==="fitness"?"Fitness Group (11am)":c?.name||"—";
    // Get all receipts for this student
    const recs = RECEIPTS.filter(r=>r.csid===s.csid||r.student.toLowerCase()===s.name.toLowerCase());
    const totalPaid = recs.reduce((sum,r)=>sum+(r.amount||0),0);
    const statusPill = s.status==="expiring"
      ? `<span class="pill pill-gold">⚠ Expiring</span>`
      : `<span class="pill pill-green">Active</span>`;
    wrap.innerHTML += `<div class="list-item" style="border-color:var(--brown-light)">
      <div style="font-size:12px;font-weight:600;color:var(--hint);min-width:26px;text-align:center;flex-shrink:0">1</div>
      <div class="avatar" style="width:36px;height:36px;background:var(--cream2);color:var(--brown);font-size:13px;flex-shrink:0">${s.initials}</div>
      <div class="list-item-body">
        <div class="list-item-title">${s.name} <span style="font-size:11px;color:var(--hint);font-weight:400">${s.csid}</span></div>
        <div class="list-item-sub">${c?.emoji||""} ${cname} · ${s.phone?s.phone.slice(0,4)+"XXXXXX":""}</div>
        <div style="margin-top:5px;display:flex;gap:6px;align-items:center;flex-wrap:wrap">${statusPill} <span style="font-size:11px;color:var(--brown);font-weight:600">₹${totalPaid.toLocaleString("en-IN")} paid (${recs.length} receipt${recs.length!==1?"s":""})</span></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
        <button class="btn btn-secondary btn-sm" onclick="quickRenew('${s.id}')">Renew</button>
        <button class="btn btn-secondary btn-sm" onclick="sendReminder('${s.id}')">Remind</button>
      </div>
    </div>`;
  });
}

function saveNewStudent() {
  const name=document.getElementById("ns_name").value.trim();
  if(!name){toast("Please enter a name","error");return;}
  const initials=name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  const classId=document.getElementById("ns_class").value||"fitness";
  const c=CLASSES.find(x=>x.id===classId);
  const newS={id:STUDENTS.length+1,name,csid:document.getElementById("ns_csid").value||`YSPS${1200+STUDENTS.length}`,phone:document.getElementById("ns_phone").value,email:document.getElementById("ns_email").value,classId,status:"active",remaining:c?.per==="month"?22:10,initials,color:"#EAD9C4",tcolor:"#7B3A10"};
  STUDENTS.push(newS);
  // Update dropdowns
  ["rcptStudent","appt_student"].forEach(id=>{
    const sel=document.getElementById(id);
    const o=document.createElement("option");o.value=newS.id;o.textContent=newS.name;sel.appendChild(o);
  });
  closeModal("newStudentModal");
  buildStudentList();
  buildDashboard();
  buildReminders();
  toast(`${name} added as a new student ✓`);
}

// ══════════════════════════════════════════════
// REMINDERS
// ══════════════════════════════════════════════
function buildReminders() {
  const el=document.getElementById("remindersList");
  el.innerHTML="";
  // Group classes for tomorrow
  const tomorrow=new Date(now); tomorrow.setDate(tomorrow.getDate()+1);
  const tomorrowDay=tomorrow.getDay(); // 0=Sun,1=Mon...
  const weekdayClasses=CLASSES.filter(c=>c.id!=="therapy"&&c.id!=="vedic"&&isClassOnDay(c.id,tomorrowDay));
  const apptClasses=APPOINTMENTS.filter(a=>a.date===tomorrow.toISOString().slice(0,10));
  const tomorrowStr=tomorrow.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short",year:"numeric"}).replace(","," (").replace(",",")");

  if(!weekdayClasses.length&&!apptClasses.length) {
    el.innerHTML=`<div style="font-size:13px;color:var(--hint);padding:10px">No classes scheduled for tomorrow.</div>`;
    return;
  }

  weekdayClasses.forEach(c=>{
    const studs=STUDENTS.filter(s=>s.classId===c.id);
    studs.forEach(s=>{
      const ml=meetLinks[c.id];
      const msg=buildReminderMsg(s.name,tomorrowStr,c.time,c.name,ml,null);
      el.innerHTML+=reminderCard(s,c,msg);
    });
  });

  apptClasses.forEach(a=>{
    const msg=`Namaste ${a.student},\n\nGentle reminder for your ${a.type.split("(")[0].trim().toLowerCase()} on ${tomorrowStr} at ${a.time}. Kindly inform in advance if you need to reschedule.\n\n🪷Yoga Samvidaa`;
    const s=STUDENTS.find(x=>x.name===a.student)||{name:a.student,phone:"",initials:a.student.slice(0,2).toUpperCase(),color:"#EAD9C4",tcolor:"#7B3A10"};
    el.innerHTML+=reminderCard(s,{name:a.type,emoji:"📌"},msg);
  });
}

function isClassOnDay(cid,day) {
  // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  if(cid==="fitness") return day>=1&&day<=5;
  if(cid==="fitness") return day>=1&&day<=5;
  if(cid==="weekend"||cid==="tinyyogis") return day===0||day===6;
  return false;
}

function buildReminderMsg(name,dayStr,time,className,meetLink,location) {
  return `Namaste ${name},\n\nGentle reminder for your ${className.toLowerCase()} session on ${dayStr} ${time}. Kindly inform in advance if you need to reschedule.${meetLink?"\n\nJoin here: "+meetLink:""}\n\n🪷Yoga Samvidaa`;
}

function reminderCard(s,c,msg) {
  const phone=s.phone?s.phone.replace(/\D/g,""):"";
  const waLink=phone?`https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`:"#";
  return `<div class="card" style="margin-bottom:14px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div class="avatar" style="width:36px;height:36px;background:var(--cream2);color:var(--brown);font-size:13px">${s.initials}</div>
      <div>
        <div style="font-size:14px;font-weight:500;color:var(--ink)">${s.name}</div>
        <div style="font-size:12px;color:var(--muted)">${c.emoji||""} ${c.name}</div>
      </div>
      <a href="${waLink}" target="_blank" class="btn btn-wa btn-sm" style="margin-left:auto;text-decoration:none">📱 Send on WhatsApp</a>
    </div>
    <div class="reminder-box">${msg.replace(/\n/g,"<br>")}</div>
  </div>`;
}

function sendReminder(sid) {
  const s=STUDENTS.find(x=>x.id==sid);
  if(!s)return;
  const c=CLASSES.find(x=>x.id===s.classId)||{name:"class",time:""};
  const tomorrow=new Date(now); tomorrow.setDate(tomorrow.getDate()+1);
  const tomorrowStr=tomorrow.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short",year:"numeric"});
  const ml=meetLinks[s.classId];
  const msg=buildReminderMsg(s.name,tomorrowStr,c.time||"",c.name,ml,null);
  const phone=(s.phone||"").replace(/\D/g,"");
  document.getElementById("remindPreviewText").innerHTML=msg.replace(/\n/g,"<br>");
  document.getElementById("remindPreviewName").textContent=`${s.name}${phone?" · +91 "+phone.slice(0,5)+"XXXXX":""}`;
  document.getElementById("remindSendBtn").onclick=()=>{
    closeModal("remindPreviewModal");
    if(phone) window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`,"_blank");
    else toast("No phone number on file","error");
  };
  openModal("remindPreviewModal");
}

function quickRenew(sid) {
  const s=STUDENTS.find(x=>x.id==sid);
  if(!s)return;
  const c=CLASSES.find(x=>x.id===s.classId);
  document.getElementById("renewModalTitle").textContent=`Renew — ${s.name.split(" ")[0]}`;
  document.getElementById("renewModalDesc").innerHTML=`<strong>${s.name}</strong> · ${c?.name||""} · <span style="color:var(--gold)">₹${c?.price?.toLocaleString("en-IN")||"—"}/${c?.per||"month"}</span>`;
  document.getElementById("renewConfirmBtn").onclick=()=>{
    document.getElementById("rcptStudent").value=s.id;
    onRcptStudentChange();
    closeModal("renewPreviewModal");
    nav("receipts",null);
    document.querySelectorAll(".sb-item").forEach((b,i)=>{b.classList.toggle("active",i===3);});
    toast(`${s.name.split(" ")[0]} pre-filled in Receipts ✓`);
  };
  openModal("renewPreviewModal");
}

// ══════════════════════════════════════════════
// POPULATE SELECTS
// ══════════════════════════════════════════════
function populateAttendSelect() {
  const sel=document.getElementById("attendClassSelect");
  sel.innerHTML="";
  CLASSES.forEach(c=>{
    const o=document.createElement("option");
    o.value=c.id;
    // Count unique students from receipts
    const seen={};
    RECEIPTS.filter(r=>r.classId===c.id).forEach(r=>{seen[r.csid||r.student]=true;});
    const cnt=Object.keys(seen).length;
    o.textContent=`${c.name} · ${cnt} student${cnt!==1?"s":""}`;
    sel.appendChild(o);
  });
}
populateAttendSelect();

// ══════════════════════════════════════════════
// MODALS
// ══════════════════════════════════════════════
function openModal(id){document.getElementById(id).style.display="flex";}
function closeModal(id){document.getElementById(id).style.display="none";}

// ══════════════════════════════════════════════
// STUDENT FILTER FOR COLLECTIONS
// ══════════════════════════════════════════════
function populateStudentFilter() {
  const sel = document.getElementById("studentFilterSelect");
  if(!sel) return;
  // Keep first "All students" option, clear rest
  while(sel.options.length > 1) sel.remove(1);
  // Get unique students from receipts sorted by name
  const seen = {};
  [...RECEIPTS]
    .sort((a,b)=>a.student.localeCompare(b.student))
    .forEach(r=>{
      if(r.csid && !seen[r.csid]) {
        seen[r.csid] = true;
        const o = document.createElement("option");
        o.value = r.csid;
        o.textContent = `${r.student} (${r.csid})`;
        sel.appendChild(o);
      }
    });
}

function onStudentFilter(csid) {
  buildCollections(csid);
}

// ══════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════
function toast(msg,type="ok") {
  const el=document.getElementById("toastEl");
  el.textContent=msg;
  el.style.background=type==="error"?"#C0392B":"var(--brown)";
  el.style.display="block";
  setTimeout(()=>{el.style.display="none";},2800);
}

// Set today greeting based on time
const hr=now.getHours();
const greet=hr<12?"Good morning":"hr<17"?"Good afternoon":"Good evening";
document.getElementById("pageTitle").textContent=(hr<12?"Good morning, Dr. Arathi 🙏":hr<17?"Good afternoon, Dr. Arathi 🙏":"Good evening, Dr. Arathi 🙏");



// ── SUPABASE LIVE DATA LOADER ──────────────────
async function loadLiveData() {
  try {
    const [sRes, rRes] = await Promise.all([
      fetch('/api/students'),
      fetch('/api/receipts')
    ]);
    const liveStudents = await sRes.json();
    const liveReceipts = await rRes.json();
    if (Array.isArray(liveStudents) && liveStudents.length > 0) {
      STUDENTS = liveStudents.map((s, i) => ({
        id: i+1, name: s.name, csid: s.csid||'',
        phone: s.phone||'', classId: s.class_id||'therapy',
        initials: s.initials||s.name.slice(0,2).toUpperCase(),
        color: '#EAD9C4', tcolor: '#7B3A10',
        status: s.status||'active', remaining: s.remaining||8
      }));
    }
    if (Array.isArray(liveReceipts) && liveReceipts.length > 0) {
      RECEIPTS = liveReceipts.map(r => ({
        id: r.id, inv: r.inv, date: r.date,
        student: r.student, csid: r.csid||'',
        amount: r.amount||0, mode: r.mode||'—',
        phone: r.phone||'', classId: r.class_id||'therapy',
        classRaw: r.class_raw||''
      }));
    }
    buildDashboard();
    buildStudentList();
    buildRecentReceipts();
    buildCollections();
    buildAttendGrid();
    buildReminders();
    buildScheduleTable();
    populateStudentFilter();
    populateStudentDropdown();
    populateAttendSelect();
    const cb = document.getElementById('studentCountBadge');
    if (cb) cb.textContent = STUDENTS.length;
  } catch(e) { console.error('Supabase load error:', e); }
}
loadLiveData();
