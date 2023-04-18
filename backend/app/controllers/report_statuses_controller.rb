class ReportStatusesController < ApplicationController
    def show
    render json: report_status
  end
  
end
