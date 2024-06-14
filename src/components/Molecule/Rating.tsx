import FiveStar from '../Atom/FiveStar';

interface Props {
  text: string;
  target: string;
  onChangeStarRating: (taste: string, value: number) => void;
}

export default function Rating({ text, target, onChangeStarRating }: Props) {
  const handleSetStars = (value: number) => {
    onChangeStarRating(target, value);
  };

  return (
    <div className="flex items-center gap-1">
      <p className="w-16">{text}</p>
      <FiveStar callback={handleSetStars} />
    </div>
  );
}
