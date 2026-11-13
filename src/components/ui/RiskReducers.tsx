import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { CheckIcon } from "./icons";

const sizes = {
  /** Hero: 15px on desktop. */
  md: { list: "lg:gap-6", text: "text-[14px] lg:text-[15px]", icon: "size-4 lg:size-[18px]" },
  /** Final CTA: 14px everywhere. */
  sm: { list: "lg:gap-[22px]", text: "text-[14px]", icon: "size-4" },
} as const;

const tones = {
  /** On black sections. */
  dark: { text: "text-white/80", icon: "text-white" },
  /** On white sections. */
  light: { text: "text-ink/70", icon: "text-ink" },
} as const;

type RiskReducersProps = {
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  className?: string;
};

/** "AI-driven, Human-augmented · Your SOPs, not ours · 14-day pilot". Stacked on mobile, one row on desktop. */
export function RiskReducers({ size = "md", tone = "dark", className }: RiskReducersProps) {
  const s = sizes[size];
  const t = tones[tone];

  return (
    <ul className={cn("flex flex-col items-center gap-2.5 lg:flex-row", s.list, className)}>
      {site.riskReducers.map((item) => (
        <li key={item} className={cn("flex items-center gap-2", s.text, t.text)}>
          <CheckIcon className={cn(s.icon, t.icon)} />
          {item}
        </li>
      ))}
    </ul>
  );
}
