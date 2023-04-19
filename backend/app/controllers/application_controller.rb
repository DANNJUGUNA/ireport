class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :validation_errors
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def encode_token(payload)
        JWT.encode(payload,"secret")
    end
    private

    def validation_errors(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def not_found
        render json: { "error": "Not found"}, status: :not_found
    end
end
