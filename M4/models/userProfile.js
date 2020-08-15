let list = [];
var ID = null;
class UserProfile {
    constructor(ID) {
        this.ID = ID;
    }
    getID = function () {
        return ID;
    }
    getConnections = function () {
        return list;
    }
    updateRSVP = function (rsvp, connections) {
        if(list.length > 0) {
            for(let i = 0; i < list.length; i++) {
                if(connections.getID() === list[i].getID()) {
                    list[i].setRSVP(rsvp);
                    if(rsvp.toUpperCase() == "NO") {
                        this.removeConnections(connections);
                    }
                    return;
                }
            }
            this.addConnections(connections);
            this.updateRSVP(rsvp, connections);
        } else {
            this.addConnections(connections);
            console.log(list);
            this.updateRSVP(rsvp, connections);
        }
    }
    removeConnections = function (connect) {
        for(let i = 0; i < list.length; i++) {
            if(connect === list[i]) {
                list.splice(i, 1);
                return;
            }
        }
    }
    addConnections = function (connect) {
        for(let i = 0; i < list.length; i++) {
            if(connect === list[i]) {
                list[i] = connect;
                return;
            }
        }
        list.push(connect);
    }
    getConnections = function (id) {
        for(let i = 0; i < list.length; i++) {
            if(id === list[i].getID()) {
                return list[i];
            }
        }
    }
}
module.exports = UserProfile