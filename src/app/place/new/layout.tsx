import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장소를 등록해 주세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full w-full px-[16px]">{children}</div>;
}
