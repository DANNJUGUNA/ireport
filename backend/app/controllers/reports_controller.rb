class ReportsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :user_reports]
  before_action :check_admin, only: [:change_status]

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
    if current_user.admin?
      @report = Report.find(params[:id])
      @report_status = ReportStatus.find(params[:report_status_id])
      @report.update(report_status: @report_status)
    # send email notification to user
      UserMailer.report_status_changed(@report.user, @report).deliver_now
      render json: @report, status: :accepted
    else
    render json: { error: "You are not authorized to perform this action." }, status: :unauthorized
    end
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

  def check_admin
    unless current_user && current_user.admin?
      render json: { error: "Only admin users can perform this action." }, status: :unauthorized
    end
  end

end
