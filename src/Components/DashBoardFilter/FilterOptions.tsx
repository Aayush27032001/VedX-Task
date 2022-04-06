import "./FilterOptions.scss"
import React from 'react'

const FilterOptions: React.FC<{ filterFunction: any }> = ({ filterFunction }) => {

  return (
    <div className="modal-container">
      <div onClick={() => { filterFunction("All") }}>All Orders</div>
      <div onClick={() => { filterFunction("Delivered") }}>Delivered</div>
      <div onClick={() => { filterFunction("Completed") }}>Completed</div>
      <div onClick={() => { filterFunction("") }}>Prepared</div>
    </div>
  )
}

export default FilterOptions