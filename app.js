/**
 * Wedding Seating Chart — Tinotenda Callisto Jokonya & Chiedza Kayla Juwao
 * Groups of 5 Tables (Tables 1 to 20, Table 7 = VIP)
 */

const TABLES = [
  {
    id: "tbl-1",
    name: "Table 1 • Jokonya",
    isVip: false,
    guests: [
      "Dr C Jokonya",
      "Mrs L Jokonya",
      "Mr J Jokonya",
      "Mrs C Jokonya",
      "Dr C Tazarurwa",
      "Mrs F Jokonya",
      "Mrs P Jokonya",
      "Dr C Tazarurwa",
      "Tete Tsistsi chimutwe",
      "Mbuya Manyame"
    ]
  },
  {
    id: "tbl-2",
    name: "Table 2 • Juwao",
    isVip: false,
    guests: [
      "Mr S Zhuwao",
      "Mrs S Zhuwao",
      "Mr Jongwe",
      "Mrs F R Juwao",
      "Winnet Zhuwao",
      "Susan Zhuwao",
      "Mr Tarwirei Zhuwao",
      "Mr. Norman Zhuwao",
      "Mr. Simbisai Zhuwao",
      "Mbuya Zhuwao"
    ]
  },
  {
    id: "tbl-3",
    name: "Table 3 • Jokonya",
    isVip: false,
    guests: [
      "Ambassador Dr. Tamer Almasri",
      "Ms K Bopoto",
      "Mr Chikanda",
      "Mrs Chikanda",
      "Sabhuku T P Mliswa",
      "Dr Norma Mliswa",
      "Hon M Phiri",
      "Mrs A Phiri",
      "Dr K Tagwirei",
      "Mrs Tagwirei"
    ]
  },
  {
    id: "tbl-4",
    name: "Table 4 • Juwao",
    isVip: false,
    guests: [
      "Mr Mapuranga",
      "Mrs Mapuranga",
      "Mr G Gwimbi",
      "Mrs G Gwimbi",
      "Mr J Gwimbi",
      "Mr Chendume",
      "Mrs Chendume",
      "Mr Lioga",
      "Mrs Lioga",
      "Mbuya Gwimbi"
    ]
  },
  {
    id: "tbl-5",
    name: "Table 5 • Jokonya",
    isVip: false,
    guests: [
      "Hon W Chitando",
      "Mrs I Chitando",
      "Mr G Guvamatanga",
      "Mrs Guvamatanga",
      "Mr M Hungwe",
      "Mrs Hungwe",
      "Mr C Malunga",
      "Mrs Malunga",
      "Mr L Mutasa",
      "Mrs M Mutasa"
    ]
  },
  {
    id: "tbl-6",
    name: "Table 6 • Juwao",
    isVip: false,
    guests: [
      "Mrs Masendu",
      "Ms Felly Gwimbi",
      "Mrs Makanga",
      "Mr Makanga",
      "Mrs Gwimbi - Felix",
      "Mrs Gwimbi - Fidelis",
      "Mr Muzondo",
      "Mr Mutsvedu",
      "Mrs Mutsvedu"
    ]
  },
  {
    id: "tbl-7",
    name: "Table 7 • VIP",
    isVip: true,
    guests: [
      "VIP"
    ]
  },
  {
    id: "tbl-8",
    name: "Table 8 • Juwao",
    isVip: false,
    guests: [
      "Mr Mutandiro",
      "Mrs Mutandiro",
      "Mr Munyaradzi",
      "Mrs Munyaradzi",
      "Mrs Machana",
      "Ms Faith Gwimbi",
      "Mr Chibanda",
      "Mrs Chibanda",
      "Mr Mutsengi",
      "Mrs Mutsengi"
    ]
  },
  {
    id: "tbl-9",
    name: "Table 9 • Jokonya",
    isVip: false,
    guests: [
      "Mainini Louisa",
      "Mainini Nessia",
      "Ms Tsitsi Mapako",
      "Mr Fundikwa",
      "Mrs Fundikwa",
      "Mr Manyepwa",
      "Mrs Manyepwa",
      "Mr Kandiwa",
      "Mrs Kandiwa",
      "Ms K Madzokere"
    ]
  },
  {
    id: "tbl-10",
    name: "Table 10 • Juwao",
    isVip: false,
    guests: [
      "Mr N Juwao",
      "Ms T Gogwe",
      "Tanaka Mukuna",
      "Charles Jorgensen",
      "Wellington Muramba",
      "Beryl Matambo",
      "Mrs Mudawapi"
    ]
  },
  {
    id: "tbl-11",
    name: "Table 11 • Jokonya",
    isVip: false,
    guests: [
      "Mr M Jokonya",
      "Mr F Jokonya",
      "Miss T Jokonya",
      "Cranos Jokonya",
      "Chiedza Jokonya",
      "Kudzai Rukukwa",
      "Mandy Musikavanhu",
      "Kudzai Rukukwa +1",
      "Mandy Musikavanhu +1",
      "Lorell"
    ]
  },
  {
    id: "tbl-12",
    name: "Table 12 • Jokonya",
    isVip: false,
    guests: [
      "Mr Bvuma",
      "Mrs Bvuma",
      "Mrs T Mutimsakwa",
      "Mr J Muthundura",
      "Mrs Muthundura",
      "Mr Makopa",
      "Mr K Tembo",
      "Mrs M Tembo",
      "Memory Jokonya",
      "Ms S Mukaro"
    ]
  },
  {
    id: "tbl-13",
    name: "Table 13 • Jokonya",
    isVip: false,
    guests: [
      "Mrs S Chidawu",
      "Rev S Mhindu",
      "Mr Ruhukwa",
      "Mrs Ruhukwa",
      "Mr Deda",
      "Mrs Deda",
      "Mr Masviba",
      "Mr Jinya",
      "Dr Jinya"
    ]
  },
  {
    id: "tbl-14",
    name: "Table 14 • Juwao",
    isVip: false,
    guests: [
      "Mr Mutsinze",
      "Mrs Mutsinze",
      "Mr Matambo",
      "Mrs Matambo",
      "Mr Ncube",
      "Mrs Ncube",
      "Mr Chimanga",
      "Mrs Chimanga"
    ]
  },
  {
    id: "tbl-15",
    name: "Table 15 • Jokonya",
    isVip: false,
    guests: [
      "Rev G Run'anga",
      "Mrs B Run'anga",
      "Rev J Kawadza",
      "Mrs Kawadza",
      "Rev A Makiwa",
      "Mrs Makiwa",
      "Rev F Mushishiware",
      "Mrs Mushishiware",
      "Mai R Gavaza",
      "Mai A Rugara"
    ]
  },
  {
    id: "tbl-16",
    name: "Table 16 • Juwao",
    isVip: false,
    guests: [
      "Tobias Murahwa",
      "Toby's +1",
      "Iphithule Shumbanhete",
      "Rodney Shumbanhete",
      "Mr Nyoni",
      "Mrs Nyoni",
      "Talent Basera",
      "Dominic Masaire",
      "Tinashe Ncube",
      "Tinokudzaishe Elijah"
    ]
  },
  {
    id: "tbl-17",
    name: "Table 17 • Jokonya",
    isVip: false,
    guests: [
      "Rev Kadenge",
      "Mrs Kadenge",
      "Rev Chikwese",
      "Mrs Chikwese",
      "Mrs Madzima",
      "Mrs H Munyonga",
      "Mr Marangwanda",
      "Mr Mwedzi",
      "Mrs Mwedzi"
    ]
  },
  {
    id: "tbl-18",
    name: "Table 18 • Juwao",
    isVip: false,
    guests: [
      "Portia Madede",
      "Rutendo Munyaradzi",
      "Mrs Nyamande",
      "Brenda Garufu",
      "Mr T Machana"
    ]
  },
  {
    id: "tbl-19",
    name: "Table 19 • Jokonya",
    isVip: false,
    guests: [
      "Mr Muwani",
      "Mrs Muwani",
      "Mrs Tembedza",
      "Nyasha Tembedza"
    ]
  },
  {
    id: "tbl-20",
    name: "Table 20 • Jokonya",
    isVip: false,
    guests: [
      "Sinegugu Ndlovu",
      "Hope Mathebula",
      "Tony Misago",
      "Emma Maboreke",
      "Jarryd Basson",
      "Mrs Basson",
      "Courtney Mcelod",
      "Thandiwe Munashe",
      "Thandiwe Munashe +1",
      "Tonderai Tsorayi"
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

function groupLabel(groupIndex) {
  const start = groupIndex * GROUP_SIZE + 1;
  const end = Math.min(start + GROUP_SIZE - 1, TABLES.length);
  return `Tables ${start} – ${end}`;
}

function buildTableCard(table) {
  const card = document.createElement("article");
  card.className = "table-card";
  card.id = table.id;

  const upperName = table.name.toUpperCase();
  if (table.isVip) {
    card.classList.add("vip-card");
  } else if (upperName.includes("JOKONYA")) {
    card.classList.add("family-jokonya");
  } else if (upperName.includes("JUWAO")) {
    card.classList.add("family-juwao");
  }

  const header = document.createElement("div");
  header.className = "table-card-header";

  const title = document.createElement("h3");
  title.className = "table-title";
  title.textContent = table.name;
  header.appendChild(title);

  const list = document.createElement("ul");
  list.className = "guest-list";

  if (table.isVip) {
    const li = document.createElement("li");
    li.className = "guest-item vip-placeholder";
    li.textContent = "VIP";
    list.appendChild(li);
  } else {
    table.guests.forEach(name => {
      const li = document.createElement("li");
      li.className = "guest-item";
      li.textContent = name;
      list.appendChild(li);
    });
  }

  card.appendChild(header);
  card.appendChild(list);
  return card;
}

function renderGroupTabs() {
  if (!groupTabs) return;
  groupTabs.innerHTML = "";
  const groups = getGroups();
  groups.forEach((_, gi) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "group-tab" + (gi === currentGroup ? " active" : "");
    btn.textContent = groupLabel(gi);
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

// Automatically enter fullscreen on load or first interaction (no popups or extra buttons)
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
