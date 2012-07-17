class Country < ActiveRecord::Base
	has_many :makes
	has_many :cars
    attr_accessible :name
end
