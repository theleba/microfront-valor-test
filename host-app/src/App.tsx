import React, { useState, useEffect, Suspense } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

const CatalogPage = React.lazy(() => import('catalog_app/CatalogPage'));
const DetailPage = React.lazy(() => import('detail_app/DetailPage'));

function App() {
  const [currentPage, setCurrentPage] = useState('catalog');
  const [selectedPokemonName, setSelectedPokemonName] = useState<string | null>(null);

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ pokemonName: string }>;
      setSelectedPokemonName(customEvent.detail.pokemonName);
      setCurrentPage('detail'); 
    };
    window.addEventListener('navigateToDetail', handleNavigate);
    return () => window.removeEventListener('navigateToDetail', handleNavigate);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <CatalogPage />;
      case 'detail':
        return <DetailPage pokemonName={selectedPokemonName} />;
      default:
        return <CatalogPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#100f12]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-40">
        <Suspense fallback={<div className="text-center mt-10">Loading Microfrontend...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
