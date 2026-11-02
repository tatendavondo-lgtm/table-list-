/**
 * Wedding Seating Chart — Tawanda Mutyebere & Eunice Makura
 * Sunday, 06 December 2026 • 2PM • Wildcard Farm, Beatrice
 * 35 Tables displayed in 7 groups of 5 tables
 */

const TABLES = [
  {
    "id": "tbl-1",
    "name": "Table 1",
    "shortLabel": "1",
    "isVip": false,
    "guests": [
      "Gogo Mutyebere",
      "Mrs Mutyebere Pinto",
      "Mr Mutyebere Pinto",
      "Mr Mutyebere Farai",
      "Mrs Mutyebere Farai",
      "Mr Kwangwa Jaison",
      "Mrs Kwangwa Jaison",
      "Mr Musungwa William",
      "Mrs Musungwa William",
      "Mrs Kwangwa ( mai Edwin)"
    ]
  },
  {
    "id": "tbl-2",
    "name": "Table 2",
    "shortLabel": "2",
    "isVip": false,
    "guests": [
      "Sifelani Mabhachi",
      "Sifelani Mabhachi",
      "Tambudzai Mabhachi",
      "Nyarai  Mabhachi",
      "Nyarai  Mabhachi",
      "Tambudzai Mabhachi",
      "Vongai Watura",
      "Vongai Watura Husband",
      "Baba Gire",
      "Mai Gire"
    ]
  },
  {
    "id": "tbl-3",
    "name": "Table 3",
    "shortLabel": "3",
    "isVip": false,
    "guests": [
      "Farai Makura",
      "Ngoni Watura",
      "Isheanopa Watura",
      "Delight Ncube",
      "Nyaradzo Chiwawa",
      "Nyaradzo Chiwawa",
      "simbarashe Makura wife",
      "Simbarashe Makura &wife",
      "Mr & Mrs Chiondegwa Benard",
      "Mr & Mrs Chiondegwa Benard"
    ]
  },
  {
    "id": "tbl-4",
    "name": "Table 4",
    "shortLabel": "4",
    "isVip": false,
    "guests": [
      "Tafadzwa Kasuso",
      "Makanaka Kasuso",
      "Mr & Mrs Mungofa",
      "Tinashe  Mungofa",
      "Tadiwa Mungofa",
      "Chido Makura & Husband",
      "Mr & Mrs Shumbanhete Liberty",
      "Mr & Mrs Shumbanhete Liberty",
      "Roily Shumbanhete & Husband",
      "Roily Shumbanhete & Husband"
    ]
  },
  {
    "id": "tbl-5",
    "name": "Table 5",
    "shortLabel": "5",
    "isVip": false,
    "guests": [
      "Mr Watura",
      "Mrs Watura",
      "Mr Watura Jnr",
      "Mrs Watura Jnr",
      "Mrs Nasilile",
      "Mr Nasilile",
      "Joy Makura Husband",
      "Joy Makura",
      "Mrs Kasuso",
      "Mr Kasuso"
    ]
  },
  {
    "id": "tbl-6",
    "name": "Table 6",
    "shortLabel": "6",
    "isVip": false,
    "guests": [
      "Gogo Mlambo",
      "Sekuru & Gogo Mlambo",
      "Sekuru & Gogo Mlambo",
      "Praise Mlambo",
      "Hazel Mlambo",
      "Mr & Mrs Makore",
      "Mr & Mrs Makore",
      "Mr & Mrs Makore",
      "Mr & Mrs Makore"
    ]
  },
  {
    "id": "tbl-8",
    "name": "Table 8",
    "shortLabel": "8",
    "isVip": false,
    "guests": [
      "Mr & Mrs Chenjerai Obert",
      "Mr & Mrs Chenjerai Obert",
      "Mr & Mrs Chenjerai Tawanda",
      "Mr & Mrs Chenjerai Tawanda",
      "Mr & Mrs Chenjerai Shadreck",
      "Mr & Mrs Chenjerai Shadreck",
      "Alice  Chenjerai & Husband",
      "Alice  Chenjerai & Husband",
      "Mr & Mrs Shumbanhete Muraga",
      "Mr & Mrs Shumbanhete Muraga"
    ]
  },
  {
    "id": "tbl-9",
    "name": "Table 9",
    "shortLabel": "9",
    "isVip": false,
    "guests": [
      "Loice Shumbanhete & Husband",
      "Loice Shumbanhete & Husband",
      "Pepe Kumbula & Husband",
      "Pepe Kumbula & Husband",
      "Mr & Mrs Kumbula Kim",
      "Mr & Mrs Kumbula Kim",
      "Mr & Mrs Kumbula Richard",
      "Mr & Mrs Kumbula Richard",
      "Mr & Mrs Chiondegwa Bothwell",
      "Mr & Mrs Chiondegwa Bothwell"
    ]
  },
  {
    "id": "tbl-10",
    "name": "Table 10",
    "shortLabel": "10",
    "isVip": false,
    "guests": [
      "Mr & Mrs Kwangwa Talent",
      "Mr & Mrs Kwangwa Talent",
      "Mr & Mrs Chingware Stan",
      "Mr & Mrs Chingware Stan",
      "Mr & Mrs Mutyebere Simbarashe",
      "Mr & Mrs Mutyebere Simbarashe",
      "Mr & Mrs  Chenjerai Benson",
      "Mr & Mrs  Chenjerai Benson",
      "Gogo Chingware (mai Simba)"
    ]
  },
  {
    "id": "tbl-11",
    "name": "Table 11",
    "shortLabel": "11",
    "isVip": false,
    "guests": [
      "Mr & Mrs Kwangwa  Thomas",
      "Mr & Mrs Kwangwa  Thomas",
      "Mr  & Mrs Kwangwa Tobias",
      "Mr  & Mrs Kwangwa Tobias",
      "Ropafadzo Kwangwa & Husband",
      "Ropafadzo Kwangwa & Husband",
      "Makomborere Kwangwa",
      "Makanaka Kwangwa"
    ]
  },
  {
    "id": "tbl-12",
    "name": "Table 12",
    "shortLabel": "12",
    "isVip": false,
    "guests": [
      "Tsitsi Kwangwa & Husband",
      "Tsitsi Kwangwa & Husband",
      "Mr & Mrs Kwangwa Tawanda",
      "Mr & Mrs Kwangwa Tawanda",
      "Mr & Mrs Kwangwa Kris",
      "Mr & Mrs Kwangwa Kris",
      "Mr & Mrs Kwangwa  Simon",
      "Mr & Mrs Kwangwa  Simon",
      "Wadzanai Kwangwa & Husband",
      "Wadzanai Kwangwa & Husband"
    ]
  },
  {
    "id": "tbl-13",
    "name": "Table 13",
    "shortLabel": "13",
    "isVip": false,
    "guests": [
      "Mr & Mrs Kwangwa Oliver",
      "Mr & Mrs Kwangwa Oliver",
      "Adrian Kwangwa & Husband",
      "Adrian Kwangwa & Husband",
      "Tenda Kwangwa & Husband",
      "Tenda Kwangwa & Husband",
      "Kupakwashe Munzvenga & Wife",
      "Kupakwashe Munzvenga & Wife",
      "Winnet Kwangwa & Husband",
      "Winnet Kwangwa & Husband"
    ]
  },
  {
    "id": "tbl-14",
    "name": "Table 14",
    "shortLabel": "14",
    "isVip": false,
    "guests": [
      "Cynthia Kwangwa",
      "Edwin Kwangwa",
      "Mrs Munzvenga",
      "Rumbidzai Kwangwa & Husband",
      "Rumbidzai Kwangwa & Husband",
      "Caroline Kwangwa & Husband",
      "Caroline Kwangwa & Husband",
      "Mr & Mrs Chingware Botha",
      "Mr & Mrs Chingware Botha"
    ]
  },
  {
    "id": "tbl-15",
    "name": "Table 15",
    "shortLabel": "15",
    "isVip": false,
    "guests": [
      "Mr & Mrs Kwangw Snr",
      "Mr & Mrs Kwangw Snr",
      "Mr & Mrs Kwangwa Tapison",
      "Mr & Mrs Kwangwa Tapison",
      "Mr & Mrs Kwangwa Elias",
      "Mr & Mrs Kwangwa Elias",
      "Mr & Mrs Kwangwa Pio",
      "Mr & Mrs Kwangwa Pio",
      "Shumirai Gondo & Husband",
      "Shumirai Gondo & Husband"
    ]
  },
  {
    "id": "tbl-16",
    "name": "Table 16",
    "shortLabel": "16",
    "isVip": false,
    "guests": [
      "Mr & Mrs Matuzula",
      "Mr & Mrs Matuzula",
      "Mr & Mrs Mazango",
      "Mr & Mrs Mazango",
      "Mr & Mrs Nyatsime",
      "Mr & Mrs Nyatsime",
      "Mr & Mrs Matsinde",
      "Mr & Mrs Matsinde",
      "Mr & Mrs Nguwaya",
      "Mr & Mrs Nguwaya"
    ]
  },
  {
    "id": "tbl-17",
    "name": "Table 17",
    "shortLabel": "17",
    "isVip": false,
    "guests": [
      "Bishop Nehemaya Mutendi",
      "Bishop Nehemaya Mutendi",
      "Mr & Mrs Hebert Mutendi",
      "Mr & Mrs Hebert Mutendi",
      "Mr & Mrs Sasa",
      "Mr & Mrs Sasa",
      "Bishop & Amai Madawo",
      "Bishop & Amai Madawo",
      "Dr, Bishop & Amai Madziyire",
      "Dr, Bishop & Amai Madziyire"
    ]
  },
  {
    "id": "tbl-18",
    "name": "Table 18",
    "shortLabel": "18",
    "isVip": false,
    "guests": [
      "Mr & Mrs Nyamayevhu",
      "Mr & Mrs Nyamayevhu",
      "Mr & Mrs Devera",
      "Mr & Mrs Devera",
      "Mr & Mrs Chimedza",
      "Mr & Mrs Chimedza",
      "Mr & Mrs Deredzai",
      "Mr & Mrs Deredzai",
      "Mr & Mrs Gomba",
      "Mr & Mrs Gomba"
    ]
  },
  {
    "id": "tbl-19",
    "name": "Table 19",
    "shortLabel": "19",
    "isVip": false,
    "guests": [
      "Lilian Gasva  & Husband",
      "Lilian Gasva & Husband",
      "Linah Gasva & Husband",
      "Linah Gasva & Husband",
      "Tinotenda Mutyebere & Husband",
      "Tinotenda Mutyebere & Husband",
      "Patience Kumbula and Husband",
      "Patience Kumbula and Husband",
      "Maria Mutyebere & Husband",
      "Maria Mutyebere & Husband"
    ]
  },
  {
    "id": "tbl-20",
    "name": "Table 20",
    "shortLabel": "20",
    "isVip": false,
    "guests": [
      "Mr & Mrs Madziyire Joseph",
      "Mr & Mrs Madziyire Joseph",
      "Mr & Mrs Madziyire Josphate",
      "Mr & Mrs Madziyire Josphate",
      "Mr & Mrs Mugovo",
      "Mr & Mrs Mugovo",
      "Mrs Sekiwa",
      "Rumbi Shumbanhete & Husband",
      "Rumbi Shumbanhete & Husband"
    ]
  },
  {
    "id": "tbl-21",
    "name": "Table 21",
    "shortLabel": "21",
    "isVip": false,
    "guests": [
      "Mr & Mrs Musungwa Tinashe",
      "Mr & Mrs Musungwa Tinashe",
      "Mr & Mrs Mupandare",
      "Mr & Mrs Mupandare",
      "Mr & Mrs Chirovamhangu",
      "Mr & Mrs Chirovamhangu",
      "Mr & Mrs Benard",
      "Mr & Mrs Benard",
      "Vongai Musungwa"
    ]
  },
  {
    "id": "tbl-22",
    "name": "Table 22",
    "shortLabel": "22",
    "isVip": false,
    "guests": [
      "Dr Mr & Mrs Tagwirei Kudakwashe",
      "Dr Mr & Mrs Tagwirei Kudakwashe",
      "Mr & Mrs Kondongwe Stanley",
      "Mr & Mrs Kondongwe Stanley",
      "Mr & Mrs Gumbochuma Justine",
      "Mr & Mrs Gumbochuma Justine",
      "Mr & Mrs Mulalazi Everton",
      "Mr & Mrs Mulalazi Everton",
      "Mr & Mrs Tungwarara",
      "Mr & Mrs Tungwarara"
    ]
  },
  {
    "id": "tbl-23",
    "name": "Table 23",
    "shortLabel": "23",
    "isVip": false,
    "guests": [
      "Mr & Mrs Mandeya",
      "Mr & Mrs Mandeya",
      "Bishop Mutendi",
      "Bishop Mutendi",
      "Bishop Mutendi",
      "Bishop Mutendi",
      "Mr & Mrs Mutyebere Wonder",
      "Mr & Mrs Mutyebere Wonder"
    ]
  },
  {
    "id": "tbl-24",
    "name": "Table 24",
    "shortLabel": "24",
    "isVip": false,
    "guests": [
      "Mercy Ganyani",
      "Shingirirai Chigaduro",
      "Mr & Mrs Chiwa",
      "Mr & Mrs Chiwa",
      "Ms Eustina Tabvanei",
      "Scholastic Chikwinya",
      "Mr Stuart",
      "Mr & Mrs Makore Milton",
      "Mr & Mrs Makore Milton"
    ]
  },
  {
    "id": "tbl-25",
    "name": "Table 25",
    "shortLabel": "25",
    "isVip": false,
    "guests": [
      "Mr & Mrs Chiropa Clemence",
      "Mr & Mrs Chiropa Clemence",
      "Mr & Mrs Nyangari Jetro",
      "Mr & Mrs Nyangari Jetro",
      "Mr & Mrs Kangai Jaspher",
      "Mr & Mrs Kangai Jaspher",
      "Mr & Mrs Blessing",
      "Mr & Mrs Blessing",
      "Mr & Mrs Mutsa Shonhiwa",
      "Mr & Mrs Mutsa Shonhiwa"
    ]
  },
  {
    "id": "tbl-26",
    "name": "Table 26",
    "shortLabel": "26",
    "isVip": false,
    "guests": [
      "Mr & Mrs Darare Brenda",
      "Mr & Mrs Darare Brenda",
      "Mr & Mrs Mungate Paddington",
      "Mr & Mrs Mungate Paddington",
      "Mr & Mrs Tobaiwa Taurai",
      "Mr & Mrs Tobaiwa Taurai",
      "Mr & Mrs Dzumbira Tatenda",
      "Mr & Mrs Dzumbira Tatenda",
      "Mr & Mrs Gwena",
      "Mr & Mrs Gwena"
    ]
  },
  {
    "id": "tbl-27",
    "name": "Table 27",
    "shortLabel": "27",
    "isVip": false,
    "guests": [
      "Mr & Mrs Chasowa Abena",
      "Mr & Mrs Chasowa Abena",
      "Mr & Mrs Moyana",
      "Mr & Mrs Moyana",
      "Mr & Mrs Mazara",
      "Mr & Mrs Mazara",
      "Mr & Mrs Mudhadhadha",
      "Mr & Mrs Mudhadhadha",
      "Mr & Mrs Shumbanhete Paidaishe",
      "Mr & Mrs Shumbanhete Paidaishe"
    ]
  },
  {
    "id": "tbl-28",
    "name": "Table 28",
    "shortLabel": "28",
    "isVip": false,
    "guests": [
      "Mr & Mrs Chandiwana",
      "Mr & Mrs Chandiwana",
      "Mr & Mrs Mufudze",
      "Mr & Mrs Mufudze",
      "Mr & Mrs Takawira",
      "Mr & Mrs Takawira",
      "Mr & Mrs Dr Chimhini",
      "Mr & Mrs Dr Chimhini",
      "Mr & Mrs Madhombiro",
      "Mr & Mrs Madhombiro"
    ]
  },
  {
    "id": "tbl-29",
    "name": "Table 29",
    "shortLabel": "29",
    "isVip": false,
    "guests": [
      "Mr & Mrs Makore Master",
      "Mr & Mrs Makore Master",
      "Mr & Mrs Mashiingaidze Norman",
      "Mr & Mrs Mashiingaidze Norman",
      "Mr & Mrs Kumbula Lazarous",
      "Mr & Mrs Kumbula Lazarous",
      "Mr & Mrs Kumbula Pardon",
      "Mr & Mrs Kumbula Pardon",
      "Mr & Mrs Chenjerai Paul"
    ]
  },
  {
    "id": "tbl-30",
    "name": "Table 30",
    "shortLabel": "30",
    "isVip": false,
    "guests": [
      "Mr & Mrs Fernandis Paul",
      "Mr & Mrs Fernandis Paul",
      "Mr & Mrs Hwenga",
      "Mr & Mrs Hwenga",
      "Mr & Mrs Chidhakwa",
      "Mr & Mrs Chidhakwa",
      "Mrs Nomusa",
      "Mrs Nomusa",
      "Rosie Sanyangore",
      "Rosie Sanyangore"
    ]
  },
  {
    "id": "tbl-31",
    "name": "Table 31",
    "shortLabel": "31",
    "isVip": false,
    "guests": [
      "Aunty Abbey & Husband",
      "Aunty Abbey & Husband",
      "Mr & Mrs Chiwaya",
      "Mr & Mrs Chiwaya",
      "Mr & Mrs Matiyenga Victor",
      "Mr & Mrs Matiyenga Victor",
      "Mr & Mrs Chenjerai Paul",
      "Mr & Mrs Chenjerai Paul",
      "Mr & Mrs Chenjerai Paul",
      "Mr & Mrs Chenjerai Paul"
    ]
  },
  {
    "id": "tbl-32",
    "name": "Table 32",
    "shortLabel": "32",
    "isVip": false,
    "guests": [
      "CBZ BANK",
      "CBZ BANK",
      "CBZ BANK",
      "CBZ BANK",
      "Stanbic Bank",
      "Stanbic Bank",
      "Stanbic Bank",
      "Stanbic Bank"
    ]
  },
  {
    "id": "tbl-33",
    "name": "Table 33",
    "shortLabel": "33",
    "isVip": false,
    "guests": [
      "NMB BANK",
      "NMB BANK",
      "NMB BANK",
      "NMB BANK",
      "ECO BANK",
      "ECO BANK",
      "ECO BANK",
      "ECO BANK"
    ]
  },
  {
    "id": "tbl-34",
    "name": "Table 34",
    "shortLabel": "34",
    "isVip": false,
    "guests": [
      "Total Energies",
      "Total Energies",
      "Total Energies",
      "Total Energies",
      "Zuva Petroleum",
      "Zuva Petroleum",
      "Zuva Petroleum",
      "Zuva Petroleum"
    ]
  },
  {
    "id": "tbl-35",
    "name": "Table 35",
    "shortLabel": "35",
    "isVip": false,
    "guests": [
      "Tatenda Musisinyani",
      "Bethel Musisinyani",
      "Sergious Musisinyani",
      "Batsirai Makore",
      "Makanaka Makore",
      "Mutsawashe Makore",
      "Mufaro Makore",
      "Dean Mutyebere",
      "Alice Mutyebere",
      "Susan Mutyebere"
    ]
  },
  {
    "id": "tbl-36",
    "name": "Table 36",
    "shortLabel": "36",
    "isVip": false,
    "guests": [
      "Mr & Mrs Shumbanhete",
      "Mr & Mrs Shumbanhete",
      "Mr & Mrs Musisinyani",
      "Mr & Mrs Musisinyani",
      "Mr & Mrs Kumbula",
      "Mr & Mrs Kumbula",
      "Mr & Mrs Mutyebere John",
      "Mr & Mrs Mutyebere John",
      "Mr & Mrs Mutyebere Relax",
      "Mr & Mrs Mutyebere Relax"
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
