const {Users} = require('./users');
const expect = require('expect');


describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });


  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jose',
      room: 'The Cool Room'
    };

    var responseUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userList = users.removeUser('1');

    expect(userList).toEqual([{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);
  });

  it('should not remove user', () => {
    var userList = users.removeUser('5');

    expect(userList).toEqual([{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]);
  });

  it('should find user', () => {
    var user = users.getUser('1');

    expect(user).toEqual({
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    });
  });

  it('should not find user', () => {
    var user = users.getUser('5');

    expect(user).toEqual({});
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

});