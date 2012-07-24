# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Country.destroy_all
Make.destroy_all
Car.destroy_all

c1 = Country.create(name: "Germany")
c2 = Country.create(name: "Italy")
c3 = Country.create(name: "England")

m1 = Make.create(country_id: c1.id, name: "Porsche")
m2 = Make.create(country_id: c1.id, name: "Mercedes")
m3 = Make.create(country_id: c2.id, name: "Ferrari")
m4 = Make.create(country_id: c2.id, name: "Lamborghini")
m5 = Make.create(country_id: c3.id, name: "Aston-Martin")
m6 = Make.create(country_id: c3.id, name: "Bentley")
m8 = Make.create(country_id: c1.id, name: "Buggatti")

Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Black", image: "c1", price: 68000, bought:true)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Yellow", image: "c2", price: 59998)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Silver", image: "c3", price: 128995)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Red", image: "c44", featured: true, price: 104000)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Red", image: "c5", price: 98000)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Red", image: "c6", price: 79990)
Car.create(country_id: c1.id, make_id: m1.id, name: "911", color: "Black", image: "c7", price: 89000)
Car.create(country_id: c1.id, make_id: m1.id, name: "Boxster", color: "Silver", image: "c8", price: 45000)
Car.create(country_id: c1.id, make_id: m1.id, name: "Boxster", color: "Red", image: "c9", price: 41000)
Car.create(country_id: c1.id, make_id: m1.id, name: "Cayman", color: "Black", image: "c10", featured: true, price: 55000)
Car.create(country_id: c1.id, make_id: m1.id, name: "Cayman", color: "Black", image: "c11", price: 52000)
Car.create(country_id: c1.id, make_id: m1.id, name: "Cayman", color: "White", image: "c12", price: 45667)
Car.create(country_id: c1.id, make_id: m1.id, name: "Panamera", color: "Silver", image: "c13", price: 128990)
Car.create(country_id: c1.id, make_id: m1.id, name: "Panamera", color: "Black", image: "c14", price: 111000)
Car.create(country_id: c2.id, make_id: m3.id, name: "California", color: "Silver", image: "c15", price: 225000)
Car.create(country_id: c2.id, make_id: m3.id, name: "California", color: "Red", image: "c16", price: 214990, featured: true)
Car.create(country_id: c2.id, make_id: m3.id, name: "California", color: "Red", image: "c17", price: 221000)
Car.create(country_id: c2.id, make_id: m3.id, name: "458-Italia", color: "Red", image: "c18", price: 297000)
Car.create(country_id: c2.id, make_id: m3.id, name: "458-Italia", color: "White", image: "c19", price: 275000)
Car.create(country_id: c1.id, make_id: m2.id, name: "SLS-AMG", color: "Silver", image: "c20", price: 188000)
Car.create(country_id: c1.id, make_id: m2.id, name: "SLS-AMG", color: "Black", image: "c21", price: 211000)
Car.create(country_id: c1.id, make_id: m2.id, name: "SLS-AMG", color: "Black", image: "c22", price: 195000)
Car.create(country_id: c2.id, make_id: m4.id, name: "Gallardo", color: "Yellow", image: "c23", price: 275000)
Car.create(country_id: c2.id, make_id: m4.id, name: "Gallardo", color: "Yellow", image: "c24", price: 269000, featured: true)
Car.create(country_id: c2.id, make_id: m4.id, name: "Gallardo", color: "Silver", image: "c25", price: 220000)
Car.create(country_id: c2.id, make_id: m4.id, name: "Aventador", color: "White", image: "c26", price: 311000)
Car.create(country_id: c3.id, make_id: m5.id, name: "Volente", color: "Silver", image: "c27", price: 124000)
Car.create(country_id: c3.id, make_id: m5.id, name: "Volente", color: "Black", image: "c28", price: 113000)
Car.create(country_id: c3.id, make_id: m5.id, name: "DBS", color: "Red", image: "c29", price: 182000)
Car.create(country_id: c3.id, make_id: m5.id, name: "DBS", color: "Black", image: "c30", price: 179999)
Car.create(country_id: c3.id, make_id: m5.id, name: "DBS", color: "Silver", image: "c31", price: 172500)
Car.create(country_id: c3.id, make_id: m6.id, name: "Continental-GT", color: "White", image: "c32", price: 188888, featured: true)
Car.create(country_id: c3.id, make_id: m6.id, name: "Continental-GT", color: "Black", image: "c33", price: 187220)
Car.create(country_id: c3.id, make_id: m6.id, name: "Continental-GT", color: "Silver", image: "c34", price: 180000)
Car.create(country_id: c1.id, make_id: m8.id, name: "Veyron", color: "Silver", image: "c35", price: 1100000, featured: true)
