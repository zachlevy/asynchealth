class VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    puts "======video_params=====" + video_params.to_s
    puts "======video_params[:question_id]=====" + video_params[:question_id].to_s
    # @video.question_id = video_params[:question_id].to_i
    @video.video_url = video_params[:video_url]
    @video.question_id = video_params[:question_id]
    puts "======@video=====" + @video.inspect
    if @video.save
      # @video.update_attribute(:question_id, video_params[:question_id].to_i)
      puts "======form======success"
      redirect_to @video
    else
      puts "======form======failure"
      render :new
    end
  end

  def edit
  end

  private
  def video_params
    params[:video][:video_url] = params[:camera_tag][:video_uuid]
    puts "======params=====" + params.to_s
    params.require(:video).permit(:question_id, :councillor_id, :video_url)
  end

end
