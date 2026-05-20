import "./globals.css";

export const metadata = {
  title: "CÔNG TY CỔ PHẦN GENETEK",
  description:
    "Genetek là một công ty công nghệ, chuyên cung cấp các dịch vụ phần mềm cho Doanh nghiệp.",
  keywords: ["Genetek", "Công ty cổ phần Genetek", "chuyển đổi số"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
