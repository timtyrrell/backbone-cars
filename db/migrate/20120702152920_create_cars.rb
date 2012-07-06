class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.integer :country_id
      t.integer :make_id
      t.string :name
      t.string :color
      t.string :image
      t.boolean :featured, default: false
      t.integer :price
      t.boolean :bought, default: false

      t.timestamps
    end
  end
end
