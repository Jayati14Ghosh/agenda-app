import {agendaReducer} from './reducer/reducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  agendaReducer,
});
