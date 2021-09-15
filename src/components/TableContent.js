function TableContent(param) {
   
  return (
    <tr>
      <td>{param.name}</td>
      <td>{param.lname}</td>
      <td>{param.email}</td>
    </tr>
  );
}

export default TableContent;
