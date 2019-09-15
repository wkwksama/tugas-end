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

let posts = [{
  id: '10',
  title: 'GraphQL 101',
  body: 'This is how to use GraphQL...',
  published: true,
  author: '1',
}, {
  id: '11',
  title: 'GraphQL 201',
  body: 'This is an advanced GraphQL post...',
  published: false,
  author: '1',
}, {
  id: '12',
  title: 'Programming Music',
  body: '',
  published: false,
  author: '2',
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

      posts = posts.filter((post) => {
        const match = post.author === args.id;
        return !match;
      });

      return deletedUsers[0];
    },
  },

  User: {
    posts(parent) {
      return posts.filter((post) => post.author === parent.id);
    },
  },
};
