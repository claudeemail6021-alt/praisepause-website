import { Sparkles, Heart } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features',     href: '#features' },
    { label: 'Free vs Premium', href: '#features' },
    { label: 'Download',     href: '#download' },
  ],
  Community: [
    { label: 'Testimonials',     href: '#testimonials' },
    { label: 'Share a Moment',   href: '#download' },
    { label: 'Refer a Friend',   href: '#download' },
    { label: 'Church Plans',     href: 'mailto:hello@praisepause.app' },
  ],
  Company: [
    { label: 'About',            href: 'mailto:hello@praisepause.app' },
    { label: 'Blog',             href: '#' },
    { label: 'Press',            href: 'mailto:press@praisepause.app' },
    { label: 'Contact',          href: 'mailto:hello@praisepause.app' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy',    href: '#' },
    { label: 'GDPR',             href: '#' },
  ],
};

const socialLinks = [
  { label: 'TikTok',     emoji: '🎵', href: 'https://tiktok.com' },
  { label: 'Instagram',  emoji: '📸', href: 'https://instagram.com' },
  { label: 'Facebook',   emoji: '💙', href: 'https://facebook.com' },
  { label: 'YouTube',    emoji: '▶️',  href: 'https://youtube.com' },
  { label: 'Pinterest',  emoji: '📌', href: 'https://pinterest.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: logo + tagline + social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Praise<span className="text-blue-400">Pause</span>
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              Turn every scroll into worship. Free. Joyful. Faith-centered.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 text-lg"
              >
                {s.emoji}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scripture quote */}
        <div className="py-8 border-b border-gray-800 text-center">
          <p className="text-gray-500 text-sm italic max-w-lg mx-auto">
            "Whatever you do, do it all for the glory of God." — 1 Corinthians 10:31
          </p>
        </div>

        {/* Bottom: copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} PraisePause. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> and prayer · Hosted on{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              Vercel
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
