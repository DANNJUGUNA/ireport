class ReportTypesController < ApplicationController
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


end
