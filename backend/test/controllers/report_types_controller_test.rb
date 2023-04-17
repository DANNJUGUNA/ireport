require "test_helper"

class ReportTypesControllerTest < ActionDispatch::IntegrationTest
  test "should get StatusTypes" do
    get report_types_StatusTypes_url
    assert_response :success
  end
end
