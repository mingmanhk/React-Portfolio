/**
 * Traditional Chinese text. Arrays follow the same order as src/data/profile.js;
 * only text is translated here, while links, images, and ids come from the English
 * data. Simplified Chinese is generated from this file: npm run i18n:hans.
 */
export default {
  person: {
    role: "代理資訊長",
    org: "美國華盛頓州雷克伍德市（City of Lakewood）",
    lede:
      "公部門資訊長暨企業 IT 領導者。我負責雷克伍德市全市的科技策略、資訊安全與基礎架構；此前在西雅圖地區為跨國企業領導 IT 達 18 年。",
    summary:
      "公部門資訊長暨企業 IT 領導者，擁有 18 年以上基礎架構、資訊安全與服務營運現代化經驗。現任華盛頓州雷克伍德市代理資訊長，領導全市科技策略、零信任身分管理與具韌性的混合式基礎架構。擅長以營運數據支持有依據的投資決策：SLA 達成率 99%、服務台工單減少 70%、軟硬體支出減半。",
  },
  pillars: [
    { name: "單一登入", summary: "每位員工只用一個身分登入，並以高強度多重驗證保護。" },
    { name: "單一網路", summary: "所有據點與遠端員工都在同一個受管理、受監控的網路上。" },
    { name: "單一標準", summary: "硬體、支援與授權採用共同標準，讓每筆投資都可衡量。" },
  ],
  sites: ["市政廳", "警察局", "公園", "議會廳", "遠端員工", "雲端身分"],
  highlights: [
    { text: "美洲服務台支援 1,000 名使用者，SLA 達成率 99%" },
    { text: "建立全球自助知識庫後，服務台工單減少 70%" },
    { text: "完成 5 次以上併購整合，服務零中斷" },
    { text: "完成託管資料中心建置與遷移，全程 100% 正常運作" },
  ],
  experience: [
    {
      title: "代理資訊長／IT 經理",
      location: "華盛頓州雷克伍德",
      scope: "領導全市 IT 策略、基礎架構現代化與資訊安全，涵蓋市政廳、警察局、公園及對外公共服務。",
      groups: [
        {
          theme: "策略與治理",
          duties: [
            "推動策略規劃、統一技術標準與專案執行，使每筆投資都符合成本效益、營運需求與法規要求。",
            "以數據驅動資產、服務台營運與軟體授權的治理，支持透明且有依據的預算決策。",
          ],
        },
        {
          theme: "資安與身分管理",
          duties: [
            "主導市府資訊安全與合規計畫，包括存取管理、監控與資料保護。",
            "以零信任原則推動市府身分與存取管理的現代化。",
          ],
        },
        {
          theme: "基礎架構與韌性",
          duties: [
            "管理地端與雲端基礎架構，確保各部門的高效能、可靠性與安全連線。",
            "透過平台整合降低虛擬化與授權成本，同時提升關鍵系統的災難復原能力。",
          ],
        },
      ],
    },
    {
      title: "IT 顧問",
      location: "華盛頓州西雅圖",
      scope: "為西雅圖的客輪與旅遊業者提供策略性 IT 顧問服務，就營運、基礎架構與資訊安全向管理層提出建議。",
      duties: [
        "主導美國營運與德國弗倫斯堡母公司的系統整合，確保連線順暢並符合全球標準。",
        "與國際 IT 團隊及德國開發人員合作，確保跨國專案準時並達到品質要求。",
        "評估軟體、廠商服務與支援流程，依 ITIL 制定遷移計畫，並提出強化可靠性、資安與效率的優先建議。",
        "為西雅圖 IT 人員提供實務支援與培訓，提升在地能力與日常服務穩定度。",
      ],
    },
    {
      title: "創辦人暨 IT 顧問",
      location: "華盛頓州西雅圖",
      scope: "獨立顧問公司，提供 IT 顧問服務並開發軟體產品。",
      duties: [
        "建立並推出 W1IT.com，專注於網路架構、設計與資安評估的 IT 顧問與代管服務品牌。",
        "推出 Taskin.app，並以 Swift 與 SwiftUI 開發 Apple 原生 App，包括 Pixel Color Pick（Mac App Store）與 DeepTicker（iOS）。",
        "為中小企業提供雲端基礎架構、資訊安全與 IT 營運諮詢。",
      ],
    },
    {
      title: "IT 經理",
      location: "華盛頓州貝爾維尤",
      scope: "領導美洲 IT 服務營運，支援 1,000 名以上使用者，涵蓋 Windows、macOS、虛擬桌面與行動裝置。",
      groups: [
        {
          theme: "服務交付",
          duties: [
            "依 ITIL 重建全球工單系統並優化 SLA 與 KPI 架構，SLA 達成率達 99%。",
            "透過全球標準作業程序、自助知識庫，以及自動化與 AI 聊天機器人，使服務台工單量減少 70%。",
          ],
        },
        {
          theme: "財務與資產治理",
          duties: [
            "與財務部門建立採購預測模型，預測準確率 95%，軟硬體支出減半。",
            "透過廠商績效管理、SLA 執行與談判，降低營運成本 30%。",
            "執行全球資產生命週期管理，稽核準確率 100%、資產零遺失；導入 RFID 與 BLE 後盤點時間減少 95%。",
          ],
        },
        {
          theme: "領導",
          duties: [
            "以 SQL、Python、Tableau 與 Power BI 建立主管 KPI 與總持有成本儀表板，並指導跨區域的一至三線團隊。",
          ],
        },
      ],
    },
    {
      title: "資深 IT 經理",
      location: "華盛頓州貝爾維尤",
      scope: "隨公司從 30 人成長至跨州 500 人以上，從零建立 IT 部門。",
      duties: [
        "主導 5 次以上併購的 IT 盡職調查與整合，確保資產完整延續。",
        "以 VMware、Azure 與 AWS 推動雲端優先策略，提升擴充性並降低基礎架構負擔。",
        "建立 ISO、SOX、SOC 與 HIPAA 合規控制及災難復原架構。",
      ],
    },
    {
      title: "IT 經理（由軟體工程師晉升）",
      location: "華盛頓州貝爾維尤",
      scope: "領導北美服務台、網路與系統管理團隊。",
      duties: [
        "建置並遷移美國託管資料中心，全程 100% 正常運作、業務零中斷。",
        "將地端系統遷移至 VMware 與 Azure，並撰寫支持 ISO 認證的災難復原與營運持續計畫。",
        "開發 API 並調校 SQL，與全球 SAP 團隊完成跨平台資料整合。",
      ],
    },
    {
      title: "全端工程師",
      location: "德州休士頓",
      scope: "開發倉儲、訂單與庫存系統的內部網頁應用、PHP 服務與 MySQL 資料庫。",
      duties: [],
    },
  ],
  capabilities: [
    { name: "領導與策略", items: ["IT 策略與藍圖", "預算、採購與廠商管理", "政策與治理", "跨地域團隊領導"] },
    { name: "資安與治理", items: ["零信任身分與存取管理", "ISO、SOX、SOC、HIPAA 控制", "風險與稽核準備", "災難復原與營運持續"] },
    { name: "基礎架構與雲端", items: ["地端與雲端混合架構", "Microsoft 365 與 Entra ID", "AWS 與 Azure", "虛擬化與網路"] },
    { name: "服務交付與營運", items: ["ITIL 服務設計", "ServiceNow、Jira、Freshworks", "資產生命週期與 CMDB", "KPI 與 SLA 儀表板"] },
    { name: "工程與開發", items: ["React 與 Node.js", "Swift 與 SwiftUI", "SQL 與 Python", "API 與系統整合"] },
  ],
  projectTypes: ["全部", "產品", "網頁應用", "後端"],
  projects: [
    "開源的 macOS 取色工具，提供全螢幕滴管、一鍵複製 HEX／RGB／HSL 與顏色歷史。以 Swift 與 SwiftUI 開發。",
    "免費、免註冊的線上工具箱：QR 碼、去背、圖片壓縮、證件照、檔案轉換與 AI 股票分析。",
    "重視隱私的 iOS 投資組合追蹤 App，可自選 AI 模型提供市場分析。以 Swift 與 SwiftUI 開發，資料只存在裝置上。",
    "具圖表與登入功能的習慣追蹤工具，以 Express、Sequelize 與 Handlebars 開發。",
    "以 Express 與 MySQL 開發、採用 MVC 架構並具登入功能的部落格平台。",
    "依所在位置或郵遞區號尋找附近餐廳，並可依料理類型或菜單搜尋。",
    "使用 OpenWeather One Call API 查詢城市天氣預報。",
    "可在瀏覽器儲存每小時行程的日程規劃工具。",
    "依指定長度與字元規則產生隨機密碼。",
    "以 MySQL 管理員工資料庫的命令列工具。",
    "以 Express 與 Sequelize 開發的電商後端 API，管理 MySQL 中的商品、分類與標籤。",
  ],
  projectLive: { "Live site": "線上網站" },
  education: [
    { name: "電腦資訊科技系統碩士", school: "休士頓大學" },
    { name: "電腦科學學士，副修管理", school: "達拉斯浸信會大學" },
    { name: "全端程式設計訓練營", school: "華盛頓大學" },
  ],
  ventures: ["IT 顧問與代管服務", "免費的日常線上工具箱"],
  months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  ui: {
    lang: "zh-Hant",
    langName: "繁體中文",
    title: "Victor Lam｜雷克伍德市代理資訊長",
    description:
      "Victor Lam 現任美國華盛頓州雷克伍德市代理資訊長，擁有 18 年以上在地方政府與跨國企業領導 IT 基礎架構、資訊安全與服務營運的經驗。",
    skip: "跳至主要內容",
    nav: { experience: "經歷", capabilities: "專長", projects: "作品", contact: "聯絡" },
    navLabel: "頁面區段",
    toDark: "切換為深色模式",
    toLight: "切換為淺色模式",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    languages: "語言",
    summary: "摘要",
    emailMe: "寄信給 Victor",
    resume: "英文履歷（PDF）",
    linkedin: "LinkedIn 個人檔案",
    github: "GitHub 個人檔案",
    planHeading: "我如何規劃城市 IT",
    planTabs: "城市 IT 規劃主軸",
    core: "城市網路",
    mapTitle: (name) => `城市各據點連接到同一網路的示意圖：${name}`,
    experience: "經歷",
    highlights: "職涯亮點",
    present: "至今",
    dateSep: " – ",
    capabilities: "專長",
    education: "學歷",
    projects: "作品",
    projectsLede: "我已推出的產品，以及為保持工程能力而開發的應用程式。",
    filterLabel: "篩選作品",
    shown: (n) => `顯示 ${n} 個作品`,
    source: "原始碼",
    forProject: (label, name) => `${name} 的${label}`,
    screenshot: (name) => `${name} 截圖`,
    contact: "聯絡",
    contactLede: "歡迎交流公部門科技、IT 領導與資安現代化等議題。",
    copy: "複製 Email",
    copied: "已複製",
    copiedStatus: "Email 已複製",
    resumeShort: "英文履歷",
    alsoBuilding: "其他事業",
    views: (n) => `${n} 次瀏覽`,
    privacy: "隱私權",
    disclaimer: "這是個人網站，內容僅代表個人觀點，不代表雷克伍德市政府。",
  },
};
