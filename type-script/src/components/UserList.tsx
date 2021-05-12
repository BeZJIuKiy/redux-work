import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../store/action-creator/user';

// Примечание: React.FC - обозначение функционального компонента
export const UserList: React.FC = () => {

    // Получаем текущее состояние
    const { users, loading, error } = useTypeSelector(state => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};