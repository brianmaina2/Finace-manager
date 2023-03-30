import React, { useState } from "react";
import { createAccount, updateAccount } from "../api/accountApi";

function AccountForm({ account, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: account.name,
    balance: account.balance,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (account.id) {
      await updateAccount(account.id, formData);
    } else {
      await createAccount(formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="balance">Balance:</label>
        <input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default AccountForm;
