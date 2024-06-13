import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import Header from '@/components/Organism/Header/Header';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-notoSansKr',
});

export const metadata: Metadata = {
  title: '떡볶잇',
  description: '원하는 대로 골라 먹는 떡볶이',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansKr.variable}`}>
        <Header />
        <section className="w-full h-[calc(100%-52px)]">{children}</section>
      </body>
    </html>
  );
}
