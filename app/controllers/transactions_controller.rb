class TransactionsController < ApplicationController
  def index
      transactions = Transaction.all
      render json: transactions
  end
  def create
      transactions = Transaction.create({
        transaction_type: params[:transaction_type],
          amount: params[:amount],
          date: params[:date]
         
      })
      render json: transactions
  end
  def show
      transaction = Transaction.find(params[:id])
      render json: transaction
  end
end
