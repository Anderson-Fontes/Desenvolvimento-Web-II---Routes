import { Link } from 'react-router-dom';
import { HeaderContainer } from '../styles';

export default function Header() {
  return (
    <HeaderContainer>
      <h2>Fatec</h2>
      <nav>
        <Link to="/palpite">Palpite</Link>
        <Link to="/historico">Histórico</Link>
      </nav>
      <p>Prof. Francisco de Moura</p>
    </HeaderContainer>
  );
}