class AddingCouncillorId < ActiveRecord::Migration
  def change
  	add_column :videos, :councillor_id, :integer
  end
end
