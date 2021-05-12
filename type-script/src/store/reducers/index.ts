import { combineReducers } from "redux";
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    todo: userReducer,
});

// Создаем свой хук, получаем необходимый тип: 
export type RootState = ReturnType<typeof rootReducer>;