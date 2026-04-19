import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

export default function TodoList() {
	let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false }]);
	let [newTodo, setNewTodo] = useState("");

	let addNewTask = () => {
		setTodos((prevTodos) => {
			return [...todos, { task: newTodo, id: uuidv4() }];
	});
		setNewTodo("");
	};

	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};
	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
	};

	let upperCaseAll = () => {
		setTodos((prevTodos) => (
			prevTodos.map((todo) => {
				return{
					...todo,
					task: todo.task.toUpperCase(),
				};
			})
		));
	};

	let lowerCaseAll = () => {
		setTodos((prevTodos) => (
			prevTodos.map((todo) => {
				return{
					...todo,
					task: todo.task.toLowerCase(),
				};
			})
		));
	};

	let upperCaseOne = (id) => {
		setTodos((prevTodos) => (
			prevTodos.map((todo) => {
				if(todo.id === id){
				return{
					...todo,
					task: todo.task.toUpperCase(),
					};
				} else {
					return todo;

				}
			})
		));
	};
	let isDoneOne = (id) => {
		setTodos((prevTodos) => (
			prevTodos.map((todo) => {
				if(todo.id === id){
				return{
					...todo,
					isDone:true,
					};
				} else {
					return todo;

				}
			})
		));
	};
	let isDoneAll = () => {
		setTodos((prevTodos) => (
			prevTodos.map((todo) => {
				return{
					...todo,
					isDone:true,
				};
			})
		));
	};

	return (
		<div>
			<input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
			<button onClick={addNewTask}>Add Task</button>
			<hr/>
			<h4>Tasks Todo</h4>
			<ul>
				{
					todos.map((todo) => (
						<li key={todo.id}>
							<span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
								{todo.task}
							</span>
							<button onClick={() => deleteTodo(todo.id)}>Delete</button>
							<button onClick={() => isDoneOne(todo.id)}>Mark task as done</button>
						</li>
					))
				}
			</ul>
			<button onClick={isDoneAll}>Mark all as Done</button>
		</div>
	)
}