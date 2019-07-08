import passport from 'passport';
import User from './models/user';

passport.use(User.createStrategy());
