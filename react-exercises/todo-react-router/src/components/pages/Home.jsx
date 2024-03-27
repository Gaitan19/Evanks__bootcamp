import { TodoContext } from '../TodoContext';
import Todo from '../Todo';

const Home = () => {
  return (
    <TodoContext>
      <Todo customClass="To-do-list" />
    </TodoContext>
  );
};

export default Home;
