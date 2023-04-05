import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialState;
};

const useInput = (valueValidity) => {
  const [inputState, dispatcher] = useReducer(inputReducer, initialState);

  const validValue = valueValidity(inputState.value);
  const invalidValue = !validValue && inputState.isTouched;

  const changeHandler = (event) => {
    dispatcher({ type: 'INPUT', value: event.target.value });
  };
  const blurHandler = () => {
    dispatcher({ type: 'BLUR' });
  };
  const reset = () => {
    dispatcher({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    validValue,
    invalidValue,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
