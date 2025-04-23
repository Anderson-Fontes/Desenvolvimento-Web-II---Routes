import { usePalpites } from '../contexts/PalpiteContext';
import { ContentContainer, NumbersTable } from '../styles';
import { Link } from 'react-router-dom';

export default function Historico() {
  const { palpites } = usePalpites();

  return (
    <ContentContainer>
      <h1>Histórico de Palpites</h1>
      {palpites.length > 0 ? (
        <NumbersTable>
          <tbody>
            {palpites.map((palpite, index) => (
              <tr key={index}>
                {palpite.map(num => (
                  <td key={num}>{num}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </NumbersTable>
      ) : (
        <p>Nenhum palpite gerado ainda</p>
      )}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/palpite">Gerar Palpite</Link>
      </div>
    </ContentContainer>
  );
}