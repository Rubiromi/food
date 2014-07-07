class CreateNoms < ActiveRecord::Migration
  def change
    create_table :noms do |t|
      t.string :name
      t.string :description
      t.timestamps
    end
  end
end
