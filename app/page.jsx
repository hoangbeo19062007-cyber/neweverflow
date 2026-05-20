'use client';
import { useState } from 'react';

const asset = "https://w.ladicdn.com";
const store = `${asset}/5f714867c025a83c10a07869`;

const navLinks = [
  ["Trang chủ", "#home"],
  ["Về chúng tôi", "#about"],
  ["Dịch vụ", "#services"],
  ["Dự án tiêu biểu", "#projects"],
  ["Khách hàng", "#customers"],
  ["Liên hệ", "#contact"]
];

const introCards = [
  {
    title: "Chuyển đổi số",
    text: "Tập trung vào các dịch vụ chuyển đổi số cho doanh nghiệp",
    image: `${asset}/s850x600/5f714867c025a83c10a07869/imagepsd-3-20220727093743.png`
  },
  {
    title: "Giải pháp phần mềm",
    text: "Cung cấp các giải pháp phần mềm trong marketing",
    image: `${asset}/s800x550/5f714867c025a83c10a07869/imagepsd-3-20220727093743.png`
  },
  {
    title: "Tối ưu hiệu quả",
    text: "Cung cấp phần mềm chăm sóc khách hàng giúp cho các Doanh nghiệp tối ưu hiệu quả trong kinh doanh",
    image: `${asset}/s800x550/5f714867c025a83c10a07869/imagepsd-3-20220727093743.png`
  }
];

const serviceGroups = [
  {
    number: "1",
    title: "Sản phẩm phẩm trên nền tảng web",
    items: [
      "Thiết kế website Doanh nghiệp",
      "Thiết kế trang thương mại điên tử",
      "Thiết kế phần mềm trên nền tảng web",
      "Thiết kế cổng thông tin điện tử trực tuyến"
    ]
  },
  {
    number: "2",
    title: "Sản phẩm ứng dụng di động",
    items: [
      "Thiết kế Mobile App trên Android/ ISO",
      "Thiết kế hệ thống webapp",
      "Phát triển phần mềm quản lý trên App mobile",
      "Game"
    ]
  },
  {
    number: "3",
    title: "Các giải pháp tích hợp",
    items: [
      "Cung cấp giải pháp tích hợp đấu nối giữa các hệ thống phần mềm",
      "Phát triển các giải pháp phần mềm tích hợp với thiết bị phần cứng",
      "Phát triển hệ thống báo cáo, chỉ huy từ xa"
    ]
  },
  {
    number: "4",
    title: "Cho thuê nhân sự",
    items: [
      "Kĩ sư IT lập trình Java",
      "Kĩ sư IT lập trình Mobile",
      "Kĩ sư IT lập trình PHP",
      "Kĩ sư IT lập trình .Net",
      "Kĩ sư IT lập trình Front – end"
    ]
  }
];

const projectTabs = ["Giáo dục", "Viễn Thông", "Y Tế", "Báo chí - Truyền thông"];

const featuredProjects = [
  {
    title: "Giáo dục",
    image: `${asset}/s600x450/5f714867c025a83c10a07869/myhc_105842-20220921081658-gjgr4.jpg`
  },
  {
    title: "Viễn Thông",
    image: `${asset}/s600x450/5f714867c025a83c10a07869/eet-20220921081658-fbhiq.jpg`
  },
  {
    title: "Y Tế",
    image: `${asset}/s600x450/5f714867c025a83c10a07869/53674916_23843245794470487_851860802716565504_n-20220921081658-zqj1c.png`
  },
  {
    title: "Báo chí - Truyền thông",
    image: `${asset}/s600x450/5f714867c025a83c10a07869/nganh-truyen-thong-da-phuong-tien-20220809031551.jpg`
  }
];

const allProjects = [
  "API Camid",
  "Ứng dụng đọc báo VOV",
  "Mua bán xe",
  "Dự án mBCCS Mobile Billing and customer care system",
  "mDealer",
  "Dự án Viettel Global Portal",
  "My Unitel",
  "Project MG Land",
  "Oneclicktogo website",
  "Hệ thống luyện thi THPT",
  "Business Wisser",
  "Ứng dụng chăm sóc Sức Khỏe BellCare"
];

const projectsData = [
  {
    title: "Viettel",
    description: "Cổng thông tin điện tử Viettel.vn",
    bg: "#e30613",
    logo: "/logos/project-viettel-global.png",
    partner: "Viettel",
    technology: "PHP, Laravel, Redis, VueJS",
    isViettel: false
  },
  {
    title: "API Camid",
    description: "Hệ thống tích hợp Camid API",
    bg: "#0c8da6",
    logo: "/logos/project-myunitel.png",
    partner: "Metfone",
    technology: "Java, Framework Spring",
    isViettel: false
  },
  {
    title: "Tracking",
    description: "Giám sát hành trình Eposi - Hệ thống quản lý, giám sát xe trực tuyến thời gian thực",
    bg: "#28a745",
    logo: "/logos/project-oneclicktogo.png",
    partner: "Eposi",
    technology: "React Native",
    isViettel: false
  },
  {
    title: "mDealer",
    description: "Ứng dụng quản lý đại lý Metfone mDealer",
    bg: "#fd7e14",
    logo: "/logos/project-mbccs.png",
    partner: "Metfone",
    technology: "Android, Swift",
    isViettel: false
  },
  {
    title: "My Unitel",
    description: "Super App chăm sóc khách hàng cho thị trường Lào",
    bg: "#f16122",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.13.42.png",
    partner: "Unitel Laos",
    technology: "Native Mobile, Microservices",
    isViettel: false
  },
  {
    title: "Báo điện tử VOV",
    description: "Xây dựng hệ thống tòa soạn báo điện tử vov.vn",
    bg: "#004098",
    logo: "/logos/project-muabanxe.png",
    partner: "Đài tiếng nói Việt Nam (VOV)",
    technology: "PHP, Drupal, Postgres, Elasticsearch, Openshift",
    isViettel: false
  },
  {
    title: "Ứng dụng đọc báo VOV",
    description: "Ứng dụng di động đọc báo VOV chính thức",
    bg: "#0b5edd",
    logo: "/logos/project-businesswisser.png",
    partner: "Đài tiếng nói Việt Nam (VOV)",
    technology: "Kotlin, Swift, Firebase API",
    isViettel: false
  },
  {
    title: "Dự án GBOC",
    description: "Hệ thống trung tâm chỉ huy Viettel toàn cầu",
    bg: "#6f42c1",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 20.38.03.png",
    partner: "Viettel Global",
    technology: "PHP, Laravel, AngularJs, Java, Oracle, Big Data",
    isViettel: false
  },
  {
    title: "Dự án Viettel Global Portal",
    description: "Cổng thông tin tổng thể Viettel Toàn cầu",
    bg: "#e30613",
    logo: "/logos/project-mgland.png",
    partner: "Viettel Global",
    technology: "PHP, Laravel, Oracle",
    isViettel: false
  },
  {
    title: "Mua bán xe",
    description: "Nền tảng giao dịch ô tô trực tuyến chuyên nghiệp OtoViet",
    bg: "#1e40af",
    logo: "/logos/project-bellcare.png",
    partner: "OtoViet",
    technology: "React, Node.js, PostgreSQL",
    isViettel: false
  },
  {
    title: "Business Wisser",
    description: "Giải pháp quản trị doanh nghiệp thông minh",
    bg: "#1e3a5f",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.14.42.png",
    partner: "Wisser Group",
    technology: "Java, Spring Boot, Angular",
    isViettel: false
  },
  {
    title: "Oneclicktogo website",
    description: "Website đặt vé và tour du lịch trực tuyến",
    bg: "#065f46",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.15.03.png",
    partner: "Oneclicktogo",
    technology: "Next.js, Tailwind CSS",
    isViettel: false
  },
  {
    title: "Dự án mBCCS",
    description: "Hệ thống tính cước di động và chăm sóc khách hàng v2",
    bg: "#0e7490",
    logo: "/logos/project-thpt.png",
    partner: "Viettel Telecom",
    technology: "Java, Oracle, Redis",
    isViettel: false
  },
  {
    title: "Project MG Land",
    description: "Giải pháp quản lý tổng thể hoạt động kinh doanh bất động sản MG Land",
    bg: "#854d0e",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.14.27.png",
    partner: "MG Land Group",
    technology: "PHP, Laravel, AngularJs, Swift, React Native",
    isViettel: false
  },
  {
    title: "Ứng dụng BellCare",
    description: "Giải pháp chăm sóc sức khỏe toàn diện 24/7",
    bg: "#15803d",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.14.58.png",
    partner: "BellCare Việt Nam",
    technology: "Flutter, Firebase",
    isViettel: false
  },
  {
    title: "Hệ thống luyện thi THPT",
    description: "Nền tảng ôn thi trực tuyến cho học sinh THPT",
    bg: "#1e3a8a",
    logo: "/logos/Ảnh màn hình 2026-04-21 lúc 19.15.41.png",
    partner: "Đối tác giáo dục",
    technology: "Java, React, MySQL",
    isViettel: false
  }
];


const automationFeatures = [
  {
    title: "Tương tác",
    text: "Gia tăng khác hàng mới và thu hút sự quan tâm của khách hàng bằng những thông điệp phù hợp được cá nhân hóa dành riêng cho họ.",
    items: [
      "Quảng cáo tìm khách hàng mới",
      "Quảng cáo nhắm mục tiêu",
      "Chiến dịch Email Marketing",
      "Chiến dịch Push"
    ],
    icon: (
      <svg viewBox="0 0 100 100" className="automation-icon">
        <path d="M51.1,30.446c3.5,0,6.4-2.9,6.4-6.4s-2.9-6.4-6.4-6.4s-6.4,2.9-6.4,6.4C44.7,27.646,47.6,30.446,51.1,30.446 z M51.1,20.046c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S48.9,20.046,51.1,20.046z M19.5,91.646l15.3-5.4v-14.8c0,0-14.8,4.2-15.3,4.2 V91.646z M30.4,78.846c0.5-0.1,0.7,0.4,0.7,1c0,0.5-0.3,1.1-0.7,1.2c-0.4,0.1-0.8-0.3-0.8-0.9S30,78.946,30.4,78.846z M29.3,83.146 c0.5-0.1,0.7,0.4,0.7,1c0,0.5-0.3,1.1-0.7,1.2c-0.4,0.1-0.8-0.3-0.8-0.9S28.9,83.246,29.3,83.146z M27.8,76.346 c0.5-0.1,0.7,0.4,0.7,1c0,0.5-0.3,1.1-0.7,1.2c-0.4,0.1-0.8-0.3-0.8-0.9S27.4,76.446,27.8,76.346z M27.7,79.546 c0.8-0.2,1.2,0.6,1.2,1.6c0,0.9-0.5,1.9-1.2,2.1s-1.3-0.5-1.3-1.5S27,79.746,27.7,79.546z M26.2,84.246c0.5-0.1,0.7,0.4,0.7,1 c0,0.5-0.3,1.1-0.7,1.2c-0.4,0.1-0.8-0.3-0.8-0.9C25.4,84.946,25.8,84.446,26.2,84.246z M24.8,80.646c0.5-0.1,0.7,0.4,0.7,1 c0,0.5-0.3,1.1-0.7,1.2c-0.4,0.2-0.8-0.2-0.8-0.9S24.4,80.846,24.8,80.646z M61.7,43.346v18.4h-3.6v24.8H52v-24.8h-1.7v24.8h-6.1 v-24.8h-3.6v-18.4c0-5.9,4.8-10.6,10.6-10.6C57,32.746,61.7,37.446,61.7,43.346z M64.9,81.546l13.7,3v-15.3l-13.7-2.2V81.546z M72.7,78.646l1,0.2v2.5l-1-0.3V78.646z M71.1,70.246c0.5,0,0.8,0.5,0.8,1.2c0,0.6-0.4,1.2-0.8,1.2c-0.5,0-0.8-0.5-0.8-1.2 C70.3,70.846,70.7,70.246,71.1,70.246z M69.7,75.146L69.7,75.146c0-1.7,0.7-2.2,1.4-2.1c1.2,0.2,1.4,1.3,1.4,2.4v2.6l-0.5-0.1v3.9 l-0.8-0.2v-3.9l-0.2-0.1v3.9l-0.8-0.2v-3.9l-0.5-0.1V75.146z M33.1,14.046l-9.8-5.6v12.3l9.8,2.7V14.046z M27.4,20.046l-1.6-3.1 l0.5-0.3l1.1,2.2l2.4-4.3l0.5,0.3L27.4,20.046z M83.8,49.046l-5.5,0.3c-0.1,0-0.1,0.1-0.1,0.1v11.6c0,0.1,0.1,0.1,0.1,0.1l0,0 l5.4,0.6c0.1,0,0.1-0.1,0.1-0.1v-12.5C83.9,49.146,83.9,49.046,83.8,49.046z M81,60.746c-0.2,0-0.3-0.2-0.3-0.4s0.1-0.3,0.3-0.3 c0.2,0,0.3,0.2,0.3,0.4C81.3,60.646,81.2,60.746,81,60.746z M83.4,59.346c0,0.2-0.1,0.3-0.3,0.3l-4-0.3c-0.2,0-0.3-0.1-0.3-0.3v-8.8 c0-0.2,0.1-0.3,0.3-0.3l4-0.2c0.2,0,0.3,0.1,0.3,0.3V59.346z M69.3,45.446v18.8l25.7,3.8v-24.3L69.3,45.446z M84.5,61.646 c0,0.4-0.3,0.7-0.7,0.7l0,0l-5.5-0.6c-0.4,0-0.7-0.3-0.7-0.7v-11.6c0-0.4,0.3-0.7,0.7-0.7l5.5-0.3c0.4,0,0.7,0.3,0.7,0.7V61.646z M30.6,50.646l4.1-0.4v-9.6l-7.2-0.5v10.7c0,1.4,0.7,2.6,1.5,2.6h0.3c0.7-0.2,1.3-1.3,1.3-2.6L30.6,50.646L30.6,50.646z M33.8,47.646l-5.6,0.3v-0.6l5.6-0.3V47.646z M33.8,46.146l-5.6,0.2v-0.6l5.6-0.2V46.146z M28.2,41.146l5.6,0.2v0.6l-5.6-0.3 L28.2,41.146L28.2,41.146z M28.2,42.646l5.6,0.1v0.6l-5.6-0.1L28.2,42.646z M33.8,44.246v0.6l-5.6,0.1v-0.6L33.8,44.246z M28.2,49.646v-0.6l3.6-0.4v0.6L28.2,49.646z M31.2,51.146l6.4-0.6c-0.1,1.2-0.6,2-1.4,2.1l-5.7,0.7 C30.8,52.846,31.1,52.046,31.2,51.146z M21.1,32.546v28.7l18.8-3.5v-14.4c0-3.1,1.2-5.9,3.3-7.9L21.1,32.546z M38.1,50.246 c0,1.6-0.8,2.8-1.9,3l-6.8,0.8c-0.1,0-0.2,0-0.4,0c-1.2,0-2.1-1.4-2.1-3.2v-11.3l8.4,0.5v10.1l2.9-0.3v0.4H38.1z M69.5,27.946 l1.3-0.4v1.8l-1.3,0.3V27.946z M72.7,27.046l1.4-0.3v5.5l-1.4,0.3V27.046z M68.2,26.446v7l3.9-0.8v-6l2.6-0.6v6.1l1-0.2v-7.5 l1.1-0.3l-4.8-3.6l-4.8,6.1L68.2,26.446z M68.9,27.546l2.5-0.7v3.1l-2.5,0.5V27.546z M87.6,8.446l-30.8,11.5 c0.8,1.2,1.3,2.6,1.3,4.1c0,2.9-1.8,5.4-4.4,6.5v1.9c4.4,1.1,7.8,4.8,8.4,9.3l25.5-2.7V8.446z M76.3,24.946v7.5l-8.7,1.7v-7 l-1.8,0.4l6.2-7.8l6.2,4.7L76.3,24.946z M5,52.646l10-1v-10.6l-10-0.7V52.646z M8.1,44.246l0.4-0.4l1.7,2l1.6-2l0.5,0.4l-1.6,2 l1.8,2l-0.4,0.4l-1.7-2l-1.9,2.4l-0.5-0.4l1.8-2.3L8.1,44.246z" />
      </svg>
    )
  },
  {
    title: "Chuyển đổi",
    text: "Gia tăng tỉ lệ chuyển đổi bằng những thông điệp khuyến khích ra quyết định đúng lúc dựa theo hành động của khách hàng.",
    items: [
      "Kịch bản sales tự động",
      "Form liên hệ",
      "Hiển thị banner, popup",
      "Tính điểm khách hàng"
    ],
    icon: (
      <svg viewBox="0 0 100 100" className="automation-icon">
        <path d="M19.91,50.14l10.87-6.88C22.64,25.41,44.3,18.74,44.3,18.74,36,23,41.64,32.35,43.59,35.16l9.87-6.24L43,48.32Z"></path>
        <path d="M69.43,29.09c-12-22.76-25.91-8.35-25.91-8.35,7.21-3.54,11.76,4.71,12.52,9.52Z"></path>
        <path d="M69.43,29.09l.52,12.86c19.53,1.88,14.47,24,14.47,24C84.88,56.6,74,56.8,70.55,57.08L71,68.75,59.46,48.84Z"></path>
        <path d="M62.88,82.49c25.72,1,20.19-18.26,20.19-18.26-.55,8-10.15,8.16-14.69,6.41Z"></path>
        <path d="M62.88,82.48l-11.4-6c-11.38,16-28,.56-28,.56,7.83,5.05,13.12-4.5,14.57-7.59L27.72,64.05l23-1.11Z"></path>
        <path d="M19.89,50.13c-13.7,21.79,5.73,26.61,5.73,26.61C19,72.26,24,63.86,27.8,60.79Z"></path>
      </svg>
    )
  },
  {
    title: "Kênh giao tiếp",
    text: "Giao tiếp với khách hàng một cách hiệu quả và kịp thời ngay khi họ cần tới sự trợ giúp.",
    items: ["Facebook Messenger", "Livechat", "Zalo", "Cuộc gọi video"],
    icon: (
      <svg viewBox="0 0 100 100" className="automation-icon">
        <path d="M83.812,10.115H41.08c-6.721,0-12.189,5.468-12.189,12.189v0.271H16.188C9.468,22.575,4,28.043,4,34.765v25.043 c0,6.72,5.467,12.188,12.188,12.188h3.673v15.89c0,0.809,0.487,1.538,1.235,1.848c0.247,0.103,0.507,0.152,0.765,0.152 c0.521,0,1.032-0.203,1.415-0.586l17.304-17.304h18.344c3.429,0,6.676-1.497,8.968-3.992l8.837,8.836 c0.382,0.383,0.894,0.586,1.415,0.586c0.258,0,0.518-0.05,0.765-0.152c0.747-0.31,1.234-1.039,1.234-1.848v-15.89h3.671 c6.72,0,12.187-5.467,12.187-12.187V22.305C96,15.583,90.532,10.115,83.812,10.115z M58.923,67.995H39.75 c-0.53,0-1.039,0.211-1.414,0.586L23.861,83.056V69.995c0-1.104-0.896-2-2-2h-5.673C11.673,67.995,8,64.322,8,59.808V34.765 c0-4.516,3.673-8.189,8.188-8.189h12.703v20.772c0,6.72,5.468,12.187,12.189,12.187h18.341l5.643,5.643 C63.518,66.936,61.283,67.995,58.923,67.995z M92,47.348c0,4.514-3.673,8.187-8.187,8.187h-5.671c-1.104,0-2,0.896-2,2v13.062 l-7.076-7.075c-0.012-0.011-0.022-0.023-0.034-0.034l-7.367-7.367c-0.375-0.375-0.884-0.586-1.414-0.586H41.08 c-4.516,0-8.189-3.673-8.189-8.187V22.305c0-4.516,3.674-8.189,8.189-8.189h42.732c4.514,0,8.187,3.674,8.187,8.189V47.348z"></path>
      </svg>
    )
  }
];

const clientLogos = [
  `${asset}/s450x350/5f714867c025a83c10a07869/5-20220803102119.png`,
  `${asset}/s450x350/5f714867c025a83c10a07869/6-20220803102119.png`,
  `${asset}/s500x400/5f714867c025a83c10a07869/4-20220803102119.png`,
  `${asset}/s450x400/5f714867c025a83c10a07869/3-1-20220803102119.png`,
  `${asset}/s450x350/5f714867c025a83c10a07869/8-20220803102119.png`,
  `${asset}/s450x350/5f714867c025a83c10a07869/10-20220803102119.png`,
  `${asset}/s550x450/5f714867c025a83c10a07869/logo-moi-cua-viettel-20220214085537-20220803102119.jpg`,
  `${asset}/s500x400/5f714867c025a83c10a07869/share-social-20220214085821-20220803102119.jpg`
];

const valueServices = [
  {
    title: "Dịch vụ tin nhắn quảng cáo mục tiêu",
    image: `${asset}/s750x600/5f714867c025a83c10a07869/sms-brandname-476x331-20220921081658-tptjs.jpg`
  },
  {
    title: "Dịch vụ tin nhắn thương hiệu",
    image: `${asset}/s700x600/5f714867c025a83c10a07869/2prd_-800x600-1-20220921081658-un30w.png`
  },
  {
    title: "Dịch vụ setup gian hàng trên sàn thương mại điện tử Viettelmall",
    image: `${asset}/s750x600/5f714867c025a83c10a07869/screenshot-2022-07-31-230419-20220731160439.png`
  },
  {
    title: "Dịch vụ quảng cáo trên nền tảng super app Myviettel",
    image: `${asset}/s1000x750/5f714867c025a83c10a07869/549x335_viettel_20_10-20220921082258-myske.jpg`
  }
];

const projectRows = [
  ["1", "VOV.VN", "Đài tiếng nói Việt Nam", "Xây dựng hệ thống tòa soạn bảo điện tử vov.vn", "PHP, Drupal, Postgres, Elasticsearch, Openshift"],
  ["2", "Ứng dụng đọc báo vov", "Đài tiếng nói Việt Nam", "Ứng dụng đọc báo vov", "Kotlin, Swift"],
  ["3", "Viettel.vn", "Viettel", "Cổng thông tin điện tử viettel.vn", "PHP, Laravel, Redis, VueJS"],
  ["4", "Phần mềm quản lý tài sản", "Đài tiếng nói Việt Nam", "Phần mềm quản lý tài sản", "PHP, Laravel, Redis, VueJS"],
  ["5", "Pay metfone", "Metfone", "Cổng thanh toán metfone", "Java, Spring MVC"],
  ["6", "mBCCS", "Metfone", "Mobile app", "Android, Object C"],
  ["7", "mDealer", "Metfone", "Mobile app", "Android, Swift"],
  ["8", "myMetfone", "Metfone", "Mobile app, CMS", "Android, Swift, PHP, Angularjs"],
  ["9", "mStation", "Metfone", "Mobile app", "Android, Swift"],
  ["10", "MiBitel", "Metfone", "Mobile app", "Swift"]
];

function Logo({ footer = false }) {
  return (
    <img
      className={footer ? "logo logo-footer" : "logo"}
      src="/logos/genetek.png"
      alt="Genetek"
      style={{
        display: 'block',
        maxWidth: '100%',
        width: 'auto',
        height: footer ? '76px' : '70px',
        maxHeight: footer ? '76px' : '70px',
        objectFit: 'contain'
      }}
    />
  );
}

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function handlePrevProject() {
    setActiveProjectIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  }

  function handleNextProject() {
    setActiveProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  }

  function slideLeft() {
    const container = document.querySelector('.project-pills-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  function slideRight() {
    const container = document.querySelector('.project-pills-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  function scrollCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    if (track) {
      const scrollAmount = 320;
      track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Chính">
          {navLinks.slice(0, 3).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <Logo />
          {navLinks.slice(3).map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="cloud cloud-a" />
        <div className="cloud cloud-b" />
        <div className="cloud cloud-c" />
        <div className="hero-copy">
          <h1>Genetek là một công ty công nghệ</h1>
          <p>
            Chúng tôi tập trung vào các dịch vụ chuyển đổi số cho doanh nghiệp; cung cấp các giải pháp phần mềm trong
            marketing và chăm sóc khách hàng giúp cho các Doanh nghiệp tối ưu hiệu quả trong kinh doanh.
          </p>
          <div className="hero-actions">
            <a className="btn btn-filled" href="tel:0969595475">
              LIÊN HỆ NGAY
            </a>
            <a className="btn btn-outline" href="#about">
              TÌM HIỂU THÊM
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="tech-icon chat" />
          <span className="tech-icon code">&lt;/&gt;</span>
          <span className="tech-icon gear">◎</span>
          <img src="/hero-home-illustration.png" alt="" />
        </div>
      </section>

      <section id="about" className="about section-pad">
        <div className="blob blob-left" />
        <div className="container about-grid">
          <div className="about-copy">
            <p className="eyebrow">Về chúng tôi</p>
            <h2>Công ty cổ phần Genetek</h2>
            <p>Genetek là một công ty công nghệ, chuyên cung cấp các dịch vụ phần mềm cho Doanh nghiệp</p>
            <p>
              Genetek chúng tôi tập trung vào các dịch vụ chuyển đổi số cho doanh nghiệp; cung cấp các giải pháp phần
              mềm trong marketing và chăm sóc khách hàng giúp cho các Doanh nghiệp tối ưu hiệu quả trong kinh doanh.
            </p>
            <a className="btn btn-filled" href="#services">
              TÌM HIỂU THÊM
            </a>
          </div>
          <div className="intro-cards">
            {introCards.map((card, index) => (
              <article className={`intro-card intro-${index}`} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <img src={card.image} alt="" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact section-pad">
        <div className="container impact-grid">
          <img
            className="impact-image"
            src={`${asset}/s1100x750/5f714867c025a83c10a07869/giu16231210003871-20220726043415.jpg`}
            alt=""
          />
          <div className="impact-copy">
            <h2>Hiệu quả mang lại</h2>
            <p>
              Chúng tôi tin tưởng rằng, nếu đưa công nghệ vào việc Marketing và chăm sóc khách hàng thì hiệu quả kinh
              doanh sẽ tăng lên gấp nhiều lần.
            </p>
            <p>
              Chúng tôi cam kết về tính hiệu quả của các sản phẩm và dịch vụ mà mình khi cung cấp sẽ giúp cho khách
              hàng gia tăng giá trị và thành công hơn khi hợp tác với chúng tôi.
            </p>
            <a className="btn btn-filled" href="#contact">
              LIÊN HỆ NGAY
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services section-pad">
        <div className="container">
          <div className="section-heading centered">
            <h2>Genetek cung cấp dịch vụ</h2>
            <p>
              Với hơn 9 năm hoạt động trong lĩnh vực Công Nghệ Thông Tin, Genetek đã và đang cung cấp các giải pháp
              phần mềm & tư vấn, triển khai chuyển đổi số cho hàng loạt doanh nghiệp trong và ngoài nước. Với các dịch
              vụ tiêu biểu như:
            </p>
          </div>
          <div className="service-grid">
            {serviceGroups.map((group) => (
              <article className="service-block" key={group.number}>
                <span>{group.number}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <img
              className="service-illustration"
              src={`${asset}/s950x650/5f714867c025a83c10a07869/rbg/trai-nghiem-khach-hang-20220726043054.png`}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="project-strip">
        <div className="container">
          <div className="featured-carousel">
            <div className="carousel-container">
              <div className="carousel-track">
                <article className="title-card">
                  <h3>Các dự án tiêu biểu</h3>
                </article>
                {featuredProjects.map((project) => (
                  <article key={project.title}>
                    <img src={project.image} alt="" />
                    <h3>{project.title}</h3>
                  </article>
                ))}
              </div>
              <button className="carousel-prev" onClick={() => scrollCarousel(-1)}>‹</button>
              <button className="carousel-next" onClick={() => scrollCarousel(1)}>›</button>
            </div>
          </div>
        </div>
      </section>

      <section className="automation section-pad">
        <div className="container">
          <div className="automation-intro">
            <p>
              Đội ngũ của Genetek sau 3 năm nghiên cứu phát triển đã sáng tạo ra một nền tảng tự động hóa trong
              Marketing và chăm sóc khách hàng có tên là Oneclicktosell.com - hướng đến những nhà bán hàng online, các
              doanh nghiệp SMEs và các doanh nghiệp lớn, nền tảng này giúp họ xây dựng hệ thống kinh doanh online hiệu
              quả, tối ưu chi phí Marketing và Chăm sóc khách hàng qua đó gia doanh thu, lợi nhuận và làm dầy tệp khách
              hàng trung thành
            </p>
          </div>
          <h2>Dịch vụ chăm sóc khách hàng</h2>
          <div className="automation-grid">
            {automationFeatures.map((feature) => (
              <article key={feature.title}>
                {feature.icon && <div className="automation-icon-wrapper">{feature.icon}</div>}
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <ul>
                  {feature.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="customers" className="customers section-pad compact">
        <div className="container">
          <h2>Khách hàng tiêu biểu</h2>
          <div className="logo-grid">
            {clientLogos.map((logo, index) => (
              <img src={logo} alt="" key={`${logo}-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="online section-pad">
        <div className="container online-grid">
          <img
            src={`${asset}/s750x700/5f714867c025a83c10a07869/fb-ads-1-20220724124136.png`}
            alt=""
          />
          <div>
            <h2>Xây dựng hệ thống kinh doanh online tự động</h2>
            <p>
              Với kinh nghiệm phát triển hệ thống nền tảng tự động hóa Mareketing và chăm sóc khách hàng, đội ngũ của
              Genetek nắm vững các quy trình setup hệ thống kinh doanh online, các chiến dịch, kịch bản để thu hút
              khách hàng tiềm năng và chăm sóc tốt tệp khách hàng trung thành.
            </p>
            <p>
              Từ đó Genetek cung cấp tới các doanh nghiệp đang chuyển đổi mô hình từ kinh doanh truyền thống lên kinh
              doanh online dịch vụ setup hệ thống kinh doanh tự động hóa.
            </p>
          </div>
        </div>
      </section>

      <section className="value-services section-pad">
        <div className="container">
          <div className="section-heading centered">
            <h2>Các dịch vụ giá trị gia tăng khác</h2>
            <p>
              Genetek hiện là đối tác chiến lược của tập đoàn viễn thông quân đội Viettel, chúng tôi đang khai thác
              các dịch vụ giá trị gia tăng của Viettel cung cấp cho các Doanh nghiệp như:
            </p>
          </div>
          <div className="value-grid">
            {valueServices.map((service) => (
              <article key={service.title}>
                <img src={service.image} alt="" />
                <h3>{service.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="all-projects section-pad compact">
        <div className="container">
          <h2>Một số dự án tiêu biểu</h2>
          <div className="project-carousel-wrapper">
            <button className="carousel-arrow prev" onClick={slideLeft} aria-label="Slide left">
              <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>
            </button>
            
            <div className="project-pills-container">
              <div className="project-pills">
                {projectsData.map((project, index) => (
                  <a 
                    href="#project-detail" 
                    key={project.title}
                    className={activeProjectIndex === index ? "active" : ""}
                    onClick={() => setActiveProjectIndex(index)}
                  >
                    {project.title}
                    <span className="sub-detail">Xem chi tiết</span>
                  </a>
                ))}
              </div>
            </div>

            <button className="carousel-arrow next" onClick={slideRight} aria-label="Slide right">
              <svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section id="project-detail" className="project-detail">
        {/* Background SVGs for Image 2 design style */}
        <svg className="detail-deco-left" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="300" height="400" fill="url(#dot-grid)" opacity="0.3"/>
          <g opacity="0.2" stroke="#009ab1" strokeWidth="1.5">
            <circle cx="100" cy="200" r="80" />
            <ellipse cx="100" cy="200" rx="80" ry="30" />
            <ellipse cx="100" cy="200" rx="30" ry="80" />
            <line x1="20" y1="200" x2="180" y2="200" />
            <line x1="100" y1="120" x2="100" y2="280" />
          </g>
          <g opacity="0.25" stroke="#009ab1" strokeWidth="1.5" fill="none">
            <path d="M40 80 L60 70 L80 80 L80 100 L60 110 L40 100 Z" />
            <path d="M40 80 L60 90 L80 80" />
            <path d="M60 90 L60 110" />
          </g>
          <path d="M100 280 L100 330 L160 330" stroke="#009ab1" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25"/>
          <circle cx="160" cy="330" r="3" fill="#009ab1" opacity="0.5"/>
          <path d="M180 200 L240 200 L260 220" stroke="#009ab1" strokeWidth="1.5" opacity="0.25"/>
          <circle cx="260" cy="220" r="3" fill="#009ab1" opacity="0.5"/>
        </svg>

        <svg className="detail-deco-right" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="100" width="200" height="400" fill="url(#dot-grid)" opacity="0.3"/>
          <g opacity="0.2" stroke="#e30613" strokeWidth="1.5" fill="none">
            <path d="M200 120 H250 V220 H170 V140 Z" />
            <path d="M170 140 H200 V120" />
            <path d="M210 185 L220 165 L230 185 Z" />
            <line x1="220" y1="172" x2="220" y2="178" strokeWidth="2" />
            <circle cx="220" cy="182" r="1.5" fill="#e30613" />
          </g>
          <g opacity="0.18" stroke="#e30613" strokeWidth="1.5" fill="none">
            <circle cx="120" cy="260" r="30" />
            <circle cx="120" cy="260" r="10" />
            <path d="M120 225 L120 230 M120 290 L120 285 M85 260 L90 260 M155 260 L150 260 M95 235 L99 239 M145 285 L141 281 M95 285 L99 281 M145 235 L141 239" />
          </g>
          <path d="M170 180 L120 180 L100 160" stroke="#e30613" strokeWidth="1.5" opacity="0.25"/>
          <circle cx="100" cy="160" r="3" fill="#e30613" opacity="0.5"/>
          <path d="M120 290 L120 340 L60 340" stroke="#e30613" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.25"/>
          <circle cx="60" cy="340" r="3" fill="#e30613" opacity="0.5"/>
        </svg>

        <div className="container detail-card">
          <div className="detail-image full-image-mode">
            <img src={projectsData[activeProjectIndex].logo} alt={projectsData[activeProjectIndex].title} />
          </div>
          <div className="detail-content">
            <h2>{projectsData[activeProjectIndex].title}</h2>
            <p>{projectsData[activeProjectIndex].description}</p>
            <dl>
              <div>
                <dt>Partner</dt>
                <dd>{projectsData[activeProjectIndex].partner}</dd>
              </div>
              <div>
                <dt>Technolotgy</dt>
                <dd>{projectsData[activeProjectIndex].technology}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="latest section-pad compact">
        <div className="container">
          <h2>Dự án mới nhất</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>DỰ ÁN</th>
                  <th>KHÁCH HÀNG</th>
                  <th>MÔ TẢ</th>
                  <th>CÔNG NGHỆ</th>
                </tr>
              </thead>
              <tbody>
                {projectRows.map((row, rowIndex) => (
                  <tr key={row.join("-")}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="partners section-pad compact">
        <div className="container">
          <h2>Khách hàng - Đối tác</h2>
          <p>
            GENETEK là đối tác chiến lược của 10 trong số top 100 doanh nghiệp Viễn thông lớn nhất toàn cầu: Viettel,
            Halotel, Unitel, Metfone, Natcom. Bitel, Telemor, Mytel, Nexttel, Lumitel.
          </p>
          <p>Ngoài ra chúng tôi cũng là đối tác của các tập đoàn lớn: Range Rover Viet Nam, Vin group, lazada..</p>
          <div className="logo-grid partner-grid">
            {clientLogos.slice(0, 5).map((logo, index) => (
              <img src={logo} alt="" key={`${logo}-partner-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <Logo footer />
            <ul className="contact-list">
              <li>Điện thoại: (+84) 969.595. 475</li>
              <li>Email: info@genetek.vn</li>
              <li>Địa chỉ: Số 3 Thọ Tháp, Cầu Giấy, Hà Nội</li>
              <li>Website: genetek.vn</li>
            </ul>
          </div>
          <div className="footer-title">
            <h2>CÔNG TY CỔ PHẦN GENETEK</h2>
            <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="https://zalo.me/0969595475" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M12 2C6.48 2 2 5.58 2 10c0 1.93.83 3.68 2.22 5.03L3.18 19.5c-.15.35.2.7.53.53l4.67-2.34c1.15.2 2.37.31 3.62.31 5.52 0 10-3.58 10-8s-4.48-8-10-8zm-1.8 11.8H7.8v-.9l2.1-2.9H7.8v-1.1h3.9v.9l-2.1 2.9h2.5v1.2z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                <svg viewBox="0 0 24 24" className="social-icon">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.448 5.484 3.717 7.058a.936.936 0 0 1 .309.84l-.192 1.956c-.02.213.19.387.387.29l2.25-1.103a.925.925 0 0 1 .665-.047c.928.243 1.905.378 2.864.378 5.523 0 10-4.146 10-9.243S17.523 2 12 2zm1.096 11.968l-2.122-2.262-4.12 2.262 4.526-4.8 2.176 2.262 4.066-2.262-4.526 4.8z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="facebook-widget">
            <div className="facebook-header">
              <div className="fb-cover-banner">
                <div className="fb-banner-logo">GENETEK</div>
                <div className="fb-banner-subtitle">Tự động hóa bán hàng & chăm sóc khách hàng</div>
              </div>
              <div className="fb-overlay" />
              <div className="fb-profile-row">
                <div className="fb-avatar" style={{ background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', borderRadius: '50%', overflow: 'hidden' }}>
                  <img src="/logos/genetek.png" alt="Genetek Avatar" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="fb-page-info">
                  <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" className="fb-page-name">
                    genetek.vn
                  </a>
                  <div className="fb-followers">77 người theo dõi</div>
                </div>
              </div>
              <div className="fb-actions">
                <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" className="fb-btn">
                  <svg viewBox="0 0 24 24" className="fb-btn-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Theo dõi Trang
                </a>
                <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" className="fb-btn">
                  <svg viewBox="0 0 24 24" className="fb-btn-icon">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.8 2.04.8 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.8l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                  Chia sẻ
                </a>
              </div>
            </div>
            <div className="facebook-body">
              <a href="https://www.facebook.com/everflow.vn" target="_blank" rel="noopener noreferrer" className="fb-post-banner">
                <div className="fb-post-text">GENETEK LÀ GÌ ?</div>
                <div className="fb-post-subtext">Giải pháp kiến tạo hệ thống kinh doanh online đột phá</div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="quick-contact" aria-label="Liên hệ nhanh">
        <a href="https://zalo.me/0969595475" aria-label="Zalo">
          <img src={`${asset}/ladiui/icons/social/zalo.svg`} alt="" />
        </a>
        <a href="tel:0969595475" aria-label="Gọi điện">
          <img src={`${asset}/ladiui/icons/social/phone-call.svg`} alt="" />
        </a>
        <a href="https://www.facebook.com/everflow.vn" aria-label="Messenger">
          <img src={`${asset}/ladiui/icons/social/messenger.svg`} alt="" />
        </a>
        <a href="https://www.facebook.com/everflow.vn" aria-label="Facebook">
          <img src={`${asset}/ladiui/icons/social/facebook.svg`} alt="" />
        </a>
      </div>
      <a className="to-top" href="#home" aria-label="Lên đầu trang" />
    </main>
  );
}
