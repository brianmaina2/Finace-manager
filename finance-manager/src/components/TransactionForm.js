import React, { useState } from 'react';
import { postTransaction, updateTransaction } from './api';

function TransactionForm({ transaction, onSubmit }) {
  const [type, setType] = useState(transaction?.type || '');
  const [amount, setAmount] = useState(transaction?.amount || 0);
  const [account, setAccount] = useState(transaction?.account || '');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { type, amount, account };
    try {
      if (transaction) {
        await updateTransaction(transaction.id, data);
      } else {
        await postTransaction(data);
      }
      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input
          type="text"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Account:
        <input
          type="text"
          value={account}
          onChange={(event) => setAccount(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">{transaction ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default TransactionForm;
