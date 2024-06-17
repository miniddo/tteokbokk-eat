import Text from './Text';

interface Props {
  label: string;
  value: string;
  selected?: boolean;
  onClick?: (value: string) => void;
}

export default function Chip({
  label,
  value,
  selected = false,
  onClick,
}: Props) {
  return (
    <div
      className={`relative grid select-none items-center whitespace-nowrap rounded-lg border px-3 py-1.5 uppercase ${
        selected ? 'border-green-700' : 'border-slate-300'
      }`}
      onClick={() => {
        if (onClick) onClick(value);
      }}
    >
      <Text
        size="xs"
        weight={selected ? 600 : 400}
        style={selected ? 'text-green-700' : ''}
      >
        {label}
      </Text>
    </div>
  );
}
