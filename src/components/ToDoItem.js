import ListGroup from "react-bootstrap/ListGroup";
const ToDoItem = (props) => {
	return <ListGroup.Item>{props.ToDo.text}</ListGroup.Item>;
};
export default ToDoItem;
