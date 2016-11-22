import { GET_REPORTS } from '../actions/reportsActions'

const initialState = {
  list: []
};

const app = (state = initialState, action) => {

  switch (action.type) {

    case GET_REPORTS:
      return {
        ...state,
        list: action.data
      };

    default:
      return state
  }
};

export default app
