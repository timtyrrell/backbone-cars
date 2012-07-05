class Country < ActiveRecord::Base
	has_many :makes
	has_many :cars, through: :makes
end
