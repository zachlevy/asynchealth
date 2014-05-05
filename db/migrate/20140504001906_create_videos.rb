class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :video_url, array: true, default: []
      t.integer :question_id
      t.integer :timeline_id
      t.timestamps
    end
  end
end
