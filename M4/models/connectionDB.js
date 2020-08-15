let Connection = require('../models/connection.js');
const list = [
    new Connection (
        "001",
        "Union Lan Party April 2020",
        "Offline Events",
        "Video Game Tournament",
        "04-19-2020"
        ),
    new Connection (
        "002",
        "Counter Strike: Global Offensive Viewing Party",
        "Offline Events",
        "Major Viewing Party",
        "03-22-2020"
    ),

    new Connection (
        "003",
        "Super Smash Brothers Ultimate Bi-Weekly",
        "Offline Events",
        "5$ Venue and 5$ Entry fee to particpate",
        "03-01-2020"


    ),
    new Connection (
        "004",
        "Rainbow 6 Siege Team Tryouts",
        "Online Events",
        "Tryouts for the R6 Team Now",
        "05-12-2020"

    ),
    new Connection (
        "005",
        "Counter String: Global Offensive 10-man's",
        "Online Events",
        "All day after 3pm",
        "03-07-2020"

    ),
    new Connection(
        "006",
        "Overwatch 6v6 Pick up games",
        "Online Events",
        "All Day after 6pm",
        "03-14-2020"
    )



];
class connectionDB {
    getConnections() {
        return list;
    }
    getConnection (ID) {
    for(let i = 0; i < list.length; i++) {
        if(ID === list[i].ID) {
            return list[i];
        }
    }
    }
}
module.exports = connectionDB;

