import React, { useState, useEffect } from "react";
import "./Request.css";
import { cities, food } from "./Request.constant";

export default function Request() {
  useEffect(() => {
    const cityForm = document.querySelector("#city");
    for (let city of cities) {
      const cityOption = document.createElement("option");
      cityOption.innerHTML = city;
      cityForm.appendChild(cityOption);
    }
    const foodList = document.querySelector(".foodList");
    for (let oneFood of food) { 
      const foodOption = document.createElement("option");
      foodOption.innerHTML = oneFood;
      foodList.appendChild(foodOption);
    }
  }, []);

  const cityChange = () => { };
  
  const foodChange = () => { };

  return (
    <div className="log-container">
      <div className="suf-box-log">
        <section className="suf-subscription">
          <div className="input-areas">
            <form>
              <input
                className="suf-input-first"
                id="partner-name"
                type="text"
                placeholder="Partner Name"
                onBlur={() => {
                  // setUserName(document.getElementById("username").value);
                }}
              />
            </form>
            <form>
              <input
                className="suf-input-first"
                id="contact-email"
                type="text"
                placeholder="Contact Email"
                onBlur={() => {
                  // setUserPwd(document.getElementById("password").value);
                }}
              />
            </form>
            <form>
              <select
                className="suf-input-first"
                id="city"
                onChange={cityChange}
              ></select>
            </form>
            <form>
              <input
                className="suf-input-first"
                id="postcode"
                type="text"
                placeholder="Postcode"
                onBlur={() => {
                  // setUserPwd(document.getElementById("password").value);
                }}
              />
            </form>
            <form>
              <select
                className="suf-input-first"
                id="city"
                onChange={cityChange}
              >
                <option value="">1 (slightly urgent)</option>
                <option value="">2 (medium urgent)</option>
                <option value="">3 (very urgent)</option>
              </select>
            </form>
            
            <form action="">
              <select
                className="suf-select foodList"
                id="food1"
                onChange={foodChange}
              >
              </select>
              <input
                className="suf-input2"
                id="age"
                type="number"
                placeholder="kg"
                onBlur={() => {
                  // setUserAge(document.getElementById("age").value);
                }}
              />
            </form>
            <form>
              <button className="suf-submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
