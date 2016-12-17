import { VALIDATE_FIELD } from '../actions/formActions'

const initialState = {
  errors: {}
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_FIELD:      
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.data.field]: action.data.message
        }
      };

    default:
      return state
  }
};

export default form
