class ApplicationController < ActionController::API
    before_action :authorized
    rescue_from ActiveRecord::RecordInvalid, with: :validation_errors
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    
    def encode_token(payload)
        JWT.encode(payload,'my_s3cr3t')
    end

    def auth_header
        # { Authorization: 'Bearer <token>' }
        request.headers['Authorization']
      end
      def decoded_token
        if auth_header
          token = auth_header.split(' ')[1]
          # header: { 'Authorization': 'Bearer <token>' }
          begin
            JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
          rescue JWT::DecodeError
            nil
          end
        end
      end
      def current_user
        if decoded_token
          user_id = decoded_token[0]['user_id']
          @user = User.find_by(id: user_id)
        end
      end
    
      def logged_in?
        !!current_user
      end
    private
    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
      end
    def validation_errors(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def not_found
        render json: { "error": "Not found"}, status: :not_found
    end
end
