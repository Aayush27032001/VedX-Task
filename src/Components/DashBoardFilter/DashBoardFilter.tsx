import "./DashBoardFilter.scss"
import React, { useState } from 'react'
import { Order } from "../Dashboard/DashBoard"
import FilterOptions from "./FilterOptions"

const DashBoardFilter: React.FC<{ SearchName: any, data: Order[], filterFunction:any}> = ({ SearchName, data, filterFunction}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className="dashboard-top">
            <div className="top">
                <div className="allorder-container">
                    All Orders <span>{data.length}</span>
                </div>
                <div className="total-results">
                    Showing {data.length} out of {data.length} results
                </div>
            </div>
            <div className="bottom">
                <div className="search-input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input onChange={(e) => { SearchName(e) }} type="text" placeholder="Search By Customer Name" />
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="filter-dropdown" onMouseLeave={()=>{setIsOpen(false)}}>
                    <button className="pointer-cursor" onClick={()=>{setIsOpen(!isOpen)}}><i className="fa-solid fa-arrow-down-wide-short"></i> Filter</button>
                    {isOpen && <FilterOptions filterFunction={filterFunction}/>}
                </div>
            </div>
        </div>
    )
}

export default DashBoardFilter