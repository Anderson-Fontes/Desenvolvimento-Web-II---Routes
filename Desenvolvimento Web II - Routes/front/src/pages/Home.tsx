import { Link } from 'react-router-dom';
import { ContentContainer, MainButton } from '../styles';

export default function Home() {
  return (
    <ContentContainer>
      <h1>Bem-vindo!</h1>
      <Link to="/palpite">
        <MainButton>Clique para começar</MainButton>
      </Link>
    </ContentContainer>
  );
}