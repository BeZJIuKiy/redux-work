import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
});

// Создаем свой хук, получаем необходимый тип: 
export type RootState = ReturnType<typeof rootReducer>;