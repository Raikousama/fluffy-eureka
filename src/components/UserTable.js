import { Table } from "react-bootstrap";
import TableContent from "./TableContent";

function UserTable(params) {
  const userData = params.users;
  return (
    <Table striped bordered hover variant="light" id="userTable">
      <thead className="table-dark">
        <tr>
          <td>First </td>
          <td>Last Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        {userData.map((x) => (
          <TableContent
            name={x.name}
            lname={x.lname}
            email={x.email}
            key={x.id}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
