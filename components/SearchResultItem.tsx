import React from 'react';
import { SearchResult } from '../types';

interface SearchResultItemProps {
  result: SearchResult;
  style: React.CSSProperties;
}

const categoryStyleMap: { [key: string]: { border: string; glow: string; text: string; gradient: string } } = {
  'Geliştirme':         { border: 'hover:border-cyan-400/60',    glow: 'hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.3)]', text: 'group-hover:text-cyan-300',    gradient: 'from-cyan-400/80 to-blue-500/80' },
  'Tasarım':            { border: 'hover:border-purple-400/60',  glow: 'hover:shadow-[0_0_25px_-5px_rgba(192,132,252,0.3)]', text: 'group-hover:text-purple-300',  gradient: 'from-purple-400/80 to-fuchsia-500/80' },
  'E-Ticaret':          { border: 'hover:border-emerald-400/60', glow: 'hover:shadow-[0_0_25px_-5px_rgba(52,211,153,0.3)]', text: 'group-hover:text-emerald-300', gradient: 'from-emerald-400/80 to-green-500/80' },
  'Sosyal Medya':       { border: 'hover:border-blue-400/60',     glow: 'hover:shadow-[0_0_25px_-5px_rgba(96,165,250,0.3)]', text: 'group-hover:text-blue-300',     gradient: 'from-blue-400/80 to-indigo-500/80' },
  'Haberler & Medya':   { border: 'hover:border-yellow-400/60',  glow: 'hover:shadow-[0_0_25px_-5px_rgba(250,204,21,0.3)]', text: 'group-hover:text-yellow-300',  gradient: 'from-yellow-400/80 to-amber-500/80' },
  'Araçlar & Üretkenlik': { border: 'hover:border-orange-400/60',  glow: 'hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.3)]', text: 'group-hover:text-orange-300',  gradient: 'from-orange-400/80 to-amber-500/80' },
  'Eğitim':             { border: 'hover:border-indigo-400/60',  glow: 'hover:shadow-[0_0_25px_-5px_rgba(129,140,248,0.3)]', text: 'group-hover:text-indigo-300',  gradient: 'from-indigo-400/80 to-violet-500/80' },
  'Eğlence':            { border: 'hover:border-rose-400/60',     glow: 'hover:shadow-[0_0_25px_-5px_rgba(251,113,133,0.3)]', text: 'group-hover:text-rose-300',     gradient: 'from-rose-400/80 to-pink-500/80' },
  'Finans & Kripto':    { border: 'hover:border-lime-400/60',     glow: 'hover:shadow-[0_0_25px_-5px_rgba(163,230,53,0.3)]', text: 'group-hover:text-lime-300',     gradient: 'from-lime-400/80 to-green-400/80' },
  'Referans':           { border: 'hover:border-slate-400/60',    glow: 'hover:shadow-[0_0_25px_-5px_rgba(148,163,184,0.3)]', text: 'group-hover:text-slate-300',    gradient: 'from-slate-400/80 to-gray-500/80' },
  'Seyahat':            { border: 'hover:border-teal-400/60',     glow: 'hover:shadow-[0_0_25px_-5px_rgba(45,212,191,0.3)]', text: 'group-hover:text-teal-300',     gradient: 'from-teal-400/80 to-cyan-500/80' },
  'Oyun':               { border: 'hover:border-red-500/60',      glow: 'hover:shadow-[0_0_25px_-5px_rgba(239,68,68,0.3)]', text: 'group-hover:text-red-400',      gradient: 'from-red-500/80 to-orange-600/80' },
  'Teknoloji':          { border: 'hover:border-zinc-400/60',     glow: 'hover:shadow-[0_0_25px_-5px_rgba(161,161,170,0.3)]', text: 'group-hover:text-zinc-300',     gradient: 'from-zinc-400/80 to-neutral-500/80' },
  'Yapay Zeka':         { border: 'hover:border-fuchsia-400/60', glow: 'hover:shadow-[0_0_25px_-5px_rgba(232,121,249,0.3)]', text: 'group-hover:text-fuchsia-300', gradient: 'from-fuchsia-400/80 to-purple-600/80' },
  'Sağlık & Fitness':   { border: 'hover:border-green-400/60',   glow: 'hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.3)]', text: 'group-hover:text-green-300',   gradient: 'from-green-400/80 to-emerald-500/80' },
};

const VisitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ result, style }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${result.url}&sz=64`;
  const styles = categoryStyleMap[result.category] || { border: 'hover:border-slate-600', glow: 'hover:shadow-slate-500/20', text: 'group-hover:text-slate-300', gradient: 'from-slate-500/80 to-slate-700/80' };

  return (
     <div style={style} className="w-full relative group">
        <div className={`absolute -inset-px bg-gradient-to-r ${styles.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition duration-500`}></div>
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block text-left bg-slate-900/80 backdrop-blur-sm p-4 rounded-xl border border-slate-800 transition-all duration-300 ${styles.glow} group-hover:border-slate-700/80 group-hover:-translate-y-1`}
        >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center overflow-hidden border border-slate-700/50">
                 <img
                    src={faviconUrl}
                    alt={`${result.title} Favicon`}
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if(parent){
                        parent.innerHTML = `<span class="text-slate-400 text-lg font-bold flex items-center justify-center w-full h-full">${result.title.charAt(0)}</span>`;
                        parent.classList.add('bg-slate-700/50');
                      }
                    }}
                 />
            </div>

            <div className="flex-grow min-w-0">
              <h3 className={`text-base font-semibold text-slate-100 truncate transition-colors ${styles.text}`}>
                {result.title}
              </h3>
              <p className="text-sm text-slate-400 truncate">{result.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</p>
            </div>
          </div>

          <div className={`text-slate-500 transition-all duration-300 ml-4 ${styles.text} -translate-x-2 group-hover:translate-x-0`}>
            <VisitIcon />
          </div>

        </div>
        
        {result.description && (
        <p className="text-slate-400 mt-3 text-sm leading-relaxed line-clamp-2">
          {result.description}
        </p>
      )}

      {result.subLinks && result.subLinks.length > 0 && (
        <div className={`flex flex-wrap gap-2 ${result.description ? 'mt-3' : 'mt-4'}`}>
          {result.subLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/70 text-slate-300 hover:bg-slate-700/90 hover:text-cyan-300 text-xs font-medium py-1 px-3 rounded-full transition-all duration-200 border border-slate-700/50"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
      </a>
    </div>
  );
};
