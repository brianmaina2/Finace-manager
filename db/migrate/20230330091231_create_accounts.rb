class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :account_number
      t.string :balance
      # t.string :user_id

      t.timestamps
    end
  end
end
