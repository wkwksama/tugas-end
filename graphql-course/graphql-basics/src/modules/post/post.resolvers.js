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
    posts(parent, args/* , ctx, info */) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    post() {
      return {
        id: '092',
        title: 'GraphQL 101',
        body: '',
        published: false,
      };
    },
  },

  Post: {
    author(parent) {
      return users.find((user) => user.id === parent.author);
    },
  },
};
