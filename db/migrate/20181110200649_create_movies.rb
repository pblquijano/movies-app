class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.string :directed_by
      t.integer :duration
      t.float :price
      t.text :img
      t.text :synopsis

      t.timestamps
    end
  end
end
