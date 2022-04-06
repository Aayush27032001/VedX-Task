import "./DashBoardCard.scss"
import React, { useEffect, useState } from 'react'
import { Order } from '../Dashboard/DashBoard'

const DashBoardCard: React.FC<{ user: Order }> = ({ user }) => {

  const [orderStatus, setOrderStatus] = useState({
    isCompleted : false,
    isDelivered : false,
    default : false
  })

  useEffect(()=>{
    if(user.status==="Completed"){
      setOrderStatus({
        ...orderStatus,
        isCompleted : true
      })
    }else if(user.status==="Delivered"){
      setOrderStatus({
        ...orderStatus,
        isDelivered : true
      })
    }else{
      setOrderStatus({
        ...orderStatus,
        default : true
      })
    }

    // console.log("inside eff");
    
  },[orderStatus,user.status])

  return (
    <div className="dashboard-card">
      <div className="user-id">{user.order_id}</div>
      <div>{user.customer}</div>
      <div>
        <div className="country">{user.country}</div>
        <div className="address">{user.address}</div>
      </div>
      <div>
        <div className="product-title">{user.product_title}</div>
        <div className="product_description">{user.product_description}</div>
      </div>
      <div>{user.date}</div>
      <div>
        <span className={orderStatus.isCompleted ? "order-status completed": 
                        orderStatus.isDelivered ? "order-status delivered": 
                        orderStatus.default ? "order-status default" : "order-status" }>
          {user.status}
        </span>
      </div>
    </div>
  )
}

export default DashBoardCard