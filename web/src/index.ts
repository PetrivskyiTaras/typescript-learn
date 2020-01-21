import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'some name', age: 45 });

const userEdit = new UserEdit(document.getElementById('root'), user);
userEdit.render();

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();

// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
//   console.log('User is changed');
// });

// user.set({ name: 'new some name' });
// user.fetch();

// user.save();
