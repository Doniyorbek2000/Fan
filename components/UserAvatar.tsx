interface UserAvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
};

export default function UserAvatar({ name, imageUrl, size = 'md' }: UserAvatarProps) {
  const sizeClasses = sizeMap[size];
  const initial = name.charAt(0).toUpperCase();

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={name}
        className={`${sizeClasses} rounded-full object-cover`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${sizeClasses} rounded-full flex items-center justify-center font-bold text-on-primary primary-gradient shrink-0`}
    >
      {initial}
    </div>
  );
}
