import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Wetube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    return res.redirect(routes.home);
  }
  return next();
};

export const onlyPrivate = (req, res, next) => {
  if (!req.user) {
    return res.redirect(routes.home);
  }
  return next();
};

export const uploadVideo = multerVideo.single('videoFile');
