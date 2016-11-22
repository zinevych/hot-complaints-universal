import { TOGGLE_DRAWER, TOGGLE_DIALOG} from '../actions/appActions'

const initialState = {
  drawerOpen: false,
  dialogOpen: false
};

const app = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialogOpen: !state.dialogOpen
      };
    
    default:
      return state
  }
};

export default app
