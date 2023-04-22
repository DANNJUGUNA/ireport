class ReportsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

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
    if @report.update(report_params)
      render json: @report
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reports/:id
  def destroy
    @report.destroy
    head :no_content
  end

  private

  def set_report
    @report = Report.find(params[:id])
  end

  def report_params
    params.require(:report).permit(:description, :image, :video, :gps_coordinates, :user_id, :report_status_id, :report_type_id, :title, :location_name)
  end
end
