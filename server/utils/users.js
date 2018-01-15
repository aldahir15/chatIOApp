class Users {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.users.filter((user) => {
      return user.id === id;
    });
    var newUsers = this.users.filter((user) => {
      return user.id !== id; 
    });
    this.users = newUsers;
    return this.users;
  }

  getUser(id) {
    var currUser = {};
    this.users.forEach((user) => {
      if (user.id === id) {
        currUser = user;
      }
    });
    return currUser;
  }

  getUserList(room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var namesArray = users.map((user) => {
      return user.name;
    });
    return namesArray;
  }

}

module.exports = {Users};