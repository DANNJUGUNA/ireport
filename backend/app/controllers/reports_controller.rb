class ReportsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :user_reports, :update, :create, :destroy]

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
  # def create
  #   @report = Report.new(report_params)
  #   if @report.save
  #     render json: @report, status: :created
  #   else
  #     render json: @report.errors, status: :unprocessable_entity
  #   end
  # end

  def create
    report_params = params.require(:report).permit(:description, :video, :gps_coordinates, :user_id, :report_type_id, :report_status_id, :title, :location_name)
    report_params[:image] = params[:image] 
  
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
