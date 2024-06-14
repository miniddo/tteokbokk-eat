interface Props {
  children: string;
  size?: 'extra_small' | 'small' | 'base' | 'large' | 'extra_large';
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Button({
  children,
  size = 'base',
  variant = 'primary',
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
    primary:
      'bg-blue-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-300',
    secondary:
      'bg-slate-100 text-gray-900 focus:outline-none rounded-lg border border-gray-300 focus:z-10 focus:ring-4 focus:ring-gray-100',
  };

  return (
    <button
      type="button"
      className={`${sizeInfo[size]} ${variantInfo[variant]} rounded-lg text-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
