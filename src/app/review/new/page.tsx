'use client';

import { useState } from 'react';
import Image from 'next/image';
import Rating from '@/components/Molecule/Rating';
import FiveStar from '@/components/Atom/FiveStar';
import Button from '@/components/Atom/Button';

const tasteList = [
  { text: '매운맛', target: 'spicy' },
  { text: '고추장맛', target: 'gochujang' },
  { text: '간장맛', target: 'soySauce' },
  { text: '후추맛', target: 'pepper' },
  { text: '단맛', target: 'sweet' },
];

export default function ReviewNew() {
  const [riceCake, setRiceCake] = useState('rice');
  const [starRating, setStarRating] = useState({
    spicy: 0,
    gochujang: 0,
    soySauce: 0,
    pepper: 0,
    sweet: 0,
  });
  const [totalScore, setTotalScore] = useState(0);

  const handleChangeRiceCake = (value: 'rice' | 'wheat') => {
    setRiceCake(value);
  };

  const handleChangeStarRating = (taste: string, value: number) => {
    setStarRating({ ...starRating, [taste]: value });
  };

  const handleChangeTotalScore = (value: number) => {
    setTotalScore(value);
  };

  const handleClickCancelButton = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();
    console.log('go back');
  };

  const handleClickRegister = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();
    console.log(riceCake);
    console.log(starRating);
    console.log(totalScore);
  };

  return (
    <main>
      {/* 가게 정보 */}
      <div className="mb-3 flex w-full gap-3 rounded-md bg-white px-4 py-3">
        <Image
          src="/images/example.jpg"
          width={50}
          height={50}
          alt="Main photo of restaurant"
        />
        <div className="font-notoSansKr">
          <div className="text-lg">여고시절 카레떡볶이</div>
          <div>강원 강릉시 신대학길 22-6</div>
        </div>
      </div>
      {/* 떡 종류 */}
      <div className="mb-3 flex w-full flex-col gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
        <div className="text-lg font-normal">떡 종류를 선택해주세요!</div>
        <div className="flex gap-2">
          <div
            className={`relative grid select-none items-center whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs uppercase ${
              riceCake === 'rice' ? 'border-green-700' : 'border-slate-300'
            }`}
            onClick={() => handleChangeRiceCake('rice')}
          >
            <span
              className={
                riceCake === 'rice' ? 'font-semibold text-green-700' : ''
              }
            >
              쌀떡
            </span>
          </div>
          <div
            className={`relative grid select-none items-center whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs uppercase ${
              riceCake === 'wheat' ? 'border-green-700' : 'border-slate-300'
            }`}
            onClick={() => handleChangeRiceCake('wheat')}
          >
            <span
              className={
                riceCake === 'wheat' ? 'font-semibold text-green-700' : ''
              }
            >
              밀떡
            </span>
          </div>
        </div>
      </div>
      {/* 맛 */}
      <div className="mb-3 flex w-full flex-col gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
        <div className="text-lg font-normal">맛을 평가해주세요!</div>
        <div className="flex flex-col gap-2">
          {tasteList.map((taste) => (
            <Rating
              key={taste.target}
              text={taste.text}
              target={taste.target}
              onChangeStarRating={handleChangeStarRating}
            />
          ))}
        </div>
        <div className="mt-3 text-xs">
          <p>1. 해당 맛이 강하게 느껴질수록 별을 채워주세요.</p>
          <p>2. 매운맛은 3개가 신라면 정도입니다.</p>
        </div>
      </div>
      {/* 총점 */}
      <div className="mb-3 flex w-full flex-col items-center gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xl">당신의 총점은?</p>
          <p className="text-xs text-gray-400">
            맛을 조합한 당신의 의견을 반영해주세요 :)
          </p>
        </div>
        <FiveStar width={30} height={30} callback={handleChangeTotalScore} />
      </div>
      {/* 제출 */}
      <div className="flex items-center justify-center gap-3 py-3">
        <Button variant="secondary" onClick={handleClickCancelButton}>
          취소
        </Button>
        <Button onClick={handleClickRegister}>등록</Button>
      </div>
    </main>
  );
}
