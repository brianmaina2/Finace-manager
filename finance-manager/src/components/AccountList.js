import React, { useState, useEffect } from "react";
import { getAccounts } from "../api/accountApi";

function AccountList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchAccounts() {
      const fetchedAccounts = await getAccounts();
      setAccounts(fetchedAccounts);
    }
    fetchAccounts();
  }, []);

  return (
    <div>
      <h1>Accounts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>{account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountList;
