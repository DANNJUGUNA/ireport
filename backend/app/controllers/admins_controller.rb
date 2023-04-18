class AdminsController < ApplicationController
    def index
        admin=Admin.all 
        render json: admin, status: :ok 
    end
    def show
        
    end
    def create
        
    end
    def update
        
    end
    def destroy
        
    end
end
