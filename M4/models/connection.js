class Connection {
    constructor(ID, name, topic, details, date){
    this.ID = ID;
    this.name = name;
    this.topic = topic;
    this.details = details;
    this.date = date;
    }
    getID = function(){
        return this.ID;
    };
    setID = function(ID) {
        this.ID = ID;
    };

    getName = function () {
        return this.name;
    };
    setName = function (name) {
        this.name = name;
    };
    getTopic = function () {
        return this.topic;
    };
    setTopic = function (topic) {
        this.topic = topic;
    };
    getDetails = function () {
        return this.details;
    };
    setDetails = function (details) {
        this.details = details;
    };
    getDate = function () {
        return this.date;
    };
    setDate = function (date) {
        this.date = date;
    };
    getRSVP = function() {
        return this.rsvp;
    };
    setRSVP = function (rsvp) {
        this.rsvp = rsvp;
    };




}
module.exports = Connection;