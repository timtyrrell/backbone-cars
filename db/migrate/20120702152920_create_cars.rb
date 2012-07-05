class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.integer :make_id
      t.string :name
      t.string :color
      t.string :image
      t.boolean :featured, default: false
      t.integer :price

      t.timestamps
    end
  end
end
