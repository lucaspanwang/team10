import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("******");
    fetch(`http://localhost:4000/allrequests`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return <p></p>;
}
