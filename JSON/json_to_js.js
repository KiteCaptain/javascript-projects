var json = '{"name":"eugine"}'

const jsonStr = JSON.parse(json)

jsonStr["age"] = 30;
jsonStr.skills = "infinite"
console.log(jsonStr)

const userdata = {
    fname: "kite",
    lname: "eugine",
    location: "earth",
    historu: 102424
}

const jsonObj = JSON.stringify(userdata)
console.log(jsonObj)