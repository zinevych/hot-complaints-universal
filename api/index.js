import request from 'request';
import url from 'url';

module.exports = function(app) {
  const urls = {
    reports: 'http://localhost:3001/reports'
  }

  app.get('/api/reports', function(req, res) {
    req.pipe(
      request(urls.reports)
    ).pipe(res);
  });
};