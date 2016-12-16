import fetch from 'node-fetch';

module.exports = function() {
  function postReport() {
    return fetch('http://localhost:3001/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: '33333333',
        text: 'werwer',
        title: 'werwe',
        marker: {
          lat: '-33.504759069226075',
          lng: '131.2646484375'
        },
        photo: 'http://res.cloudinary.com/dj3gpoate/image/upload/v1480868703/furyhl3dnt5c83mmw6ox.jpg',
        id: '11111111'
      })
    });
  }

  function postUser() {
    return fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          firstName: 'Іван',
          lastName: 'Сидоренко',
          email: 'ivan@gmail.com',
          avatar: 'https://api.adorable.io/avatars/100/abott644@adorable.io.png',
          id: 33333333
        })
    });
  }

  function deleteReport() {
    return fetch('http://localhost:3001/users/33333333', {
      method: 'DELETE'
    });
  }

  function deleteUser() {
    return fetch('http://localhost:3001/reports/11111111', {
      method: 'DELETE'
    });
  }

  return {
    postReport: postReport,
    postUser: postUser,
    deleteReport: deleteReport,
    deleteUser: deleteUser
  }
};