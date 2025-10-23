import React, { useState, useMemo, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResultItem } from './components/SearchResultItem';
import { searchData } from './data/searchData';
import { searchData2 } from './data/searchData2';
import { SearchResult } from './types';
import { WelcomeModal } from './components/WelcomeModal';

const NexusLogo: React.FC<{ src: string }> = ({ src }) => (
  <img 
    src={src} 
    alt="Nexus Logo" 
    className="mx-auto mb-4 w-56 sm:w-72"
  />
);


const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combine both data sources
  const allData = useMemo(() => [...searchData, ...searchData2], []);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('welcomeModalSeen');
    if (!hasSeenModal) {
      setIsModalOpen(true);
    }
  }, []);

  const handleAcceptTerms = () => {
    localStorage.setItem('welcomeModalSeen', 'true');
    setIsModalOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowAll(false); // Arama yaparken kategori görünümünü kapat
    }
  };

  const handleClearSearch = () => {
    setQuery('');
  }

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    setQuery(''); // Tümünü gösterirken arama sorgusunu temizle
    setActiveCategory('Tümü');
  };
  
  const categories = useMemo(() => {
    const allCategories = allData.map(item => item.category);
    // Fix: Explicitly type sort parameters to resolve 'unknown' type error.
    return ['Tümü', ...[...new Set(allCategories)].sort((a: string, b: string) => a.localeCompare(b, 'tr'))];
  }, [allData]);

  const searchResults = useMemo(() => {
    if (!query) return [];
    
    // Easter egg check
    if (query.toLowerCase() === '2025karamel2025') return [];

    const lowercasedQuery = query.toLowerCase();

    // 1. Her öğe için bir puan hesapla.
    // 2. Puanı 0 olan öğeleri filtrele.
    // 3. Sonuçları puana göre azalan sırada sırala.
    return allData
      .map(item => {
        let score = 0;
        const title = item.title.toLowerCase();
        
        // Başlık eşleşmeleri en önemlisidir
        if (title === lowercasedQuery) {
          score += 100; // Tam eşleşme
        } else if (title.startsWith(lowercasedQuery)) {
          score += 50; // Başlangıç eşleşmesi
        } else if (title.includes(lowercasedQuery)) {
          score += 20; // Başlık içinde geçiyorsa
        }

        // Alt bağlantı başlığı eşleşmeleri de çok önemlidir
        if (item.subLinks?.some(link => link.title.toLowerCase().includes(lowercasedQuery))) {
            score += 15;
        }

        // Açıklama eşleşmeleri daha az önemlidir
        if (item.description.toLowerCase().includes(lowercasedQuery)) {
          score += 5;
        }
        
        // URL eşleşmeleri en düşük önceliğe sahiptir
        if (item.url.toLowerCase().includes(lowercasedQuery)) {
            score += 1;
        }

        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

  }, [query, allData]);

  const groupedResults = useMemo(() => {
      if (!showAll || query) return null;

      const dataToGroup = (activeCategory && activeCategory !== 'Tümü')
        ? allData.filter(item => item.category === activeCategory)
        : allData;

      const groups: { [key: string]: SearchResult[] } = {};

      dataToGroup.forEach(item => {
        if (!groups[item.category]) {
          groups[item.category] = [];
        }
        groups[item.category].push(item);
      });
      
      Object.values(groups).forEach(group => group.sort((a,b) => a.title.localeCompare(b.title, 'tr')));

      return Object.keys(groups).sort((a, b) => a.localeCompare(b, 'tr')).map(category => ({
        category,
        items: groups[category]
      }));

    }, [showAll, query, activeCategory, allData]);

  const logoSrc = useMemo(() => {
    if (query.toLowerCase() === '2025karamel2025') {
      return 'https://raw.githubusercontent.com/atillayalinoksuz/nexus/refs/heads/main/karamel.jpg';
    }
    return 'https://raw.githubusercontent.com/atillayalinoksuz/nexus/refs/heads/main/nexus.png';
  }, [query]);

  const renderContent = () => {
    if (query) {
      if (searchResults.length > 0) {
        return (
          <div className="space-y-3">
            {searchResults.map((result, index) => (
              <SearchResultItem 
                key={result.id} 
                result={result} 
                style={{ animation: `fadeInUp 0.5s ${index * 0.05}s ease-out both` }}
              />
            ))}
          </div>
        );
      }
      return (
        <div className="text-center text-slate-400 mt-20 flex flex-col items-center animate-fadeInUp">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <p className="text-lg font-medium text-slate-300">"{query}" için sonuç bulunamadı.</p>
          <p className="text-sm text-slate-500">Farklı bir anahtar kelime deneyebilirsiniz.</p>
        </div>
      );
    }

    if (showAll && groupedResults) {
      return (
        <div className="space-y-8">
          {groupedResults.map((group, groupIndex) => (
            <section key={group.category} style={{ animation: `fadeInUp 0.5s ${groupIndex * 0.1}s ease-out both` }}>
              <h2 className="text-lg font-bold text-cyan-300 mb-4 sticky top-[88px] bg-slate-950/60 backdrop-blur-sm py-2 z-10 -mx-4 px-4 rounded-md border-b border-slate-800">
                {group.category} <span className="text-sm font-normal text-slate-400">({group.items.length})</span>
              </h2>
              <div className="space-y-3">
                 {group.items.map((result, index) => (
                    <SearchResultItem 
                      key={result.id} 
                      result={result} 
                      style={{}} // Animation is now on the card itself
                    />
                  ))}
              </div>
            </section>
          ))}
        </div>
      )
    }
    
    return (
      <div className="text-center text-slate-400 mt-20 flex flex-col items-center animate-fadeInUp">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-lg font-medium text-slate-300">Veritabanında arama yapmak için bir şeyler yazın.</p>
        <p className="text-sm text-slate-500">Veya tüm listeyi görmek için aşağıdaki butonu kullanın.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-slate-300 font-sans flex flex-col items-center pt-20 sm:pt-28 px-4 pb-10">
      {isModalOpen && <WelcomeModal onAccept={handleAcceptTerms} />}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out both;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
      
      <header className="text-center mb-10 w-full max-w-3xl">
        <NexusLogo src={logoSrc} />
        <p className="text-slate-400 mt-4 text-base sm:text-lg">
          <span className="text-white font-medium">{allData.length}</span> platformluk veri setinde anında arama yapın.
        </p>
      </header>
      
      <main className="w-full max-w-3xl">
        <div className="sticky top-4 z-20 space-y-4 bg-slate-950/30 backdrop-blur-lg -mx-4 px-4 py-4 rounded-xl">
            <SearchBar value={query} onChange={handleSearchChange} onClear={handleClearSearch} placeholder="Bir platform, teknoloji veya kategori arayın..."/>
             <div className="text-center">
                <button
                    onClick={handleToggleShowAll}
                    className="bg-slate-800/70 backdrop-blur-sm text-sm py-2 px-5 rounded-full border border-slate-700 hover:bg-slate-700/80 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                    {showAll ? 'Aramaya Dön' : 'Tüm Platformları Görüntüle'}
                </button>
            </div>
        </div>
        
        {showAll && !query && (
          <div className="flex flex-wrap justify-center gap-2 my-8 animate-fadeInUp">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium backdrop-blur-sm py-1.5 px-3 rounded-full border transition-all duration-200 transform hover:scale-105 ${
                  activeCategory === cat 
                  ? 'bg-cyan-400/20 border-cyan-400/80 text-cyan-300 shadow-[0_0_15px_-5px_rgba(34,211,28,0.4)]' 
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/80 hover:border-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="mt-8">
          {renderContent()}
        </div>
      </main>

      <footer className="text-slate-500 mt-auto pt-16 text-center text-sm">
        <p>
            <a 
                href="https://www.instagram.com/atilla_yalin_oksuuz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:underline transition-colors"
            >
                Atilla Yalın Öksüz
            </a> Tarafından geliştirildi.
        </p>
      </footer>
    </div>
  );
};

export default App;