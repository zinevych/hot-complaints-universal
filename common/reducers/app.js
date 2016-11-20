import { TOGGLE_DRAWER} from '../actions/appActions'

const initialState = {
  drawerOpen: false
};

const app = (state = initialState, action) => {
  console.log('asasas');
  switch (action.type) {
    case TOGGLE_DRAWER:
      console.log('asasasas');
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    
    default:
      return state
  }
};

export default app
