import { TodoContext } from '@/components/TodoContext';

import Todo from '@/components/Todo';
import HeadPage from '@/components/HeadPage';

export default function Home() {
  return (
    <>
      <HeadPage title="Todo" />
      <TodoContext>
        <Todo customClass="To-do-list" />
      </TodoContext>
    </>
  );
}
