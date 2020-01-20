// import { User } from './models/User';
import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));
userForm.render();

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
