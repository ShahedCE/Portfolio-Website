import Link from "next/link";
import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/ShahedCE", label: "Github", icon: FaGithub },
  { href: "https://www.linkedin.com/in/shahedjaman/", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://www.facebook.com/shahed.janan", label: "Facebook", icon: FaFacebook },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 dark:border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-mono text-gray-600 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} SHAHED. DEV. Built with precision.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="#hero"
          aria-label="Back to top"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
        >
          <ChevronUp className="w-5 h-5" />
        </Link>
      </div>
    </footer>
  );
}
