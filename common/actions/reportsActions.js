import {get, post, put, postWithFile} from '../helpers/rest'
export const GET_REPORTS = 'GET_REPORTS';
export const REPORT_POST = 'REPORT_POST';
export const REPORT_LIKE = 'REPORT_LIKE';
export const CHANGE_NEW_REPORT_FIELD = 'CHANGE_NEW_REPORT_FIELD';

export const getReports = () => {
  return dispatch => {
    get('/api/reports?_expand=user').then((result) => {
      dispatch({
        type: GET_REPORTS,
        data: result
      });
    });
  };
};

export const like = (payload) => {
  return dispatch => {
    return put(`/api/reports/${payload.id}`, {
      likes: (payload.likes || 0) + 1,
      title: payload.title,
      text: payload.text,
      marker: payload.marker,
      photo: payload.photo,
      userId: payload.userId
    }).then((result) => {
      dispatch({
        type: REPORT_LIKE,
        data: result
      });
    })
  }
};

export const postReport = (payload) => {
  return dispatch => {
    let results = {};
    get(`/api/users?email=${payload.email}`).then((result) => {
      if (result.length > 0) {
        return result[0];
      }
      else {
        const randomizer = Math.floor((Math.random() * 1000) + 100);

        return post('/api/users', {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          avatar: `https://api.adorable.io/avatars/100/abott${randomizer}@adorable.io.png`
        });
      }
    }).then((userObj) => {
      results.user = userObj;
      return postWithFile('/api/reports', {
        title: payload.title,
        text: payload.text,
        marker: payload.marker,
        userId: userObj.id,
        likes: payload.likes
      }, payload.photo).then((result) => {
        results.report = result;
        dispatch({
          type: REPORT_POST,
          data: results
        });
      })
    })
  }
};

export const changeNewReportField = (payload) => ({
  type: CHANGE_NEW_REPORT_FIELD,
  data: payload
});