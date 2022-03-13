import React, { useState, useEffect } from "react";
import "./Request.css";
import { cities, food } from "./Request.constant";

export default function Request() {
  const [partner, setPartner] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("City");
  const [postcode, setPostcode] = useState("");
  const [urgent, setUrgent] = useState(1);
  const [foodName, setFoodName] = useState("");

  useEffect(() => {
    const cityForm = document.querySelector("#city");
    for (let city of cities) {
      const cityOption = document.createElement("option");
      cityOption.innerHTML = city;
      cityForm.appendChild(cityOption);
    }
    const foods = document.querySelector(".food-list");
    for (let oneFood of food) {
      const foodOption = document.createElement("option");
      foodOption.innerHTML = oneFood;
      foods.appendChild(foodOption);
    }
  }, []);

  const cityChange = () => {
    setCity(document.getElementById("city").value);
  };

  const foodChange = () => {
    setFoodName(document.querySelector(".food-list"));
  };
  
  const urgentChange = () => {
    setUrgent(Number(document.getElementById("urgent-level").value));
  }

  const clickSubmit = (e) => {
    e.preventDefault();
  };

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
                  setPartner(document.querySelector("#partner-name").value);
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
                  setEmail(document.querySelector("#email").value);
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
                  setPostcode(document.getElementById("#postcode").value);
                }}
              />
            </form>
            <form>
              <select
                className="suf-input-first"
                id="urgent-level"
                onChange={urgentChange}
              >
                <option value="1">Urgent Level</option>
                <option value="1">1 (slightly urgent)</option>
                <option value="2">2 (medium urgent)</option>
                <option value="3">3 (very urgent)</option>
              </select>
            </form>

            <form>
              <select
                className="suf-select food-list"
                onChange={foodChange}
              ></select>
              <input
                className="suf-input2 food-amount"
                type="number"
                placeholder="kg"
                onBlur={() => {
                  // setUserAge(document.getElementById("age").value);
                }}
              />
            </form>
            <form>
              <button className="suf-submit" onClick={clickSubmit}>
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
