import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutMePage } from './components/AboutMePage';
import { ColophonPage } from './components/ColophonPage';
import { DomeDetailPage } from './components/DomeDetailPage';
import { ArchiveDetailPage } from './components/ArchiveDetailPage';
import { LibrasDetailPage } from './components/LibrasDetailPage';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/colophon" element={<ColophonPage />} />
        <Route path="/dome" element={<DomeDetailPage />} />
        <Route path="/archive" element={<ArchiveDetailPage />} />
        <Route path="/libras" element={<LibrasDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}