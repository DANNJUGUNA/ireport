# This file is used by Rack-based servers to start the application.

require_relative "config/environment"
require 'rack/cors'

use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: :any
  end
end

run Rails.application
Rails.application.load_server
