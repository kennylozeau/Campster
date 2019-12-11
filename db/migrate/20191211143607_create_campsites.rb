class CreateCampsites < ActiveRecord::Migration[5.2]
  def change
    create_table :campsites do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.float :price, null: false

      t.timestamps
    end
  end
end
