class ReportTypesController < ApplicationController
  skip_before_action :authorize, only: :index
  def index
    report_types = ReportType.all
    render json: report_types, include: ['report_types'], status: :ok
  end
   def create
    @report_type = ReportType.new(report_type_params)
    if @report_type.save
      redirect_to @report_type
    else
      render :new
    end
  end

  def show
    @report_type = ReportType.find(params[:id])
  end

  private

  def report_type_params
    params.require(:report_type).permit(:name)
  end
end

