import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from './action';

const initialState = [
  {id: nanoid(), name: 'Ремонт микроволновки', price: 5000},
  {id: nanoid(), name: 'Резина для автомобиля', price: 25000},
  {id: nanoid(), name: 'Новая видеокарта', price: 40000},
  {id: nanoid(), name: 'Купить подарки на Новый Год', price: 10000},
  {id: nanoid(), name: 'Сходить к врачу', price: 1500},
];

function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, value} = action.payload;
      return [...state, {id: nanoid(), name, price: value}];
  
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);

    case EDIT_SERVICE:
      const { idEdit, nameEdit, priceEdit } = action.payload;
      const index = state.findIndex(a => a.id === idEdit);
      if (index !== -1) {
        state[index].name = nameEdit;
        state[index].price = priceEdit;
        return state;
      } else {
        return [...state, {id: nanoid(), name: nameEdit, price: priceEdit}];
      }
      
    default:
      return state;
  }
}

export default serviceListReducer;