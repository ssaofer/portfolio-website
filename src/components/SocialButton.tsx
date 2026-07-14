interface SocialButtonProps {
  name: string;
  url: string;
  handle: string;
}

export default function SocialButton({ name, url, handle }: SocialButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 border border-coffee/20 rounded-vintage text-sm text-coffee hover:bg-rust hover:text-paper hover:border-rust transition-all duration-300"
    >
      <span className="font-medium">{name}</span>
      <span className="text-xs text-coffee/50 font-mono">{handle}</span>
    </a>
  );
}
