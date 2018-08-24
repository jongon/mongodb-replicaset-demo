let error = true

let res = [
    db.users.insert({ name: "test" })
]

printjson(res)

if (error) {
    print('Error, exiting')
    quit(1)
}