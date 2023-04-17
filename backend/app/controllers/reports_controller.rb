class ReportsController < ApplicationController
  before_action :set_report, only: [:show, :update, :destroy]
  before_action :authorize_request

  def index
    @reports = Report.all
    render json: { reports: @reports }
  end

  def show
    render json: { report: @report }
  end

  def create
    @report = @current_user.reports.build(report_params)
    if @report.save
      render json: { report: @report }, status: :created
    else
      render json: { errors: @report.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @report.update(report_params)
      render json: { report: @report }
    else
      render json: { errors: @report.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @report.destroy
    head :no_content
  end

  private

  def set_report
    @report = Report.find(params[:id])
  end

  def report_params
    params.require(:report).permit(:description, :image, :video, :gps_coordinates, :report_type_id, :status_type_id)
  end
end
