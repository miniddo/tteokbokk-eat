import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리뷰를 작성해 주세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-full px-[16px]">{children}</div>;
}
