import Text from '@/components/Atom/Text';

interface Props {
  text: string;
  color?: string;
}

export default function Alert({ text, color = 'blue' }: Props) {
  const colorInfo: { [key: string]: string } = {
    blue: 'border-blue-300 bg-blue-50 text-blue-800',
    red: 'border-red-300 bg-red-50 text-red-800',
    green: 'border-green-300 bg-green-50 text-green-800',
    yellow: 'border-yellow-300 bg-yellow-50 text-yellow-800',
    gray: 'border-gray-300 bg-gray-50 text-gray-800',
  };

  return (
    <div
      className={`${colorInfo[color]} animate-fadeIn mb-4 flex items-center rounded-lg border p-2`}
      role="alert"
    >
      <Text size="xs" weight={500}>
        {text}
      </Text>
    </div>
  );
}
