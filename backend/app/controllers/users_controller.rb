class UsersController < ApplicationController
    def index
       user = User.all 
       render json: user, status: :ok  
    end
    def show
      user=get_user
      render json: user, status: :ok  
    end
    def create
        @user=User.new(permited_params)
        if @user.save
            token=encode_token({user_id: @user.id})
            render json: {user: @user,token: token},status: :created
        else
            render json: {errors: @user.errors.full_messages},status: :unprocessable_entity
        end
    end
    def update
       user=get_user
       user.update!(permited_params)
       render json: user, status: :ok

    end
    def destroy
      user=get_user
      user.destroy
      head :no_content  
    end
    private
    def get_user
        User.find(params[:id])
    end
    def permited_params
        params.permit(:first_name,:surname,:email,:password)
    end
end
