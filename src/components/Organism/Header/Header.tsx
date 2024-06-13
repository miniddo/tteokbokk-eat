import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-[52px] px-[16px] items-center font-notoSansKr flex">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/logo.png" width={25} height={25} alt="" />
        <div className="text-[20px] font-medium">떡볶-잇</div>
      </Link>
    </div>
  );
}
