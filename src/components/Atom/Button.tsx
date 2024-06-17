interface Props {
  children: string;
  size?: 'extra_small' | 'small' | 'base' | 'large' | 'extra_large';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Button({
  children,
  size = 'base',
  variant = 'primary',
  disabled = false,
  onClick,
}: Props) {
  const sizeInfo = {
    extra_small: 'px-3 py-2 text-xs font-medium',
    small: 'px-3 py-2 text-sm font-medium',
    base: 'px-5 py-2.5 text-sm font-medium',
    large: 'px-5 py-3 text-base font-medium',
    extra_large: 'px-6 py-3.5 text-base font-medium',
  };

  const variantInfo = {
    primary: disabled
      ? 'bg-gray-300 text-white'
      : 'bg-blue-700 text-white focus:ring-2',
    secondary: disabled
      ? 'bg-gray-300 text-white'
      : 'bg-white text-gray-900 border border-gray-300 focus:ring-2',
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${sizeInfo[size]} ${variantInfo[variant]} rounded-lg text-center font-notoSansKr`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
