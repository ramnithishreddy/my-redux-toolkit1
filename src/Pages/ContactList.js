import React, { useEffect, useState } from "react";

export default function ContactList() {
  const [data, setData] = useState([]);
  const [btn, setbtn] = useState(false);
  const [searched, setsearched] = useState("");
  const count = calculatecount();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("formDataArray")) || [];
    setData(store);
  }, []);
  console.log(data, "1010");

  const handleChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setbtn(true);
      setData(
        data.map((ite) => {
          return { ...ite, check: true };
        })
      );
    } else {
      setbtn(false);
      setData(
        data.map((ite) => {
          return { ...ite, check: false };
        })
      );
    }
  };

  const handleClick = (i) => {
    setbtn(true);
    setData(
      data.map((item) => {
        if (item.subject === i.subject) {
          return { ...item, check: !item.check };
        }
        return item;
      })
    );
  };

  function calculatecount() {
    let num = data.filter((item) => item.check === true);
    return num.length;
  }
  console.log(count, "COUNT");

  const handledelete = () => {
    const filtered = data.filter((item) => item.check !== true);
    setData(filtered);
  };

  const handlesearch = (e) => {
    setsearched(e.target.value);
  };
  const searcheddata = data.filter((item) => item.name.includes(searched));

  return (
    <div className="List-container">
      {data.length > 0 ? (
        <>
          <h2>Contact List</h2>
          <input
            type="search"
            placeholder="Enter name to search"
            onChange={handlesearch}
          />
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    checked={count === data.length ? true : false}
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {searcheddata.map((item, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      onClick={() => {
                        handleClick(item);
                      }}
                    >
                      <td>
                        <input type="checkbox" checked={item.check} />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.subject}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          {btn && count !== 0 ? (
            <div>
              <h2 className={"back"}>
                {count} selected{" "}
                <button className="button" onClick={handledelete}>
                  Completed
                </button>
              </h2>
            </div>
          ) : null}
        </>
      ) : (
        "No Contacts Data Found"
      )}
    </div>
  );
}
