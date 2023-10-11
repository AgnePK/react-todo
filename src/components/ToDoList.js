import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
	let initialList = [
		{ id: 1, text: "Do laundry", done: true },
		{ id: 2, text: "Buy Milk", done: false },
		{ id: 3, text: "Homework", done: true },
		{ id: 4, text: "Homework", done: false },
		{ id: 5, text: "Homework", done: false },
	];

	const [list, setList] = useState(initialList);

	const [textInput, setTextInput] = useState("");

	const handleTextInput = (e) => {
		setTextInput(e.target.value);
	};

	const addToDoItem = () => {
		let newTodo = {
			id: list[list.length - 1].id + 1,
			text: textInput,
			done: false,
		};

		setList((prevList) => [...prevList, newTodo]);

		setTextInput("");
	};

	const markAsDone = (id) => {
		// console.log(id)
		const newList = list.map((item) => {
			if (item.id === id) {
				item.done = true;
			}
			return item;
		});

		setList(newList);
	};

	const toDelete = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	useEffect(() => {
		localStorage.setList("list", JSON.stringify(list));
	}, [list]);
	useEffect(() => {
		const list = JSON.parse(localStorage.getItem('list'));
		if (list) {
		 setList(list);
		}
	  }, []);

	let ToDoItems = list.map((item) => {
		return (
			<ToDoItem
				key={item.id}
				todo={item}
				markAsDone={markAsDone}
				toDelete={toDelete}
			/>
		);
	});
	return (
		<Card>
			<Card.Header>To Do List</Card.Header>
			<Card.Body>
				<ListGroup>{ToDoItems}</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type="text" onChange={handleTextInput} value={textInput} />
				<Button variant="primary" className="float-end" onClick={addToDoItem}>
					Add
				</Button>
			</Card.Footer>
		</Card>
	);
};
export default ToDoList;
