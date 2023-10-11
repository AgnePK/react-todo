import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
const ToDoItem = (props) => {
	let itemHTML = (
		<>
			{props.todo.text}
			<Badge
				onClick={() => props.markAsDone(props.todo.id)}
				pill
				bg="success"
				className="float-end"
			>
				&#10003;
			</Badge>
			
			<Badge
				onClick={() => props.toDelete(props.todo.id)}
				pill
				bg="danger"
				className="float-end"
			>
				&#10003;
			</Badge>
		</>
	);
	if (props.todo.done) {
		itemHTML = (
			<>
				<span className="done">{props.todo.text}</span>
				<span className="float-end">&#128077;</span>
			</>
		);
	}

	return <ListGroup.Item>{itemHTML}</ListGroup.Item>;
};
export default ToDoItem;
