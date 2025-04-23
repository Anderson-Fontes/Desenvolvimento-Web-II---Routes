import { NumeroItem } from '../styles';

interface PalpiteItemProps {
  numeros: number[];
}

export default function PalpiteItem({ numeros }: PalpiteItemProps) {
  return (
    <tr>
      {numeros.map((num) => (
        <NumeroItem key={num}>{num}</NumeroItem>
      ))}
    </tr>
  );
}