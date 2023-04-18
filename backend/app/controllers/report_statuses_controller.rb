class ReportStatusesController < ApplicationController
    def show
    render json: report_status
  end

  def update
    if report_status.update(report_status_params)
      render json: report_status
    else
      render json: report_status.errors, status: :unprocessable_entity
    end
  end
  
end
