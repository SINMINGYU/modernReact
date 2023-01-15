import React from 'react';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import { RootState } from '../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

function TodoApp() {
	const todos = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();

	const onInsert = (text: string) => {
		dispatch(addTodo(text));
	};

	const onToggle = (id: number) => {
		dispatch(toggleTodo(id));
	};

	const onRemove = (id: number) => {
		dispatch(removeTodo(id));
	};

	return (
		<>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
		</>
	);
}

export default TodoApp;
