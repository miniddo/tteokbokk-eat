import Star from '../../../public/icons/star.svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function StarIcon({
  width = 24,
  height = 24,
  color = '#FCBB00',
}: Props) {
  return <Star width={width} height={height} color={color} />;
}
