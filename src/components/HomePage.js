import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

const HomePage = () => {
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/company")
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setCompanyList(res.data);
        console.log(companyList);
      })
      .catch((err) => console.log(err));

    // fetch("http://localhost:4000/company", {
    //   method: "GET",
    // }).then((res) => {
    //   console.log(res));
    // });
  }, []);

  const deleteRecord = async (id) => {
    let result = await fetch(`http://localhost:5000/company/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Recode Deleted");
    }
  };
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name Of Client</th>
            <th>Name Of Company</th>
            <th>Turn over</th>
            <th>Branch</th>
            <th>Cars</th>
            <th>Opration</th>
          </tr>
          {companyList &&
            companyList.map((i, index) => {
              return (
                <tr key={i._id}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.company}</td>
                  <td>{i.turnover}</td>
                  <td>{JSON.stringify(i.place)}</td>
                  <td>{i.cars.toString()}</td>
                  <td>
                    <button onClick={() => deleteRecord(i._id)}>Delete</button>
                    <Link to={"/edit/" + i._id} className="update">
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
        </thead>
      </table>
    </div>
  );
};

export default HomePage;
