import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatData } from 'helpers/functions';

export const CryptoHistory = ({items}) => {
  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

    <tbody>
      {items.map(({ id, price, amount, date }) => {
        return (<Tr key={id}>
      <Td>{id}</Td>
          <Td>{price}</Td>
          <Td>{amount}</Td>
      <Td>{formatData(date)}</Td>
    </Tr>)
      })}   
    
  </tbody>
</BaseTable>
};
