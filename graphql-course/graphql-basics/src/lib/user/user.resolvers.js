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

const posts = [{
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

  User: {
    posts(parent) {
      return posts.filter((post) => post.author === parent.id);
    },
  },
};
