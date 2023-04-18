class ReportTypesController < ApplicationController
   def create
    @report_type = ReportType.new(report_type_params)
    if @report_type.save
      redirect_to @report_type
    else
      render :new
    end
  end

end
