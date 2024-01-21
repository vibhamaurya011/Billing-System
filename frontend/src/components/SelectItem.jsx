import React from 'react'

function SelectItem() {
  return (
    <div style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
      <h3>Select Items</h3>
      <select style={{}}>
        <option>Select Item</option>
        <option>Mobile</option>
        <option>Laptop</option>
        <option>Tablet</option>
      </select>
      <input type='number' placeholder='Quantity'/>
      <button>Add</button>
    </div>
  )
}

export default SelectItem
