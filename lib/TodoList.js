import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import { compose, map, prop } from 'ramda';

const TodoList = compose(Container, List, map(ListItem), prop('todos'));

export default TodoList;
