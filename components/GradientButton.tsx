import Link from 'next/link';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
}

export default function GradientButton({
  children,
  onClick,
  disabled = false,
  className = '',
  href,
}: GradientButtonProps) {
  const baseClasses = `gradient-btn text-on-primary font-semibold rounded-xl px-6 py-3 transition-all active:scale-95 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}
