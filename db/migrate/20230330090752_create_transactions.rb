class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :transaction_type
      t.integer :amount
      t.datetime :date
      # t.string :user_id
      # t.string :account_id

      t.timestamps
    end
  end
end
