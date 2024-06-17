interface Props {
  children: string;
  size?: string;
  weight?: number;
  fontFamily?: 'notoSansKr' | 'inter';
  style?: string;
}

export default function Text({
  children,
  size = 'base',
  weight = 400,
  fontFamily = 'notoSansKr',
  style = '',
}: Props) {
  const fontSizeInfo: { [key: string]: string } = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };

  const fontWeightInfo: { [key: number]: string } = {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
  };

  const fontFamilyInfo = {
    notoSansKr: 'font-notoSansKr',
    inter: 'font-inter',
  };

  return (
    <div
      className={`${fontSizeInfo[size]} ${fontWeightInfo[weight]} ${fontFamilyInfo[fontFamily]} ${style}`}
    >
      {children}
    </div>
  );
}
