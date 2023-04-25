class AdminsController < ApplicationController
    skip_before_action :authorize,only: [:admin]
    def admin
        @admin = Admin.find_by(email: params[:email])
      if @admin && @admin.authenticate(params[:password])
        token = encode_token({ admin_id: @admin.id })
        render json: { admin: @admin.as_json(except: [:created_at, :updated_at]), token: token, authorized: true  }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end

    def index
        admin=Admin.all 
        render json: admin, status: :ok 
    end
    def show
        admin=get_admin
        render json: admin, status: :ok
    end
    def create
        admin=Admin.create!(permited_params)
        render json: admin,status: :created
        
    end
    def update
        admin=get_admin
        admin.update!(permited_params)
        render json:admin,status: :ok
    end
  
    private
    def get_admin
        Admin.find(params[:id])
    end
    def permited_params
        params.permit(:first_name,:surname,:email,:password)
    end
end
