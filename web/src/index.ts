import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  console.log('User is changed');
});

// user.set({ name: 'new some name' });
user.fetch();

// user.save();
