import React, { useState, useEffect } from "react";
import "./Search.css";
import { cities } from "./Search.constant";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(area,
  beef,
  diary,
  egg,
  fruitnut,
  vegetable,
  mushroom,
  pork,
  chicken,
  otherpoultry) {


  return {
    area,
    beef,
    diary,
    egg,
    fruitnut,
    vegetable,
    mushroom,
    pork,
    chicken,
    otherpoultry
  };
}

const rows = [
  createData('Vancouver', 159, 6.0, 24, 4.0),
  createData('Burnaby', 237, 9.0, 37, 4.3),
];

export default function Search() {
  const [city, setCity] = useState("City");
  useEffect(() => {
    const cityForm = document.querySelector("#city");
    for (let city of cities) {
      const cityOption = document.createElement("option");
      cityOption.innerHTML = city;
      cityForm.appendChild(cityOption);
    }
  }, []);

  const cityChange = () => {
    setCity(document.getElementById("city").value);
  };

  // useEffect(() => {
  //   console.log("******");
  //   fetch(`http://localhost:4000/allrequests`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }, []);

  const showCity = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/citystatistics/${city}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="log-container">
      <div className="suf-box-log">
        <section className="suf-subscription">
          <div className="input-areas">
            <form>
              <select
                className="suf-input-first"
                id="city"
                onChange={cityChange}
              ></select>
            </form>
            <form>
              <button className="suf-submit" onClick={showCity}>Search</button>
            </form>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Area</TableCell>
                  <TableCell align="right">Beef</TableCell>
                  <TableCell align="right">Diary</TableCell>
                  <TableCell align="right">Egg</TableCell>
                  <TableCell align="right">Fruitnut</TableCell>
                  <TableCell align="right">Vegetable</TableCell>
                  <TableCell align="right">Mushroom</TableCell>
                  <TableCell align="right">Pork</TableCell>
                  <TableCell align="right">Chicken</TableCell>
                  <TableCell align="right">Other-poultry</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.area}
                    </TableCell>
                    <TableCell align="right">{row.beef}</TableCell>
                    <TableCell align="right">{row.diary}</TableCell>
                    <TableCell align="right">{row.egg}</TableCell>
                    <TableCell align="right">{row.fruitnut}</TableCell>
                    <TableCell align="right">{row.vegetable}</TableCell>
                    <TableCell align="right">{row.mushroom}</TableCell>
                    <TableCell align="right">{row.pork}</TableCell>
                    <TableCell align="right">{row.chicken}</TableCell>
                    <TableCell align="right">{row.otherpoultry}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </div>
    </div>
  )
}
