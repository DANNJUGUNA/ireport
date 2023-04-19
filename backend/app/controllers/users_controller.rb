class UsersController < ApplicationController
    #skip_before_action :authorize, only: [:create, :login]
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
    def login
        @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user:@user, token: token, authorized: true  },status: :ok
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
    end
    def update
       user=get_user
       user.update!(permited_params)
       render json: user, status: :ok

    end
  
    private
    def get_user
        User.find(params[:id])
    end
    def permited_params
        params.permit(:first_name,:surname,:email,:password)
    end
end
