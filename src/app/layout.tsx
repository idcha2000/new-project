import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Studio | Your creative workspace",
  description: "아이디어를 코드로 만드는 개발 공간. UI Playground, 반응형 프리뷰, 프로젝트와 GitHub를 한곳에서 살펴보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
