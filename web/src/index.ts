import { User } from './models/User';

const user = new User({ name: 'userName', age: 33 });

user.on('change', () => {
  console.log('My name is name!');
});

user.trigger('change');
