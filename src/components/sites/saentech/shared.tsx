import { ArrowIcon, FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";
import { socialLinks } from "./links";

const socialIcons = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`st-social ${className}`}>
      {socialLinks.map((s) => {
        const Icon = socialIcons[s.icon];
        return (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

type CtaProps = {
  href: string;
  label: string;
  variant?: "navy" | "lime";
  small?: boolean;
  external?: boolean;
};

export function CircleCta({ href, label, variant = "lime", small, external }: CtaProps) {
  return (
    <a
      href={href}
      className={`st-cta st-cta--${variant}${small ? " st-cta--small" : ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{label}</span>
      <ArrowIcon />
    </a>
  );
}
