require 'test_helper'

class RentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rent_index_url
    assert_response :success
  end

end
