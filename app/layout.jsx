import "./globals.css";

export const metadata = {
  title: "CÔNG TY CỔ PHẦN EVERFLOW",
  description:
    "Everflow là một công ty công nghệ, chuyên cung cấp các dịch vụ phần mềm cho Doanh nghiệp.",
  keywords: ["Everflow", "Công ty cổ phần Everflow", "chuyển đổi số"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
