import { ListGroup, ListGroupItem } from "react-bootstrap";

function Sidebarlist() {
    return(
        <ListGroup  >
            <ListGroupItem ><a href="#userTable"> User List</a></ListGroupItem>
            <ListGroupItem ><a href="userForm">Add User</a></ListGroupItem>
            <ListGroupItem> Item1</ListGroupItem>
        </ListGroup>
    );
}

export default Sidebarlist;