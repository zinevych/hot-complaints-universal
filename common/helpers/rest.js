import request from 'superagent';

export function get(url) {
  return new Promise(function (resolve, reject) {
    request.get(url).
    type('json').
    end(function (err, res) {
      if(err) reject()
      resolve(res.body);
    });
  });
}