import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex h-[52px] w-full items-center px-[16px] font-notoSansKr">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/logo.png" width={25} height={25} alt="" />
        <div className="text-[20px] font-medium">떡볶-잇</div>
      </Link>
    </div>
  );
}
