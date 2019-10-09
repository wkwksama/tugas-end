import uuidv4 from 'uuid/v4';

const users = [{
  id: '1',
  name: 'Andrew',
  email: 'andrew@example.com',
  age: 27,
}, {
  id: '2',
  name: 'Sarah',
  email: 'sarah@example.com',
}, {
  id: '3',
  name: 'Mike',
  email: 'mike@example.com',
}];


export default {
  Query: {
    users(parent, args/* , ctx, info */) {
      if (!args.query) {
        return users;
      }

      return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
      };
    },
  },

  Mutation: {
    createUser(parent, args) {
      const emailTaken = users.some((user) => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email taken');
      }

      const user = {
        id: uuidv4(),
        ...args.data,
      };

      users.push(user);

      return user;
    },
    deleteUser(parent, args) {
      const userIndex = users.findIndex((user) => user.id === args.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUsers = users.splice(userIndex, 1);


      return deletedUsers[0];
    },
  },

  User: {
  },
};
