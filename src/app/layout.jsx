import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Strategic Command - Tarun Kumar Banjaree',
  description: 'Portfolio of Tarun Kumar Banjaree',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: 'tailwind.config = { darkMode: "class", theme: { extend: { colors: { "surface-bright": "#393939", "on-secondary-container": "#abb8db", "outline": "#a18e79", "on-background": "#e2e2e2", "secondary": "#b9c6ea", "on-error-container": "#ffdad6", "secondary-fixed-dim": "#b9c6ea", "on-tertiary-fixed-variant": "#454747", "on-tertiary-fixed": "#1a1c1c", "primary": "#ffc887", "on-tertiary-container": "#464848", "surface-container-highest": "#353535", "surface": "#131313", "surface-container-high": "#2a2a2a", "on-surface-variant": "#d9c3ad", "primary-container": "#fca311", "on-secondary": "#23304d", "on-primary-fixed": "#2a1700", "on-secondary-fixed": "#0d1b36", "inverse-surface": "#e2e2e2", "surface-tint": "#ffb95f", "inverse-primary": "#855300", "on-primary-container": "#663f00", "surface-variant": "#353535", "error-container": "#93000a", "tertiary-fixed-dim": "#c6c6c6", "background": "#131313", "on-error": "#690005", "outline-variant": "#534433", "surface-dim": "#131313", "tertiary": "#d1d2d2", "surface-container-low": "#1b1b1b", "primary-fixed-dim": "#ffb95f", "secondary-fixed": "#d9e2ff", "secondary-container": "#3c4967", "on-tertiary": "#2f3131", "surface-container": "#1f1f1f", "tertiary-container": "#b6b6b6", "on-primary-fixed-variant": "#653e00", "surface-container-lowest": "#0e0e0e", "inverse-on-surface": "#303030", "error": "#ffb4ab", "tertiary-fixed": "#e2e2e2", "on-secondary-fixed-variant": "#3a4664", "primary-fixed": "#ffddb8", "on-primary": "#472a00", "on-surface": "#e2e2e2" }, fontFamily: { headline: ["Manrope"], body: ["Inter"], label: ["Inter"] } } } }'
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
          .editorial-grid { display: flex; flex-direction: column; gap: 2rem; }
          @media (min-width: 768px) { .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; } }
        `}} />
      </head>
      <body className="bg-[#131313] text-[#e2e2e2] font-body selection:bg-primary-container selection:text-on-primary-fixed">
        <Navigation />
        <main className="pt-32 pb-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}