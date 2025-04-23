import { PalpiteProvider } from './contexts/PalpiteContext';
import { GlobalStyle, AppContainer, PageContainer } from './styles';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Palpite from './pages/Palpite';
import Historico from './pages/Historico';

function App() {
  return (
    <PalpiteProvider>
      <GlobalStyle />
      <AppContainer>
        <PageContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<Palpite />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </PageContainer>
      </AppContainer>
    </PalpiteProvider>
  );
}

export default App;