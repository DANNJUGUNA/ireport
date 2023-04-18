class AdminsController < ApplicationController
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
        params.permit(:first_name,:surname,:email,:password_digest)
    end
end
