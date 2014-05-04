class Response < ActiveRecord::Base
	attr_accessor :response_url
	
	belongs_to :video

	validates :video_id, presence: true
	validates :response_url, presence: true
end
