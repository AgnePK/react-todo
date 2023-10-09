import Card from "react-bootstrap/Card";
import { useState } from "react";
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

	const [textInput, setTextInput]= useState("")

	const handleTextInput = (e) =>{
		setTextInput(e.target.value);
	}

	let ToDoItems = list.map((item) => {
		return <ToDoItem key ={item.id} ToDo={item} />;
	});
	return (
		<Card>
			<Card.Header>To Do List</Card.Header>
			<Card.Body>
				<ListGroup>{ToDoItems}</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type="text" onChange={handleTextInput} value={textInput} />
				<Button variant="primary" className="float-end">
					Add
				</Button>
			</Card.Footer>
		</Card>
	);
};
export default ToDoList;
