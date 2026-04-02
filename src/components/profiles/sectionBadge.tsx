type SectionBadgeProps = {
  children: React.ReactNode;
};

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
      {children}
    </span>
  );
}