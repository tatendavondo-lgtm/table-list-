/**
 * Wedding Seating Chart — Tawanda Mutyebere & Eunice Makura
 * Sunday, 06 December 2026 • 2PM • Wildcard Farm, Beatrice
 * 25 Tables displayed in 5 groups of 5 tables
 */

const TABLES = [
  {
    id: "tbl-vip",
    name: "VIP Table",
    shortLabel: "VIP",
    isVip: true,
    guests: [
      "CBZ Bank (4)",
      "Stanbic Bank (4)",
      "NMB Bank (4)",
      "EcoBank (4)",
      "Total Energies (4)",
      "Zuva Petroleum (4)",
      "Mr & Mrs Tungwarara",
      "Mr & Mrs Mukatu"
    ]
  },
  {
    id: "tbl-4",
    name: "Table 4",
    shortLabel: "4",
    isVip: false,
    guests: [
      "Mr & Mrs Madziyire Josphate",
      "Mr & Mrs Madziyire Joseph",
      "Mrs Sekiwa",
      "Mr & Mrs Mugovo"
    ]
  },
  {
    id: "tbl-5",
    name: "Table 5",
    shortLabel: "5",
    isVip: false,
    guests: [
      "Mr & Mrs Nyamayevhu",
      "Mr & Mrs Devera",
      "Mr & Mrs Chimedza",
      "Mr & Mrs Deredzai",
      "Mr & Mrs Gomba"
    ]
  },
  {
    id: "tbl-6",
    name: "Table 6",
    shortLabel: "6",
    isVip: false,
    guests: [
      "Mr & Mrs Matuzula",
      "Mr & Mrs Mazango",
      "Mr & Mrs Nyatsime",
      "Mr & Mrs Matsinde",
      "Mr & Mrs Nguwaya"
    ]
  },
  {
    id: "tbl-7",
    name: "Table 7",
    shortLabel: "7",
    isVip: false,
    guests: [
      "Dr, Bishop & Amai Madziyire",
      "Mr & Mrs Sasa",
      "Bishop & Amai Madawo",
      "Bishop Nehemaya Mutendi +5",
      "Mr & Mrs Hebert Mutendi",
      "ZCC Chaka +4"
    ]
  },
  {
    id: "tbl-8",
    name: "Table 8",
    shortLabel: "8",
    isVip: false,
    guests: [
      "Vongai Musungwa",
      "Mr & Mrs Musungwa Tinashe",
      "Mr & Mrs Mupandare",
      "Mr & Mrs Chirovamhangu",
      "Mr & Mrs Benard"
    ]
  },
  {
    id: "tbl-9",
    name: "Table 9",
    shortLabel: "9",
    isVip: false,
    guests: [
      "Mercy Ganyani",
      "Shingirirai Chigaduro",
      "Mr & Mrs Chiwa",
      "Ms Eustina Tabvanei"
    ]
  },
  {
    id: "tbl-10",
    name: "Table 10",
    shortLabel: "10",
    isVip: false,
    guests: [
      "Mr & Mrs Kangai Jaspher",
      "Scholastic Chikwinya",
      "Mr & Mrs Blessing",
      "Mr & Mrs Mutsa Shonhiwa",
      "Mr & Mrs Chiropa Clemence",
      "Mr & Mrs Nyangari Jetro"
    ]
  },
  {
    id: "tbl-11",
    name: "Table 11",
    shortLabel: "11",
    isVip: false,
    guests: [
      "Mr & Mrs Darare Brenda",
      "Mr & Mrs Mungate Paddington",
      "Mr & Mrs Tobaiwa Taurai",
      "Mr & Mrs Dzumbira Tatenda",
      "Mr & Mrs Gwena"
    ]
  },
  {
    id: "tbl-12",
    name: "Table 12",
    shortLabel: "12",
    isVip: false,
    guests: [
      "Mr & Mrs Chasowa Abena",
      "Mr & Mrs Moyana",
      "Mr & Mrs Mazara",
      "Mr & Mrs Mudhadhadha"
    ]
  },
  {
    id: "tbl-13",
    name: "Table 13",
    shortLabel: "13",
    isVip: false,
    guests: [
      "Mr & Mrs Fernandis Paul",
      "Mr Stuart",
      "Mr & Mrs Hwenga",
      "Mr & Mrs Chidhakwa",
      "Mrs Nomusa",
      "Rosie Sanyangore +1"
    ]
  },
  {
    id: "tbl-14",
    name: "Table 14",
    shortLabel: "14",
    isVip: false,
    guests: [
      "Mr & Mrs Chandiwana",
      "Mr & Mrs Mufudze",
      "Mr & Mrs Takawira",
      "Mr & Mrs Dr Chimhini",
      "Mr & Mrs Madhombiro"
    ]
  },
  {
    id: "tbl-15",
    name: "Table 15",
    shortLabel: "15",
    isVip: false,
    guests: [
      "Mr & Mrs Mandeya",
      "Dr Mr & Mrs Tagwirei Kudakwashe",
      "Mr & Mrs Kondongwe Stanley",
      "Mr & Mrs Gumbochuma Justine",
      "Mr & Mrs Mulalazi Everton (VIP)"
    ]
  },
  {
    id: "tbl-16",
    name: "Table 16",
    shortLabel: "16",
    isVip: false,
    guests: [
      "Mr & Mrs Chiwaya",
      "Aunty Abbey & Husband",
      "Mr & Mrs Matiyenga Victor",
      "Mr & Mrs Chenjerai Paul +3"
    ]
  },
  {
    id: "tbl-20",
    name: "Table 20",
    shortLabel: "20",
    isVip: false,
    guests: [
      "Mr & Mrs Kumbula",
      "Alice Mutyebere",
      "Mr & Mrs Shumbanhete",
      "Mr & Mrs Makore (+2)",
      "Mr & Mrs Musisinyani",
      "Susan Mutyebere",
      "Makomborere Kwangwa",
      "Ropafadzo Kwangwa & Husband",
      "Makanaka Kwangwa",
      "Mr & Mrs Kwangwa Thomas",
      "Mr & Mrs Kwangwa Tobias"
    ]
  },
  {
    id: "tbl-21",
    name: "Table 21",
    shortLabel: "21",
    isVip: false,
    guests: [
      "Patience Kumbula & Husband",
      "Maria Mutyebere & Husband",
      "Dean Mutyebere",
      "Mufaro Makore",
      "Lilian Gasva & Husband",
      "Linah Gasva & Husband",
      "Tinotenda Mutyebere & Husband",
      "Tsitsi Kwangwa & Husband",
      "Mr & Mrs Kwangwa Tawanda",
      "Mr & Mrs Kwangwa Kris",
      "Mr & Mrs Kwangwa Simon",
      "Wadzanai Kwangwa & Husband"
    ]
  },
  {
    id: "tbl-22",
    name: "Table 22",
    shortLabel: "22",
    isVip: false,
    guests: [
      "Gogo Mutyebere",
      "Mr & Mrs Mutyebere Pinto",
      "Mr & Mrs Mutyebere Farai",
      "Mr & Mrs Kwangwa Jaison",
      "Mrs Kwangwa (Mai Edwin)",
      "Mr & Mrs Musungwa William"
    ]
  },
  {
    id: "tbl-23",
    name: "Table 23",
    shortLabel: "23",
    isVip: false,
    guests: [
      "Mrs Munzvenga",
      "Kupakwashe Munzvenga & Wife",
      "Mr & Mrs Kwangwa Oliver",
      "Adrian Kwangwa & Husband",
      "Tenda Kwangwa & Husband"
    ]
  },
  {
    id: "tbl-24",
    name: "Table 24",
    shortLabel: "24",
    isVip: false,
    guests: [
      "Mr & Mrs Kumbula Lazarous",
      "Mr & Mrs Kumbula Pardon",
      "Shumirai Gondo & Husband",
      "Mr & Mrs Makore Master",
      "Mr & Mrs Mashiingaidze Norman",
      "Mr & Mrs Kwangwa Snr",
      "Mr & Mrs Kwangwa Tapison",
      "Mr & Mrs Kwangwa Elias",
      "Mr & Mrs Kwangwa Pio"
    ]
  },
  {
    id: "tbl-25",
    name: "Table 25",
    shortLabel: "25",
    isVip: false,
    guests: [
      "Rumbi Shumbanhete & Husband",
      "Mr & Mrs Shumbanhete Liberty",
      "Roily Shumbanhete & Husband",
      "Mr & Mrs Shumbanhete Paidaishe",
      "Mr & Mrs Chiondegwa Benard",
      "Mr & Mrs Chiondegwa Bothwell",
      "Mr & Mrs Makore Milton",
      "Mr & Mrs Mutyebere Wonder",
      "Winnet Kwangwa & Husband",
      "Rumbidzai Kwangwa & Husband",
      "Caroline Kwangwa & Husband",
      "Mr & Mrs Chingware Botha",
      "Edwin Kwangwa",
      "Cynthia Kwangwa"
    ]
  },
  {
    id: "tbl-26",
    name: "Table 26",
    shortLabel: "26",
    isVip: false,
    guests: [
      "Sifelani Mabhachi +1",
      "Nyarai Mabhachi +1",
      "Tambudzai Mabhachi",
      "Vongai Watura & Husband",
      "Baba Gire & Wife",
      "Mr & Mrs Kwangwa Talent",
      "Mr & Mrs Chingware Stan",
      "Mr & Mrs Mutyebere Simbarashe",
      "Gogo Chingware (Mai Simba)",
      "Mr & Mrs Chenjerai Benson"
    ]
  },
  {
    id: "tbl-27",
    name: "Table 27",
    shortLabel: "27",
    isVip: false,
    guests: [
      "Pepe Kumbula & Husband",
      "Mr & Mrs Kumbula Kim",
      "Mr & Mrs Kumbula Richard",
      "Mr & Mrs Shumbanhete Muraga",
      "Loice Shumbanhete & Husband",
      "Simbarashe Makura & Wife",
      "Farai Makura",
      "Ngoni Watura",
      "Isheanopa Watura",
      "Delight Ncube",
      "Nyaradzo Chiwawa & Husband",
      "Mr & Mrs Chenjerai Obert",
      "Mr & Mrs Chenjerai Tawanda",
      "Mr & Mrs Chenjerai Shadreck",
      "Alice Chenjerai & Husband"
    ]
  },
  {
    id: "tbl-28",
    name: "Table 28",
    shortLabel: "28",
    isVip: false,
    guests: [
      "Mr & Mrs Mutyebere John",
      "Mr & Mrs Mutyebere Relax",
      "Batsirai Makore",
      "Makanaka Makore",
      "Mutsawashe Makore",
      "Tatenda Musisinyani",
      "Bethel Musisinyani",
      "Sergious Musisinyani",
      "Gogo Mlambo",
      "Sekuru & Gogo Mlambo",
      "Praise Mlambo",
      "Hazel Mlambo"
    ]
  },
  {
    id: "tbl-29",
    name: "Table 29",
    shortLabel: "29",
    isVip: false,
    guests: [
      "Mr & Mrs Watura",
      "Mr & Mrs Watura Jnr",
      "Mr & Mrs Nasilile",
      "Joy Makura & Husband",
      "Mr & Mrs Kasuso"
    ]
  },
  {
    id: "tbl-30",
    name: "Table 30",
    shortLabel: "30",
    isVip: false,
    guests: [
      "Tafadzwa Kasuso",
      "Makanaka Kasuso",
      "Mr & Mrs Mungofa",
      "Tinashe Mungofa",
      "Tadiwa Mungofa",
      "Chido Makura & Husband"
    ]
  }
];

const GROUP_SIZE = 5;
const AUTO_ROTATE_MS = 15000;
const PAUSE_AFTER_TAP_MS = 45000;

const tablesGrid = document.getElementById("tablesGrid");
const groupTabs = document.getElementById("groupTabs");
const groupProgress = document.getElementById("groupProgress");

let currentGroup = 0;
let rotateTimer = null;
let resumeTimer = null;

function getGroups() {
  const groups = [];
  for (let i = 0; i < TABLES.length; i += GROUP_SIZE) {
    groups.push(TABLES.slice(i, i + GROUP_SIZE));
  }
  return groups;
}

function groupLabel(group) {
  const first = group[0].shortLabel;
  const last = group[group.length - 1].shortLabel;
  if (first === "VIP") {
    return `VIP & Tables ${group[1].shortLabel} – ${last}`;
  }
  return `Tables ${first} – ${last}`;
}

function buildTableCard(table) {
  const card = document.createElement("article");
  card.className = "table-card";
  card.id = table.id;

  if (table.isVip) {
    card.classList.add("vip-card");
  }
  if (table.guests.length >= 13) {
    card.classList.add("dense-xl");
  } else if (table.guests.length >= 11) {
    card.classList.add("dense-lg");
  }

  const header = document.createElement("div");
  header.className = "table-card-header";

  const title = document.createElement("h3");
  title.className = "table-title";
  title.textContent = table.name;
  header.appendChild(title);

  const list = document.createElement("ul");
  list.className = "guest-list";

  table.guests.forEach(name => {
    const li = document.createElement("li");
    li.className = "guest-item";
    li.textContent = name;
    list.appendChild(li);
  });

  card.appendChild(header);
  card.appendChild(list);
  return card;
}

function renderGroupTabs() {
  if (!groupTabs) return;
  groupTabs.innerHTML = "";
  const groups = getGroups();
  groups.forEach((group, gi) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "group-tab" + (gi === currentGroup ? " active" : "");
    btn.textContent = groupLabel(group);
    btn.addEventListener("click", () => {
      showGroup(gi);
      pauseAutoRotate();
    });
    groupTabs.appendChild(btn);
  });
}

function showGroup(gi, animate = true) {
  const groups = getGroups();
  currentGroup = ((gi % groups.length) + groups.length) % groups.length;

  const draw = () => {
    tablesGrid.innerHTML = "";
    groups[currentGroup].forEach(table => {
      tablesGrid.appendChild(buildTableCard(table));
    });
    tablesGrid.scrollTop = 0;
    tablesGrid.classList.remove("is-fading");
    renderGroupTabs();
    restartProgressBar();
  };

  if (animate && tablesGrid.children.length) {
    tablesGrid.classList.add("is-fading");
    setTimeout(draw, 220);
  } else {
    draw();
  }
}

function restartProgressBar() {
  if (!groupProgress) return;
  groupProgress.classList.remove("running");
  void groupProgress.offsetWidth;
  if (rotateTimer) {
    groupProgress.style.animationDuration = `${AUTO_ROTATE_MS}ms`;
    groupProgress.classList.add("running");
  }
}

function startAutoRotate() {
  stopAutoRotate();
  rotateTimer = setInterval(() => showGroup(currentGroup + 1), AUTO_ROTATE_MS);
  restartProgressBar();
}

function stopAutoRotate() {
  if (rotateTimer) clearInterval(rotateTimer);
  rotateTimer = null;
}

function pauseAutoRotate() {
  stopAutoRotate();
  restartProgressBar();
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(startAutoRotate, PAUSE_AFTER_TAP_MS);
}

// Keyboard arrow navigation
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    showGroup(currentGroup + 1);
    pauseAutoRotate();
  } else if (e.key === "ArrowLeft") {
    showGroup(currentGroup - 1);
    pauseAutoRotate();
  }
});

// Swipe left/right on mobile to switch group
let touchStartX = null;
let touchStartY = null;
tablesGrid.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });
tablesGrid.addEventListener("touchend", (e) => {
  if (touchStartX === null || touchStartY === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  touchStartX = null;
  touchStartY = null;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    showGroup(currentGroup + (dx < 0 ? 1 : -1));
    pauseAutoRotate();
  }
}, { passive: true });

// Automatically enter fullscreen on load or first interaction
function tryEnterFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) return;
  const el = document.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (req) {
    try {
      const p = req.call(el, { navigationUI: "hide" });
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch (e) {}
  }
}

document.addEventListener("click", tryEnterFullscreen);
document.addEventListener("touchstart", tryEnterFullscreen, { passive: true });

window.addEventListener("load", () => {
  showGroup(0, false);
  startAutoRotate();
  tryEnterFullscreen();
});
