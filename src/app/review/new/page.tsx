'use client';

import { useState } from 'react';
import { TASTE_LIST } from '@/lib/constants';
import Rating from '@/components/Molecule/Rating';
import FiveStar from '@/components/Atom/FiveStar';
import Button from '@/components/Atom/Button';
import Profile from '@/components/Organism/Profile';
import ReviewForm from '@/components/Organism/ReviewForm';
import Chip from '@/components/Atom/Chip';

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
      <Profile
        name="여고시절 카레떡볶이"
        address="강원 강릉시 신대학길 22-6"
        profileImgUrl="/images/example.jpg"
      />
      {/* 떡 종류 */}
      <ReviewForm
        title={'떡 종류를 선택해주세요!'}
        content={
          <div className="flex gap-2">
            <Chip
              label="쌀떡"
              value="rice"
              selected={riceCake === 'rice'}
              onClick={() => handleChangeRiceCake('rice')}
            />
            <Chip
              label="밀떡"
              value="wheat"
              selected={riceCake === 'wheat'}
              onClick={() => handleChangeRiceCake('wheat')}
            />
          </div>
        }
      />
      {/* 맛 */}
      <ReviewForm
        title={'맛을 평가해주세요!'}
        content={
          <>
            <div className="flex flex-col gap-2">
              {TASTE_LIST.map((taste) => (
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
          </>
        }
      />
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
