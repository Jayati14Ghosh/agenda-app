import {
  ADD_TODO,
  CHECKBOX_UPDATE,
  DELETE_ALL,
  DELETE_SINGLE_ITEM,
  EDIT_SINGLE_ITEM
} from '../constants/constants.js';

export const addSingleTodoAction=(newAgendaArray)=>{
  return{
    type: ADD_TODO,
    payload: newAgendaArray
  }
}

export const checkboxClickedAction=(itemId)=>{
  return{
    type: CHECKBOX_UPDATE,
    payload: itemId
  }
}

export const deleteAllAction=()=>{
  return{
    type: DELETE_ALL
  }
}

export const singleItemDeleteAction=(item)=>{
  return{
    type: DELETE_SINGLE_ITEM,
    payload: item
  }
}

export const singleItemEditAction=(editedItem)=>{
  return{
    type: EDIT_SINGLE_ITEM,
    payload: editedItem
  }
}
