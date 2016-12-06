export const VALIDATE_FIELD = 'VALIDATE_FIELD';
export const VALIDATE_FORM = 'VALIDATE_FORM';

export const validateField = (payload) => {
  const {field, value} = payload;
  let errorObj = {};
  const validObj = {
    field,
    message: ''
  };

  switch (field) {
    case 'firstName':
      errorObj = isEmpty(field, value) || validObj;
      break;
    case 'lastName':
      errorObj = isEmpty(field, value) || validObj;
      break;
    case 'email':
      errorObj = isEmpty(field, value) || validObj;
      break;
  }
  
  return {
    type: VALIDATE_FIELD,
    data: errorObj
  }
};


export const validateFOrm = () => ({
  type: VALIDATE_FORM
});

function isEmpty(field, value) {
  if(!value || value === '') {
    return {
      field: field,
      message: 'це поле є обовязкове до заповнення'
    }
  }
} 
  