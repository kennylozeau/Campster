class AddReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :campsite_id, null: false
      t.integer :reservation_id, null: false
      t.string :title, null: false
      t.string :body
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :reviews, :campsite_id
    add_index :reviews, :reservation_id
  end
end
