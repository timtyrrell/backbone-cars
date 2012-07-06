class Country < ActiveRecord::Base
	has_many :makes
	has_many :cars
end
