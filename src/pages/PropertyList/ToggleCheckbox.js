import Form from 'react-bootstrap/Form';

function SelectBasicExample({data,checkHeading,handleChange,actionType}) {

  return (
    <Form.Select style={{width:'200px',display:'flex',height:'40px'}} onChange={(e)=>handleChange(actionType,e.target.value)} aria-label="Default select example">
      <option value={`All`}>{checkHeading}</option>
     {checkHeading!=='Property Type'?
     checkHeading==='City'?(data.map(item=><option value={item.slice(item.length-4,item.length)}>{item.slice(0,item.length-4)}</option>)):
     (data.map(item=><option   value={item}>{item}</option>)):
     (data.map(item=><option  value={item.ApiQuery}>{item.type}</option>))
    }
    </Form.Select>
  );
}

export default SelectBasicExample;