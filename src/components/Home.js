import React, { useState } from "react";
// import "./App.css";
import Select from "react-select";
// import Multiselect from "multiselect-react-dropdown";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const options = [
  { value: "india", lable: "India" },
  { value: "america", label: "America" },
  { value: "france", label: "France" },
  { value: "england", label: "england" },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    turnover: 0,
    place: [],
    cars: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const validationErrors = {};
    // console.log("Inside Handle change ==>>> ", e);
    // const { name, value } = e.target;
    let name = e.target.name;
    let value = e.target.value;
    console.log("name : " + name + "   ||  Value :  " + value);
    if (name === "name") {
      if (!value.trim()) {
        validationErrors.name = "name is required";
      } else if (!/^[A-z]*$|^[A-z]+\s[A-z]*$/.test(value)) {
        validationErrors.name = "name is not valid";
        e.preventDefault();
      }
    } else if (name === "cars") {
      console.log("Inside Cars");
      let options = document.getElementById("myCompanies").selectedOptions;
      let values = Array.from(options).map(({ value }) => value);
      value = values;
    }
    setFormData({ ...formData, [name]: value });
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // let result = await fetch("http://localhost:4000/company", {
    //   method: "post",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // result = await result.json();
    // console.warn(result);
    axios.post("http://localhost:5000/company", formData).then(
      (response) => {
        console.log(response);
        alert("Data saved successfully");
      },
      (error) => {
        console.log(error);
      },
      () => {
        // alert("Data saved successfully");
      }
    );
    console.log(formData);
  };

  const onSelect = (selectedOption) => {
    setSelectedOptions(selectedOption);
    formData.place = selectedOption;
    setFormData(formData);
    console.log("Select ==>>> ", formData.place);
  };

  return (
    <>
      <form onSubmit={handleSubmit} mt-4>
        <div>
          <label>Name Of Client:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/^[a-zA-Z ]*$/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Company Name </label>
          <input
            type="text"
            name="company"
            placeholder=""
            autoComplete="off"
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/^[a-zA-Z ]*$/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
          {errors.company && <span>{errors.company}</span>}
        </div>
        {/* <div>
        <label>Turn Over</label>
        <input
          type="number"
          name="turnover"
          placeholder=""
          autoComplete="off"
          onChange={handleChange}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          required
        />
        {errors.turnover && <span>{errors.turnover}</span>}
      </div> */}
        {/* place */}
        <div>
          <label>Turnover</label>
          <input
            type="text"
            name="turnover"
            placeholder=""
            autoComplete="off"
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
          {errors.turnover && <span>{errors.turnover}</span>}
        </div>
        {/* place */}
        <div>
          <label htmlFor="place" className="form-lable">
            Branch
          </label>
          <Select
            options={options}
            value={selectedOptions}
            onChange={onSelect}
            isMulti={true}
          />
          {/* {errors.place && <span>{errors.place}</span>} */}
        </div>
        {/* active */}
        <label>Choose a company:</label>
        <select name="cars" id="myCompanies" onChange={handleChange} multiple>
          <option value="wipro">Wipro</option>
          <option value="jws">JWS</option>
          <option value="google">Google</option>
          <option value="microsoft">Microsoft</option>
        </select>

        {errors.cars && <span>{errors.cars}</span>}
        {/* select */}
        <br />
        <br />
        <button type="submit">Submit</button>
        {/* <button type="submit" onClick={() => navigate("/homepage")}>
          Submit
        </button> */}
      </form>
    </>
  );
};

export default Home;
