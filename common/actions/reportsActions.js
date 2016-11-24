import {get, post} from '../helpers/rest'
export const GET_REPORTS = 'GET_REPORTS';
export const REPORT_POST = 'REPORT_POST';

export const getReports = () => {
  return dispatch => {
    get('/api/reports?_expand=user').then((result) => {
      dispatch({
        type: GET_REPORTS,
        data: result
      });
    });
  };
}

export const postReport = (payload) => {
  return dispatch => {
    get(`/api/users?email=${payload.email}`).then((result) => {
      if (result.length > 0) {
        return result[0];
      }
      else {
        const randomizer = Math.random() * (1000 - 1) + 1;

        return post('/api/users', {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          avatar: `https://api.adorable.io/avatars/${randomizer}/abott2@adorable.io.png`
        });
      }
    }).then((userObj) => {
      return post('/api/reports', {
        title: payload.title,
        text: payload.text,
        userId: userObj.id
      }).then((result) => {
        dispatch({
          type: REPORT_POST,
          data: result
        });
      })
    })
    
  }
}
