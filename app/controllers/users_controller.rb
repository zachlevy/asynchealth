class UsersController < ApplicationController
  def new
  end

  def create
    raise "bang!"
  end
  
  def index
  end

  #  Testing if Devise needs parameters white listed both here and application_controller
  def user_params
    params.require(:user).permit(:username,
    							 :password,
    							 :email)
  end
end
