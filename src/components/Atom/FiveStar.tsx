'use client';

import { useState } from 'react';
import StarIcon from './StarIcon';

interface Props {
  width?: number;
  height?: number;
  callback?: (value: number) => void;
}

export default function FiveStar({ width = 24, height = 24, callback }: Props) {
  const [stars, setStars] = useState(Array(5).fill(false));

  const handleSetStars = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    idx: number,
    value: boolean,
  ) => {
    event.preventDefault();

    const newStars = [...stars];
    newStars[idx] = !value;
    setStars(newStars);

    if (callback) {
      callback(newStars.filter(Boolean).length);
    }
  };

  return (
    <div className="flex items-center">
      {stars.map((star, idx) => (
        <button key={idx} onClick={(event) => handleSetStars(event, idx, star)}>
          <StarIcon
            width={width}
            height={height}
            color={star ? '#FCBB00' : '#DADCE0'}
          />
        </button>
      ))}
    </div>
  );
}
