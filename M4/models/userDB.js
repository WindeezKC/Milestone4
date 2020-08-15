let user = {
    first: 'Kellan',
    last: 'Christ',
    email: 'kchris21@uncc.edu',
    password: 'Password'
};
let list = [user];
class userObjects {
    constructor(first, last, email, password, city, zip) {

        this.first = first;
        this.last = last;
        this.email = email;
        this.password = password;
        this.city = city;
        this.zip = zip;
    }
}
getFirst = function () {
    return user.first;
};
setFirst = function (first) {
    user.first = first;
};
getLast = function () {
    return user.last;
};
setLast = function (last) {
    user.last = last;
};
getEmail = function () {
    return user.email;
};
setEmail = function (email) {
    user.email = email;
};
getCity = function () {
    return user.city;
};
setCity = function (city) {
    user.city = city;
};
getZip = function () {
    return user.zip;
};
setZip = function (zip) {
    user.zip = zip;
};
login = function (email, pass) {
    for(let i = 0; i < list.length; i++) {
        if(email == list[i].email && pass == list[i].password) {
            return true;
        }
        else {
            return false;
        }
    }
};
signup = function (first, last, email, password) {
    let user = {
        ID : Math.random(),
        first: first,
        last: last,
        email : email,
        password : password
    }
    list.push(user);
}
module.exports = new userObjects();