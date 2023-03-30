class AccountsController < ApplicationController
  def index
    account = Account.all
    render json: account
  end

  def show
    account = Account.find_by(id: params[:id])
    render json: account
  end

  def destroy
    account = Account.find_by(id: params[:id])
    account.destroy
    render json: account
  end
end
