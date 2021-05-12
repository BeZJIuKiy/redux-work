// Описание типов данных STATE
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

// Перечисление всех констант для ACTIONS
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

// Создание для каждого ACTION-a - отдельного интерфейса
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccsessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

// Объединяем все типы ACTIONS в один
export type UserAction = FetchUsersAction | FetchUsersSuccsessAction | FetchUsersErrorAction;