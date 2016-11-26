import { GET_REPORTS, REPORT_LIKE } from '../actions/reportsActions'

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

    case REPORT_LIKE: {
      let tempList = state.list.map((element) => {
        if (element.id === action.data.id) {
          element.likes = action.data.likes;
        }

        return element;
      });

      return {
        ...state,
        list: tempList
      };
    }

    default:
      return state
  }
};

export default app
