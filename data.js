// =====================================================
// MABINOGI DRESS ROOM - 초기 데이터
// 이 파일을 직접 수정하거나, admin.html에서 편집하세요.
// admin에서 저장하면 localStorage에 우선 저장됩니다.
// =====================================================

// 스타일 목록 - admin에서 추가 가능 (localStorage 'mabinogi_styles' 에 저장)
const DEFAULT_STYLES = ['큐트','섹시','엘레강스','다크/고딕','판타지','캐주얼','로맨틱','쿨/시크','스포티','유니크'];

function loadStyles() {
  try {
    const saved = localStorage.getItem('mabinogi_dress_styles');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return [...DEFAULT_STYLES];
}

function saveStyles(styles) {
  localStorage.setItem('mabinogi_dress_styles', JSON.stringify(styles));
}

// ── 아이템 데이터 ──────────────────────────────────
// 필드 설명:
//   style        : string[] (다중 선택)
//   iconPath     : 아이콘 이미지 파일 경로 (예: "images/item_01.png"), 없으면 ""
//   imagePaths   : 추가 이미지 경로 배열 (예: ["images/item_01_a.png", ...])
//   colorParts   : 색상 파트 배열 { name, colorCount }
//   canEnchant   : boolean - 인챈트 가능 여부
//   canUpgrade   : boolean - 개조 가능 여부
//   canGem       : boolean - 세공 가능 여부
//   setInfo      : 세트 아이템 설명 텍스트
//   saleHistory  : 판매 이력 배열 (기존 resale 대체)
// ──────────────────────────────────────────────────

const DEFAULT_ITEMS = [
  {
    id: 1,
    iconPath: "",
    imagePaths: [],
    name: "스페셜 배틀 메이드 웨어 롱타입(여성용)",
    type: "의상",
    gender: "여성",
    race: "인간",
    style: ["섹시"],
    season: "기간한정",
    defense: 38, prot: 12, dur: 100, durMax: 100,
    colorParts: [
      { name: "상의 메인", colorCount: 3 },
      { name: "치마", colorCount: 2 },
      { name: "장갑", colorCount: 1 },
      { name: "신발", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: false, canGem: false,
    enchants: [
      { name: "전투 메이드의", slot: "접두", effect: "방어력 +10, 보호 +3" },
      { name: "용맹한", slot: "접미", effect: "STR +12" }
    ],
    setInfo: "",
    price: 2800000, priceMin: 2500000, priceMax: 3100000, priceDate: "2026-03-12",
    onSale: true,
    saleHistory: [
      { nth: 3, startDate: "2026-01-10", endDate: "2026-01-24", durationDays: 14, channel: "캐시샵", note: "신년 이벤트" },
      { nth: 2, startDate: "2025-07-01", endDate: "2025-07-15", durationDays: 14, channel: "이벤트", note: "" },
      { nth: 1, startDate: "2024-12-25", endDate: "2025-01-08", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 2,
    iconPath: "",
    imagePaths: [],
    name: "팔라딘 아머 세트(남성용)",
    type: "의상",
    gender: "남성",
    race: "인간",
    style: ["판타지"],
    season: "상시",
    defense: 55, prot: 22, dur: 120, durMax: 120,
    colorParts: [
      { name: "흉갑", colorCount: 2 },
      { name: "하의", colorCount: 2 },
      { name: "장갑", colorCount: 1 },
      { name: "투구", colorCount: 1 },
      { name: "신발", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: true, canGem: true,
    enchants: [
      { name: "성기사의", slot: "접두", effect: "방어력 +18, 보호 +6" },
      { name: "불굴의", slot: "접미", effect: "체력 최대치 +40" }
    ],
    setInfo: "팔라딘 세트 효과: 방어력 +10, 보호 +3 (세트 3종 착용 시)",
    price: 5400000, priceMin: 4900000, priceMax: 6000000, priceDate: "2026-03-11",
    onSale: true,
    saleHistory: [
      { nth: 5, startDate: "2026-02-14", endDate: "2026-02-28", durationDays: 14, channel: "캐시샵", note: "" },
      { nth: 4, startDate: "2025-09-01", endDate: "2025-09-14", durationDays: 13, channel: "이벤트", note: "" },
      { nth: 3, startDate: "2025-03-01", endDate: "2025-03-15", durationDays: 14, channel: "캐시샵", note: "" },
      { nth: 2, startDate: "2024-08-01", endDate: "2024-08-14", durationDays: 13, channel: "패키지", note: "여름 패키지" },
      { nth: 1, startDate: "2024-01-15", endDate: "2024-01-29", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 3,
    iconPath: "",
    imagePaths: [],
    name: "로즈 가든 드레스(여성용)",
    type: "의상",
    gender: "여성",
    race: "엘프",
    style: ["로맨틱", "엘레강스"],
    season: "상시",
    defense: 20, prot: 6, dur: 80, durMax: 80,
    colorParts: [
      { name: "원피스 메인", colorCount: 3 },
      { name: "레이스", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: false, canGem: false,
    enchants: [
      { name: "꽃향기의", slot: "접두", effect: "매력 +15" },
      { name: "우아한", slot: "접미", effect: "카리스마 +10, 연주 +5" }
    ],
    setInfo: "",
    price: 1200000, priceMin: 980000, priceMax: 1500000, priceDate: "2026-03-10",
    onSale: false,
    saleHistory: [
      { nth: 2, startDate: "2025-05-01", endDate: "2025-05-21", durationDays: 20, channel: "이벤트", note: "봄 이벤트" },
      { nth: 1, startDate: "2024-05-10", endDate: "2024-05-24", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 4,
    iconPath: "",
    imagePaths: [],
    name: "엘프 포레스트 로브(공용)",
    type: "로브",
    gender: "공용",
    race: "엘프",
    style: ["판타지"],
    season: "기간한정",
    defense: 30, prot: 10, dur: 90, durMax: 90,
    colorParts: [
      { name: "로브 메인", colorCount: 2 },
      { name: "후드", colorCount: 1 },
      { name: "장식", colorCount: 2 }
    ],
    canEnchant: true, canUpgrade: false, canGem: true,
    enchants: [
      { name: "자연의", slot: "접두", effect: "마법 공격력 +8, INT +12" },
      { name: "숲의 수호자", slot: "접미", effect: "물 속성 마법 대미지 +15%" }
    ],
    setInfo: "",
    price: 3600000, priceMin: 3200000, priceMax: 4000000, priceDate: "2026-03-12",
    onSale: true,
    saleHistory: []
  },
  {
    id: 5,
    iconPath: "",
    imagePaths: [],
    name: "어반 스트릿 캐주얼(공용)",
    type: "의상",
    gender: "공용",
    race: "인간",
    style: ["캐주얼"],
    season: "상시",
    defense: 15, prot: 4, dur: 70, durMax: 70,
    colorParts: [
      { name: "상의", colorCount: 2 },
      { name: "하의", colorCount: 2 }
    ],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 650000, priceMin: 500000, priceMax: 800000, priceDate: "2026-03-09",
    onSale: false,
    saleHistory: [
      { nth: 3, startDate: "2026-01-01", endDate: "2026-01-31", durationDays: 30, channel: "캐시샵", note: "상시 복귀" },
      { nth: 2, startDate: "2025-01-01", endDate: "2025-01-31", durationDays: 30, channel: "캐시샵", note: "" },
      { nth: 1, startDate: "2024-03-01", endDate: "2024-03-31", durationDays: 30, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 6,
    iconPath: "",
    imagePaths: [],
    name: "드래곤나이트 플레이트(남성용)",
    type: "의상",
    gender: "남성",
    race: "자이언트",
    style: ["다크/고딕", "판타지"],
    season: "기간한정",
    defense: 72, prot: 28, dur: 150, durMax: 150,
    colorParts: [
      { name: "흉갑", colorCount: 2 },
      { name: "하의", colorCount: 2 },
      { name: "장갑", colorCount: 1 },
      { name: "부츠", colorCount: 1 },
      { name: "투구", colorCount: 1 },
      { name: "망토", colorCount: 2 }
    ],
    canEnchant: true, canUpgrade: true, canGem: true,
    enchants: [
      { name: "용사의", slot: "접두", effect: "방어력 +22, 보호 +8" },
      { name: "용혈의", slot: "접미", effect: "불 속성 저항 +20, 힘 +18" }
    ],
    setInfo: "드래곤나이트 풀세트 착용 시 불 속성 저항 +10 추가",
    price: 9800000, priceMin: 8500000, priceMax: 11000000, priceDate: "2026-03-13",
    onSale: true,
    saleHistory: [
      { nth: 2, startDate: "2026-03-01", endDate: "2026-03-14", durationDays: 13, channel: "패키지", note: "드래곤 페스티벌 패키지" },
      { nth: 1, startDate: "2025-06-01", endDate: "2025-06-14", durationDays: 13, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 7,
    iconPath: "",
    imagePaths: [],
    name: "빅토리안 레이스 드레스(여성용)",
    type: "의상",
    gender: "여성",
    race: "인간",
    style: ["엘레강스", "로맨틱"],
    season: "상시",
    defense: 18, prot: 5, dur: 75, durMax: 75,
    colorParts: [
      { name: "드레스 메인", colorCount: 3 },
      { name: "레이스 장식", colorCount: 2 },
      { name: "리본", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: false, canGem: false,
    enchants: [
      { name: "고풍스러운", slot: "접두", effect: "카리스마 +18, 매력 +10" },
      { name: "레이스의", slot: "접미", effect: "봉제 성공률 +10%" }
    ],
    setInfo: "",
    price: 2100000, priceMin: 1800000, priceMax: 2400000, priceDate: "2026-03-11",
    onSale: false,
    saleHistory: [
      { nth: 4, startDate: "2025-12-01", endDate: "2025-12-25", durationDays: 24, channel: "이벤트", note: "크리스마스 이벤트" },
      { nth: 3, startDate: "2025-04-01", endDate: "2025-04-14", durationDays: 13, channel: "캐시샵", note: "" },
      { nth: 2, startDate: "2024-10-01", endDate: "2024-10-14", durationDays: 13, channel: "이벤트", note: "" },
      { nth: 1, startDate: "2024-03-08", endDate: "2024-03-22", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 8,
    iconPath: "",
    imagePaths: [],
    name: "마법소녀 변신 세트(여성용)",
    type: "의상",
    gender: "여성",
    race: "엘프",
    style: ["큐트"],
    season: "기간한정",
    defense: 22, prot: 7, dur: 85, durMax: 85,
    colorParts: [
      { name: "상의", colorCount: 2 },
      { name: "치마", colorCount: 2 },
      { name: "리본", colorCount: 1 },
      { name: "신발", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: false, canGem: false,
    enchants: [
      { name: "마법소녀의", slot: "접두", effect: "INT +20, 마법 방어 +8" },
      { name: "변신의", slot: "접미", effect: "변신 스킬 쿨타임 -10%" }
    ],
    setInfo: "",
    price: 4200000, priceMin: 3800000, priceMax: 4600000, priceDate: "2026-03-12",
    onSale: true,
    saleHistory: [
      { nth: 3, startDate: "2026-02-01", endDate: "2026-02-14", durationDays: 13, channel: "캐시샵", note: "" },
      { nth: 2, startDate: "2025-08-01", endDate: "2025-08-14", durationDays: 13, channel: "패키지", note: "마법소녀 패키지" },
      { nth: 1, startDate: "2025-02-14", endDate: "2025-02-28", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 9,
    iconPath: "",
    imagePaths: [],
    name: "자이언트 전사의 날개(공용)",
    type: "날개",
    gender: "공용",
    race: "자이언트",
    style: ["판타지"],
    season: "기간한정",
    defense: 5, prot: 2, dur: 50, durMax: 50,
    colorParts: [{ name: "날개", colorCount: 2 }],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 7200000, priceMin: 6500000, priceMax: 8000000, priceDate: "2026-03-13",
    onSale: true,
    saleHistory: [
      { nth: 2, startDate: "2026-01-15", endDate: "2026-01-29", durationDays: 14, channel: "이벤트", note: "신년 이벤트" },
      { nth: 1, startDate: "2025-04-01", endDate: "2025-04-15", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 10,
    iconPath: "",
    imagePaths: [],
    name: "별빛 스타더스트 이펙트",
    type: "스타더스트",
    gender: "공용",
    race: "인간",
    style: ["유니크"],
    season: "상시",
    defense: 0, prot: 0, dur: 0, durMax: 0,
    colorParts: [{ name: "이펙트 컬러", colorCount: 1 }],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 3300000, priceMin: 2900000, priceMax: 3700000, priceDate: "2026-03-12",
    onSale: false,
    saleHistory: [
      { nth: 1, startDate: "2025-11-11", endDate: "2025-11-25", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 11,
    iconPath: "",
    imagePaths: [],
    name: "고양이 꼬리 장식(공용)",
    type: "꼬리",
    gender: "공용",
    race: "엘프",
    style: ["큐트"],
    season: "상시",
    defense: 0, prot: 0, dur: 0, durMax: 0,
    colorParts: [
      { name: "꼬리 메인", colorCount: 2 },
      { name: "꼬리 끝", colorCount: 1 }
    ],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 1800000, priceMin: 1500000, priceMax: 2200000, priceDate: "2026-03-11",
    onSale: true,
    saleHistory: [
      { nth: 3, startDate: "2026-01-20", endDate: "2026-02-03", durationDays: 14, channel: "이벤트", note: "" },
      { nth: 2, startDate: "2025-06-01", endDate: "2025-06-14", durationDays: 13, channel: "캐시샵", note: "" },
      { nth: 1, startDate: "2024-09-01", endDate: "2024-09-14", durationDays: 13, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 12,
    iconPath: "",
    imagePaths: [],
    name: "드래곤 슬레이어 무기 외형",
    type: "무기/악기 외형",
    gender: "공용",
    race: "자이언트",
    style: ["다크/고딕"],
    season: "기간한정",
    defense: 0, prot: 0, dur: 0, durMax: 0,
    colorParts: [
      { name: "무기 메인", colorCount: 2 },
      { name: "이펙트", colorCount: 1 }
    ],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 12000000, priceMin: 10500000, priceMax: 13500000, priceDate: "2026-03-13",
    onSale: true,
    saleHistory: [
      { nth: 2, startDate: "2026-03-01", endDate: "2026-03-14", durationDays: 13, channel: "패키지", note: "드래곤 페스티벌 패키지" },
      { nth: 1, startDate: "2025-06-01", endDate: "2025-06-14", durationDays: 13, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 13,
    iconPath: "",
    imagePaths: [],
    name: "서머 비키니 원피스(여성용)",
    type: "의상",
    gender: "여성",
    race: "인간",
    style: ["섹시"],
    season: "기간한정",
    defense: 10, prot: 3, dur: 60, durMax: 60,
    colorParts: [
      { name: "원피스", colorCount: 2 },
      { name: "샌들", colorCount: 1 }
    ],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 3100000, priceMin: 2700000, priceMax: 3500000, priceDate: "2026-03-13",
    onSale: true,
    saleHistory: [
      { nth: 3, startDate: "2025-07-01", endDate: "2025-07-21", durationDays: 20, channel: "이벤트", note: "여름 이벤트" },
      { nth: 2, startDate: "2024-07-01", endDate: "2024-07-21", durationDays: 20, channel: "이벤트", note: "" },
      { nth: 1, startDate: "2023-07-10", endDate: "2023-07-24", durationDays: 14, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 14,
    iconPath: "",
    imagePaths: [],
    name: "나이트 스쿨 유니폼(공용)",
    type: "의상",
    gender: "공용",
    race: "인간",
    style: ["쿨/시크"],
    season: "상시",
    defense: 16, prot: 5, dur: 72, durMax: 72,
    colorParts: [
      { name: "상의", colorCount: 2 },
      { name: "하의", colorCount: 1 },
      { name: "넥타이", colorCount: 1 }
    ],
    canEnchant: true, canUpgrade: false, canGem: false,
    enchants: [
      { name: "학원의", slot: "접두", effect: "지력 +10, INT +8" },
      { name: "우등생의", slot: "접미", effect: "경험치 획득량 +5%" }
    ],
    setInfo: "",
    price: 880000, priceMin: 720000, priceMax: 1050000, priceDate: "2026-03-10",
    onSale: false,
    saleHistory: [
      { nth: 2, startDate: "2025-09-01", endDate: "2025-09-14", durationDays: 13, channel: "캐시샵", note: "신학기 이벤트" },
      { nth: 1, startDate: "2024-09-01", endDate: "2024-09-14", durationDays: 13, channel: "캐시샵", note: "최초 출시" }
    ]
  },
  {
    id: 15,
    iconPath: "",
    imagePaths: [],
    name: "스포츠 트레이닝 세트(공용)",
    type: "의상",
    gender: "공용",
    race: "인간",
    style: ["스포티"],
    season: "상시",
    defense: 12, prot: 4, dur: 65, durMax: 65,
    colorParts: [
      { name: "상의", colorCount: 2 },
      { name: "하의", colorCount: 2 },
      { name: "운동화", colorCount: 1 }
    ],
    canEnchant: false, canUpgrade: false, canGem: false,
    enchants: [],
    setInfo: "",
    price: 590000, priceMin: 450000, priceMax: 700000, priceDate: "2026-03-09",
    onSale: false,
    saleHistory: [
      { nth: 1, startDate: "2025-04-01", endDate: "2025-04-30", durationDays: 29, channel: "캐시샵", note: "최초 출시" }
    ]
  }
];

// ── localStorage 유틸 ─────────────────────────────

function loadItems() {
  try {
    const saved = localStorage.getItem('mabinogi_dress_items');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // 구버전 호환 처리
        return parsed.map(item => {
          if (!item.saleHistory) item.saleHistory = item.resale || [];
          if (!Array.isArray(item.style)) item.style = item.style ? [item.style] : [];
          if (!item.colorParts) item.colorParts = (item.parts||[]).map(p => ({ name: p.name, colorCount: p.count||1 }));
          if (!item.imagePaths) item.imagePaths = [];
          if (item.iconPath === undefined) item.iconPath = '';
          if (item.canEnchant === undefined) item.canEnchant = false;
          if (item.canUpgrade === undefined) item.canUpgrade = false;
          if (item.canGem === undefined) item.canGem = false;
          if (item.setInfo === undefined) item.setInfo = '';
          return item;
        });
      }
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_ITEMS));
}

function saveItems(items) {
  localStorage.setItem('mabinogi_dress_items', JSON.stringify(items));
}

function getNextId(items) {
  return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
}
