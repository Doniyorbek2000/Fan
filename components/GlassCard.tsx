interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function GlassCard({ className, children, onClick }: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl ${className ?? ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
