class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      redirect_to video_path(@video)
    else
      render :new
    end
  end

  def new
    @video = Video.new
  end

  def edit
  end

  private
  def video_params
    params.require(:video).permit(:question_id, :councillor_id, :video_url[:video_uuid])
  end

end
