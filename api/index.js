import request from 'request';
import url from 'url';

module.exports = function(app) {
  const urls = {
    reports: 'http://localhost:3001/reports',
    users: 'http://localhost:3001/users'
  }

  app.get('/api/reports?*', function(req, res) {
    req.pipe(request({
      url: urls.reports,
      qs: req.query
    })).pipe(res);
  });
  
  app.post('/api/reports', function(req, res) {
    req.pipe(
      request(urls.reports)
    ).pipe(res);
  });  
  
  app.put('/api/reports/:id', function(req, res) {
    req.pipe(
      request(urls.reports + `/${req.params.id}`)
    ).pipe(res);
  });  
  
  app.get('/api/users?*', function(req, res) {
    req.pipe(request({
      url: urls.users,
      qs: req.query
    })).pipe(res);
  });
  
  app.post('/api/users', function(req, res) {
    req.pipe(
      request(urls.users)
    ).pipe(res);
  });
};