import "./DashBoard.scss";
import React, { useEffect, useState } from 'react';
import DashBoardCard from "../DashBoardCard/DashBoardCard";

export interface Order {
    address: string;
    country: string;
    customer: string;
    date: string;
    order_id: number;
    product_description: string;
    product_title: string;
    status: string
}

const DashBoard: React.FC<{ data: Order[]}> = ({ data }) => {
    
    const [newData, setNewData] = useState(data);
    const [isRev, setIsRev] = useState(false);

    const sortDate = () => {
        if (!isRev) {
            newData.sort((a, b) => {
                const [day, month, year] = a.date.split('/')
                const [day1, month1, year1] = b.date.split('/')
                return (new Date(+year1, parseInt(month1) - 1, +day1).valueOf() - new Date(+year, parseInt(month) - 1, +day).valueOf())
            })
            console.log(newData);
            const sortedData = [...newData];
            setNewData(sortedData);
            setIsRev(true);
        } else {
            console.log("inside else");
            const Data = [...data];
            setNewData(Data);
            setIsRev(false);
        }
    }

    useEffect(()=>{
        setNewData([...data]);
    },[data])

    return (
        <section >
            <div className="dashboard-header-grid">
                <div>ORDER ID</div>
                <div>CUSTOMER</div>
                <div>ADDRESS</div>
                <div>PRODUCT</div>
                <div className="pointer-cursor" onClick={sortDate}>Date Order <i className={isRev ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></div>
                <div>Status</div>
            </div>
            {
                newData.map((usr) => {
                    return <DashBoardCard key={usr.order_id} user={usr} />
                })
            }
        </section>
    )
}

export default DashBoard