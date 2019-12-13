class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :campsite_id, null: false
      t.integer :camper_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end

    add_index :reservations, :campsite_id
    add_index :reservations, :camper_id
  end
end
