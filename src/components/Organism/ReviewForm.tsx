import Text from '@/components/Atom/Text';

interface Props {
  title: string;
  content: JSX.Element;
}

export default function ReviewForm({ title, content }: Props) {
  return (
    <div className="mb-3 flex w-full flex-col gap-3 rounded-md bg-white px-4 py-3 font-notoSansKr">
      <Text size="lg">{title}</Text>
      {content}
    </div>
  );
}
