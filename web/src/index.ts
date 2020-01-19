// import { User } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();

// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
//   console.log('User is changed');
// });

// user.set({ name: 'new some name' });
// user.fetch();

// user.save();
