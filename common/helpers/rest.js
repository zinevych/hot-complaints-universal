import request from 'superagent';

export function get(url) {
  return new Promise(function (resolve, reject) {
    request.get(url).type('json')
      .end(function (err, res) {
        if (err) reject();
        resolve(res.body);
      });
  });
}

export function post(url, body) {
  return new Promise(function (resolve, reject) {
    request.post(url)
      .send(body)
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) reject();
        resolve(res.body);
      });
  })
}

export function postWithFile(url, body, file) {
  return new Promise(function (resolve, reject) {
    request.post(url)
      .field('title', body.title)
      .field('text', body.text)
      .field('userId', body.userId)
      .field('marker[lat]', body.marker.lat || '')
      .field('marker[lng]', body.marker.lng || '')
      .attach('image', file)
      .end(function (err, res) {
        if (err) reject();
        resolve(res.body);
      });
  })
}

export function put(url, body) {
  return new Promise(function (resolve, reject) {
    request.put(url)
      .send(body)
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        if (err) reject();
        resolve(res.body);
      });
  })
}