import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id}>
              <strong>Mesa {order.table}</strong>
              <span>
                {order.products.length}{' '}
                {order.products.length === 1 ? 'item' : 'itens'}
              </span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}