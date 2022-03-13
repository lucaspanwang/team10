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
  const [foodAmount, setFoodAmount] = useState(0);

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
    setFoodName(document.querySelector(".food-list").value);
  };

  const urgentChange = () => {
    setUrgent(Number(document.getElementById("urgent-level").value));
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (
      partner === "" ||
      email === "" ||
      city === "City" ||
      postcode === "" ||
      foodName === ""
    ) {
      alert("Please complete the form!");
    } else {
      let foodList = [];
      let food = {};
      food[foodName] = foodAmount;
      foodList.push(food);
      let todayDate = new Date().toISOString().slice(0, 10);
      fetch(`http://localhost:4000/requestfood`, {
        method: "POST",
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "partner-name": partner,
          city: city,
          postcode: postcode,
          "request-food-list": foodList,
          "request-date": todayDate,
          "urgent-level": urgent,
        }),
      })
        .then((res) => res.text())
        .then((text) => console.log(text))
        .then(alert("You have succuessfully submit your request!"))
        .then(window.location.reload());
    }
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
                  setEmail(document.querySelector("#contact-email").value);
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
                  setPostcode(document.querySelector("#postcode").value);
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
                className="suf-input2"
                id="food-amount"
                type="number"
                placeholder="kg"
                onBlur={() => {
                  setFoodAmount(
                    Number(document.getElementById("food-amount").value)
                  );
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
