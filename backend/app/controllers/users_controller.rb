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
        user=User.create!(permited_params)
        if user.save
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
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
        params.permit(:first_name,:surname,:email,:password_digest)
    end
end
