import styled from '@emotion/styled';

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }

  #root {
    width: 100%;
    max-width: 100%;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.header`
  padding: 20px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    color:rgb(255, 255, 255);
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      color:rgb(255, 255, 255);
      text-decoration: none;
      font-weight: bold;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color:rgb(0, 0, 0);
      }
    }
  }

  p {
    color:rgb(255, 255, 255);
    font-style: italic;
  }
`;


export const ContentContainer = styled.main`
  width: 100%;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h1 {
    color:rgb(255, 255, 255);
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: 30px auto;
  max-width: 500px;

  div {
    background-color:rgb(70, 168, 67);
    color: white;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    font color:
  }
`;

export const NumbersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  background-color: #000; /* Fundo preto */
  color: white; /* Texto branco */

  th, td {
    padding: 12px;
    text-align: center;
    border: 1px solid #333; /* Bordas mais escuras */
    color: white; /* Garante texto branco */
  }

  th {
    background-color: #222; /* Header um pouco mais claro */
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #111; /* Linhas alternadas mais claras */
  }

  tr:hover {
    background-color: #333; /* Efeito hover */
  }
`;

export const MainButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  transition: background-color 0.2s;

  &:hover {
    background-color: #27ae60;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
      background-color:rgb(0, 0, 0);
    }
  }
`;

export const NumeroItem = styled.td`
  padding: 8px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: #000;
  border: 1px solid #333;
  max-width: 100%;  // Garante que não ultrapasse a célula
  overflow: hidden;  // Esconde conteúdo extra
  text-overflow: ellipsis; // Adiciona "..." se necessário
`;