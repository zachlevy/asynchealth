class TimelinesController < ApplicationController
  def index
  end
  def show 
  	@timeline = Timeline.find(params[:id])
  end
  def create 
  	@timeline = Timeline.new
  end
end
