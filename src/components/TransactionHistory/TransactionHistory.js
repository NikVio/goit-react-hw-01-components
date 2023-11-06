import { TableTh, TableTd } from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <TableTd>{transaction.type}</TableTd>
              <TableTd>{transaction.amount}</TableTd>
              <TableTd>{transaction.currency}</TableTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
