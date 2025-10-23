import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  placeholder?: string;
}

const SearchIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-slate-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
    </svg>
);

const ClearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear, placeholder = "Arama yap..." }) => {
  return (
    <div className="relative w-full group">
       <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative w-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-full text-slate-200 placeholder-slate-500 py-3.5 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 shadow-lg"
        aria-label="Arama"
      />
       {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 transition-colors z-10"
          aria-label="Aramayı temizle"
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
};
