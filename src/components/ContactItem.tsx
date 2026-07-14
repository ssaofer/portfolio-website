import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 bg-blush/30">
        <Icon size={18} className="text-primary" />
      </div>
      <div>
        <p className="text-xs font-mono text-text-light uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-base text-text-main font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}
