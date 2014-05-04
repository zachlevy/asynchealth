class RemoveVideoIdFromVideo < ActiveRecord::Migration
  def change
    remove_column :videos, :video_id, :integer
  end
end
