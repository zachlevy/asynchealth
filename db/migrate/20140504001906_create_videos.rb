class CreateVideos < ActiveRecord::Migration
  ## serialize :video_url

  def change
	  create_table "videos", force: true do |t|
	    t.string   "video_url"
	    t.integer  "question_id"
	    t.datetime "created_at"
	    t.datetime "updated_at"
	    t.integer  "councillor_id"
	    t.belongs_to :user
	  end
  end
end
