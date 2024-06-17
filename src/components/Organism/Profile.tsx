import Image from 'next/image';
import Text from '@/components/Atom/Text';

interface Props {
  name: string;
  address: string;
  profileImgUrl?: string;
}

export default function Profile({ name, address, profileImgUrl = '' }: Props) {
  return (
    <div className="mb-3 flex w-full gap-3 rounded-md bg-white px-4 py-3">
      <Image
        src={profileImgUrl}
        width={50}
        height={50}
        alt="Main photo of restaurant"
      />
      <div className="flex flex-col justify-center">
        <Text size="lg">{name}</Text>
        <Text>{address}</Text>
      </div>
    </div>
  );
}
