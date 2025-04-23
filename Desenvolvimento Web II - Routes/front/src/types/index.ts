export type Palpite = number[];
export interface PalpiteContextType {
  palpites: Palpite[];
  gerarNovoPalpite: () => void;
}