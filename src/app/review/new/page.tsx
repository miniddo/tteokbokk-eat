import Image from "next/image";

export default function ReviewNew() {
  return (
    <main>
      <div className="w-full bg-slate-100 rounded-md px-4 py-3 flex gap-3 mb-3">
        <Image
          src="/images/example.jpg"
          width={50}
          height={50}
          alt="Main photo of restaurant"
        />
        <div className="font-notoSansKr">
          <div>여고시절 카레떡볶이</div>
          <div>강원 강릉시 신대학길 22-6</div>
        </div>
      </div>
      <div className="w-full bg-slate-100 rounded-md px-4 py-3 flex flex-col gap-3 font-notoSansKr mb-3">
        <div>떡 종류를 선택해주세요!</div>
        <div className="flex gap-2">
          <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-slate-400 py-1.5 px-3 text-xs uppercase">
            <span className="">쌀떡</span>
          </div>
          <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-slate-400 py-1.5 px-3 text-xs uppercase">
            <span className="">밀떡</span>
          </div>
        </div>
      </div>
    </main>
  );
}
