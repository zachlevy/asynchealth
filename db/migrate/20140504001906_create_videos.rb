class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.serialize :video_url, Hash
      t.integer :question_id
      t.integer :timeline_id
      t.timestamps
    end
  end
end
