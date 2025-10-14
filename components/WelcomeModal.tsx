import React, { useEffect } from 'react';

interface WelcomeModalProps {
  onAccept: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onAccept }) => {

  useEffect(() => {
    // Modal açıldığında body scroll'u engelle
    document.body.style.overflow = 'hidden';
    // Component kaldırıldığında (unmount) body scroll'u tekrar aktif et
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out both;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out both;
        }
      `}</style>
      <div className="bg-slate-900/70 backdrop-blur-lg w-full max-w-md p-8 rounded-2xl shadow-2xl border border-slate-700 animate-scaleUp">
        <h2 id="modal-title" className="text-2xl font-bold text-slate-100 mb-4">
          Nexus'a Hoş Geldiniz!
        </h2>
        <div className="text-slate-400 space-y-4">
          <p>
            Nexus, kişisel olarak derlediğim ve sık kullandığım platformları, araçları ve web sitelerini içeren bir arama motorudur. 
            Tamamen bir kişisel projedir ve sürekli olarak geliştirilmektedir.
          </p>
          <p>
            Buradaki veriler bilgilendirme amaçlıdır ve herhangi bir ticari amaç gütmemektedir. Keyifle kullanmanız dileğiyle!
          </p>
        </div>
        <button
          onClick={onAccept}
          className="mt-8 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-5 rounded-lg hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Anladım, Başlayalım!
        </button>
      </div>
    </div>
  );
};