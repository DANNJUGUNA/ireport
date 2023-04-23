class ReportsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_report, only: [:show, :edit, :update, :destroy, :change_status]
  
  # GET /reports.
  def index
    @reports = Report.all
    render json: @reports
  end

  # GET /reports/:id.
  def show
    report = Report.find_by!(id: params[:id])
    render json: report, status: :ok
  end

  # POST /reports
  def create
    @report = Report.new(report_params)
    if @report.save
      render json: @report, status: :created
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reports/:id
  def update
    report = Report.find_by!(id: params[:id])
    report.update(report_params)
    render json: report, status: :accepted
  end

  # DELETE /reports/:id
  def destroy
    report = Report.find_by!(id: params[:id])
    report.destroy
    head :no_content
  end

  # CHANGE /reports_status/:id
  def change_status
    @report_status = ReportStatus.find(params[:report_status_id])
    @report.update(report_status: @report_status)
    # send email notification to user
    redirect_to @report, notice: "Status changed successfully."
  end

  # Fetch User Specific Reports
  def user_reports
    user = User.find_by!(id: params[:user_id])
    reports = Report.all
    render json: user.reports, status: :ok
  end

  private

  def set_report
    @report = Report.find_by!(id: params[:id])
  end

  def report_params
    params.require(:report).permit(:description, :image, :video, :gps_coordinates, :user_id, :report_status_id, :report_type_id, :title, :location_name)
  end
end
