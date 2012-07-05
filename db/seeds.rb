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
c4 = Country.create(name: "United States")

m1 = Make.create(country_id: c1.id, name: "Porsche")
m2 = Make.create(country_id: c1.id, name: "Mercedes")
m3 = Make.create(country_id: c2.id, name: "Ferrari")
m4 = Make.create(country_id: c2.id, name: "Lamborghini")
m5 = Make.create(country_id: c3.id, name: "Aston Martin")
m6 = Make.create(country_id: c3.id, name: "Bentley")
m7 = Make.create(country_id: c4.id, name: "Chevrolet")

Car.create(make_id: m1.id, name: "911", color: "Black", image: "c1", price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Yellow", image: "c2", price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Silver", image: "c3", price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Red", image: "c4", featured: true, price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Red", image: "c5", price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Red", image: "c6", price: 59998)
Car.create(make_id: m1.id, name: "911", color: "Black", image: "c7", price: 59998)
Car.create(make_id: m1.id, name: "Boxster", color: "Silver", image: "c8", price: 59998)
Car.create(make_id: m1.id, name: "Boxster", color: "Red", image: "c9", price: 59998)
Car.create(make_id: m1.id, name: "Cayman", color: "Black", image: "c10", featured: true, price: 59998)
Car.create(make_id: m1.id, name: "Cayman", color: "Black", image: "c11", price: 59998)
Car.create(make_id: m1.id, name: "Cayman", color: "White", image: "c12", price: 59998)
Car.create(make_id: m1.id, name: "Panamera", color: "Silver", image: "c13", price: 59998)
Car.create(make_id: m1.id, name: "Panamera", color: "Black", image: "c14", price: 59998)
Car.create(make_id: m3.id, name: "California", color: "Silver", image: "c15", price: 59998)
