import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} SHAHED. DEV | ALL RIGHTS RESERVED
        </p>
        
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-500">
          <li>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">
              Github
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase tracking-wider">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
