import Form from 'react-bootstrap/Form';

function SelectBasicExample({data}) {

  return (
    <Form.Select style={{width:'200px',display:'flex'}} aria-label="Default select example">
      <option>Open this select menu</option>
      {data.map(item=><option value={item}>{item}</option>)}
    </Form.Select>
  );
}

export default SelectBasicExample;