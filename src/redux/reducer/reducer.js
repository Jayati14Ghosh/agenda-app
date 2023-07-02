import {
  ADD_TODO,
  CHECKBOX_UPDATE,
  DELETE_ALL,
  DELETE_SINGLE_ITEM,
  EDIT_SINGLE_ITEM
} from '../constants/constants.js';

const initialState = [
  {
    id:1,
    title: 'List of arts in 2023',
    description: '3 canvas painting 12*16 acrylic, 1 oil colour canvas painting 12*16',
    completed: false
  },
  {
    id:3,
    title: 'Poppagate new plants in Monsoon',
    description: 'Jasmine, Bougainvillea, Peach Rose',
    completed: false
  },
  {
    id:4,
    title: 'Shopping list',
    description: 'Mango, Banana, milk, curd, egg, spinach',
    completed: true
  }
]

export const agendaReducer=(state=initialState, action)=>{
  switch (action.type) {

    case ADD_TODO:
    return [...state, action.payload];

    case CHECKBOX_UPDATE:
    const itemId = action.payload;
    const checkboxNewArray = [];
    state.map((stateItem)=>{
        if(itemId===stateItem.id){
          stateItem.completed = !stateItem.completed;
        }
        checkboxNewArray.push(stateItem);
    })
    return checkboxNewArray;


    case DELETE_ALL:
    const deletedState = [];
    return deletedState;


    case DELETE_SINGLE_ITEM:
    const delitem = action.payload;
    const filterDeleteItem = state.filter((stateItem)=>stateItem.id!==delitem.id);
    return filterDeleteItem;


    case EDIT_SINGLE_ITEM:
      const editedItem = action.payload;
      const editedNewArray = [];
      state.map((stateItem)=>{
      if(editedItem.id===stateItem.id){
          stateItem.id = editedItem.id;
          stateItem.title= editedItem.title;
          stateItem.description= editedItem.description;
          stateItem.completed= editedItem.completed;
      }
      editedNewArray.push(stateItem);
    });
    return editedNewArray


    default: return state

  }
}
