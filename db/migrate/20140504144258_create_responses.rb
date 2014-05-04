class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :video_id
      t.string :response_url

      t.timestamps
    end
  end
end
