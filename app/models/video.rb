class Video < ActiveRecord::Base
	attr_accessor :video_url, :question_id

	belongs_to :user
	has_one :response
	
	validates :video_url, presence: true
end
