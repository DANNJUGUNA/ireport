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
        
    end
    def update
        
    end
    def destroy
        
    end
    private
    def get_admin
        Admin.find(params[:id])
    end
    def permited_params
        params.permit(:first_name,:surname,:email,:password_digest)
    end
end
