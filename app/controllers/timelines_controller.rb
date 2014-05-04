class TimelinesController < ApplicationController
  def index
  end
  def show 
  	@timeline = Timeline.find(params[:id])
  end
end
