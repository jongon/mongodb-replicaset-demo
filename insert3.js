db.users.insert({ name: "Erik", lastName: "Campos"})
db.users.updateOne({ name: "Jon" }, { $set: { lastName: "Gonzalez" } })
db.users.remove({ name: "Camila"}, { justOne: true})