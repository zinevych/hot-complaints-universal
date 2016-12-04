import { GET_REPORTS, REPORT_LIKE, CHANGE_NEW_REPORT_FIELD } from '../actions/reportsActions'

const initialState = {
  list: [],
  newReport: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    text: '',
    photo: null,
    likes: 0,
    marker: {}
  }
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

    case CHANGE_NEW_REPORT_FIELD: {      
      return {
        ...state,
        newReport: {
          ...state.newReport,
          ...action.data
        }
      }
    }  

    default:
      return state
  }
};

export default app
