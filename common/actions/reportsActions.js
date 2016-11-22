import {get} from '../helpers/rest'
export const GET_REPORTS = 'GET_REPORTS';

export const getReports = () => {
  return dispatch => {
    get('/api/reports').then((result) => {
      dispatch({
        type: GET_REPORTS,
        data: result
      });
    });
  };
}
