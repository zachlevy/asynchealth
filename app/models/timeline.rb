class Timeline < ActiveRecord::Base
	has_many :videos
	has_one :user

end
