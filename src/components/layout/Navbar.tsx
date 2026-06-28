import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-background/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 text-xl font-bold tracking-tighter">
        <span className="text-foreground">SHAHED</span>
        <span className="text-primary">. DEV</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <li>
          <Link href="#about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#education" className="hover:text-foreground transition-colors">
            Education
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Link
          href="/resume.pdf"
          className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
