import { createContext, useContext, useState } from 'react';

type Palpite = number[];

interface PalpiteContextType {
  palpites: Palpite[];
  gerarNovoPalpite: () => void;
}

const PalpiteContext = createContext<PalpiteContextType>({
  palpites: [],
  gerarNovoPalpite: () => {},
});

export const usePalpites = () => useContext(PalpiteContext);

export const PalpiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [palpites, setPalpites] = useState<Palpite[]>([]);

  const gerarNovoPalpite = () => {
    const novoPalpite: Palpite = [];
    while (novoPalpite.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!novoPalpite.includes(num)) {
        novoPalpite.push(num);
      }
    }
    novoPalpite.sort((a, b) => a - b);
    setPalpites([...palpites, novoPalpite]);
  };

  return (
    <PalpiteContext.Provider value={{ palpites, gerarNovoPalpite }}>
      {children}
    </PalpiteContext.Provider>
  );
};