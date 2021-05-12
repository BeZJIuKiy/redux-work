import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './acyncAction/customers';

function App() {

  const cash = useSelector(state => state.cash.cash);                 // Получаем состояние cash
  const customers = useSelector(state => state.customers.customers);  // Получаем состояние customer
  const dispatch = useDispatch();                                     // Чтобы изменить состояние - нужен Dispatch



  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  }
  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer));
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'}>
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0
        ?
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          )}
        </div>

        :
        <div>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
