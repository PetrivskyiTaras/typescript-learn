import { User } from './models/User';

const user = new User({ name: 'new user', age: 1 });

user.save();
