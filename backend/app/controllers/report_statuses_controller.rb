class ReportStatusesController < ApplicationController
  skip_before_action :authorize, only: :index
  def index
    report_statuses = ReportStatus.all
    render json: report_statuses, include: ['report_statuses'], status: :ok
  end

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

  def destroy
  if report_status.destroy
    render json: { message: "Status deleted" }, status: :ok
  else
    render json: report_status.errors, status: :unprocessable_entity
  end
end


  private

  def report_status
    @report_status ||= ReportStatus.find(params[:id])
  end

  def report_status_params
    params.permit(:status)
  end
end

