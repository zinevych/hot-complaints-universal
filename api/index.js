import request from 'request';
import url from 'url';
import multer  from 'multer';
import cloudinary from 'cloudinary';
import multerCloudinary from 'multer-cloudinary';


module.exports = function (app) {
  const upload = multer({dest: 'uploads/'})
  const urls = {
    reports: 'http://localhost:3001/reports',
    users: 'http://localhost:3001/users'
  };

  cloudinary.config({
    cloud_name: 'dj3gpoate',
    api_key: '125481633421888',
    api_secret: 'KR7gGn0SWVies064S_iYzOrwazM'
  });

  app.get('/api/reports?*', function (req, res) {
    req.pipe(request({
      url: urls.reports,
      qs: req.query
    })).pipe(res);
  });

  app.post('/api/reports', upload.single('image'), function (req, res, next) {

    if (req.file && req.file.path) {
      cloudinary.uploader.upload(req.file.path).then((result) => {
        request.post({
          url: urls.reports,
          json: {
            userId: req.body.userId,
            text: req.body.text,
            title: req.body.title,
            marker: req.body.marker,
            photo: result.url
          }
        }).pipe(res);
      });
    } else {
      request.post({
        url: urls.reports,
        json: {
          userId: req.body.userId,
          text: req.body.text,
          title: req.body.title,
          marker: req.body.marker,
          photo: ''
        }
      }).pipe(res);
    }
  });

  app.put('/api/reports/:id', function (req, res) {
    req.pipe(
      request(urls.reports + `/${req.params.id}`)
    ).pipe(res);
  });

  app.get('/api/users?*', function (req, res) {
    req.pipe(request({
      url: urls.users,
      qs: req.query
    })).pipe(res);
  });

  app.post('/api/users', function (req, res) {
    req.pipe(
      request(urls.users)
    ).pipe(res);
  });
};