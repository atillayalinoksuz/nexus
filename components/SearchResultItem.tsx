import React from 'react';
import { SearchResult } from '../types';

interface SearchResultItemProps {
  result: SearchResult;
  style: React.CSSProperties;
}

const categoryStyleMap: { [key: string]: { border: string; glow: string; text: string; } } = {
  'Geliştirme':         { border: 'hover:border-cyan-400/60',    glow: 'hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.25)]', text: 'group-hover:text-cyan-300' },
  'Tasarım':            { border: 'hover:border-purple-400/60',  glow: 'hover:shadow-[0_0_15px_-3px_rgba(192,132,252,0.25)]', text: 'group-hover:text-purple-300' },
  'E-Ticaret':          { border: 'hover:border-emerald-400/60', glow: 'hover:shadow-[0_0_15px_-3px_rgba(52,211,153,0.25)]', text: 'group-hover:text-emerald-300' },
  'Sosyal Medya':       { border: 'hover:border-blue-400/60',     glow: 'hover:shadow-[0_0_15px_-3px_rgba(96,165,250,0.25)]', text: 'group-hover:text-blue-300' },
  'Haberler & Medya':   { border: 'hover:border-yellow-400/60',  glow: 'hover:shadow-[0_0_15px_-3px_rgba(250,204,21,0.25)]', text: 'group-hover:text-yellow-300' },
  'Araçlar & Üretkenlik': { border: 'hover:border-orange-400/60',  glow: 'hover:shadow-[0_0_15px_-3px_rgba(251,146,60,0.25)]', text: 'group-hover:text-orange-300' },
  'Eğitim':             { border: 'hover:border-indigo-400/60',  glow: 'hover:shadow-[0_0_15px_-3px_rgba(129,140,248,0.25)]', text: 'group-hover:text-indigo-300' },
  'Eğlence':            { border: 'hover:border-rose-400/60',     glow: 'hover:shadow-[0_0_15px_-3px_rgba(251,113,133,0.25)]', text: 'group-hover:text-rose-300' },
  'Finans & Kripto':    { border: 'hover:border-lime-400/60',     glow: 'hover:shadow-[0_0_15px_-3px_rgba(163,230,53,0.25)]', text: 'group-hover:text-lime-300' },
  'Referans':           { border: 'hover:border-slate-400/60',    glow: 'hover:shadow-[0_0_15px_-3px_rgba(148,163,184,0.25)]', text: 'group-hover:text-slate-300' },
  'Seyahat':            { border: 'hover:border-teal-400/60',     glow: 'hover:shadow-[0_0_15px_-3px_rgba(45,212,191,0.25)]', text: 'group-hover:text-teal-300' },
  'Oyun':               { border: 'hover:border-red-500/60',      glow: 'hover:shadow-[0_0_15px_-3px_rgba(239,68,68,0.25)]', text: 'group-hover:text-red-400' },
};


const VisitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ result, style }) => {
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${result.url}&sz=64`;
  const styles = categoryStyleMap[result.category] || { border: 'hover:border-slate-600', glow: 'hover:shadow-slate-500/20', text: 'group-hover:text-slate-300' };

  return (
    <div 
      style={style}
      className={`w-full text-left bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/80 transition-all duration-300 group ${styles.border} ${styles.glow}`}
    >
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 min-w-0">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-slate-700 flex items-center justify-center overflow-hidden">
                 <img
                    src={faviconUrl}
                    alt={`${result.title} Favicon`}
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if(parent){
                        parent.innerHTML = `<span class="text-slate-400 text-sm font-bold flex items-center justify-center w-full h-full">${result.title.charAt(0)}</span>`;
                        parent.classList.add('bg-slate-600');
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

          <div className={`text-slate-500 transition-colors ml-4 ${styles.text}`}>
            <VisitIcon />
          </div>

        </div>
      </a>
      {result.description && (
        <p className="text-slate-400 mt-3 text-sm leading-relaxed">
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
              className="bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-cyan-300 text-xs font-medium py-1 px-3 rounded-full transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
