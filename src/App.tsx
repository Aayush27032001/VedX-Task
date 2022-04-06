import React, { useState, useEffect } from 'react';
import './App.css';
import DashBoard from './Components/Dashboard/DashBoard';
import { Order } from './Components/Dashboard/DashBoard';
import DashBoardFilter from './Components/DashBoardFilter/DashBoardFilter';

function App() {

  const [data, setData] = useState<Order[]>();
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState<Order[]>();

  const FetchData = () => {

    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((res) => {
        res.json()
          .then((dataRes) => {
            setData(dataRes);
            setFilterData(dataRes);
            // console.log(dataRes);
            setLoading(false);
          })
      })
  }

  const SearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      // console.log("inside if");

      setFilterData(data);
    } else {
      // console.log("inside Else");

      const fillter = data?.filter((usr) => usr.customer.toLowerCase().includes(e.target.value.toLowerCase()))
      // console.log(fillter);

      setFilterData(fillter)

    }
  }

  const filterByStatus = (status: string) => {
    if (status === "All") {
      setFilterData(data)
    }
    else if (status === "Completed") {
      const filter = data?.filter((usr) => {
        return usr.status === "Completed";
      })
      setFilterData(filter);
    }
    else if (status === "Delivered") {
      const filter = data?.filter((usr) => {
        return usr.status === "Delivered";
      })
      setFilterData(filter);
    }
    else {
      const filter = data?.filter((usr) => {
        return usr.status !== "Delivered" && usr.status !== "Completed";
      })
      setFilterData(filter);
    }
  }

  useEffect(() => {
    FetchData();
  }, [])

  return (
    <div className="App">
      {loading && <h1 className="loader">Loading...</h1>}
      <div className="container table-container">
        {!loading && <>
          <DashBoardFilter SearchName={SearchName} data={filterData!} filterFunction={filterByStatus} />
          <DashBoard data={filterData!} />
        </>}
      </div>
    </div>
  );
}

export default App;
