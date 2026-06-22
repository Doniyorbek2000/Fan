type BadgeStatus = 'success' | 'warning' | 'error' | 'info' | 'pending';

interface StatBadgeProps {
  status: BadgeStatus;
  label: string;
}

const statusStyles: Record<BadgeStatus, { bg: string; text: string; dot: string }> = {
  success: {
    bg: 'bg-green-500/15',
    text: 'text-green-400',
    dot: 'bg-green-400',
  },
  warning: {
    bg: 'bg-yellow-500/15',
    text: 'text-yellow-400',
    dot: 'bg-yellow-400',
  },
  error: {
    bg: 'bg-red-500/15',
    text: 'text-red-400',
    dot: 'bg-red-400',
  },
  info: {
    bg: 'bg-blue-500/15',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
  },
  pending: {
    bg: 'bg-purple-500/15',
    text: 'text-purple-400',
    dot: 'bg-purple-400',
  },
};

export default function StatBadge({ status, label }: StatBadgeProps) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {label}
    </span>
  );
}
