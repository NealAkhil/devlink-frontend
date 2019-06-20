import { createStore }  from 'redux'
import reducer from '../reducers/index'

const initialState={i_am: "", i_like:"", tech:""}

export const store= createStore(reducer, initialState);
