import { usePalpites } from '../contexts/PalpiteContext';
import { ContentContainer, NumbersGrid, MainButton } from '../styles';
import { Link } from 'react-router-dom';

export default function Palpite() {
  const { palpites, gerarNovoPalpite } = usePalpites();
  const ultimoPalpite = palpites[palpites.length - 1] || [];

  return (
    <ContentContainer>
      <h1>Palpite para a Mega-sena</h1>
      <NumbersGrid>
        {ultimoPalpite.map(num => (
          <div key={num}>{num}</div>
        ))}
      </NumbersGrid>
      <MainButton onClick={gerarNovoPalpite}>Nova sugestão</MainButton>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/historico">Histórico</Link>
      </div>
    </ContentContainer>
  );
}