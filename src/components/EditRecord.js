import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const formatedAdvertisers = [
  { value: "india", lable: "India" },
  { value: "america", label: "America" },
  { value: "france", label: "France" },
  { value: "england", label: "england" },
];

const EditRecord = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    turnover: 0,
    place: [],
    cars: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/company/` + id)
      .then((res) => {
        setFormData({
          ...formData,
          name: res.data.name,
          company: res.data.company,
          turnover: res.data.turnover,
          place: res.data.place,
          cars: res.data.cars,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  //   omchanfe event
  const handleChange = (e) => {
    const validationErrors = {};

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
      let formatedAdvertisers =
        document.getElementById("myCompanies").selectedOptions;
      let values = Array.from(formatedAdvertisers).map(({ value }) => value);
      value = values;
    }
    setFormData({ ...formData, [name]: value });
  };

  //   omchanfe event

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/company/` + id, formData)
      .then((res) => {
        navigate("/homepage");
      })
      .catch((err) => console.log(err));
  };

  const onSelect = (selectedOption) => {
    setSelectedOptions(selectedOption);
    formData.place = selectedOption;
    setFormData(formData);
    console.log("Select ==>>> ", formData.place);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name Of Client:</label>
          <input
            type="text"
            name="name"
            placeholder=""
            value={formData.name}
            onChange={handleChange}
            onKeyPress={(event) => {
              if (!/^[a-zA-Z ]*$/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
        </div>
        <div>
          <label>Company Name </label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            placeholder=""
            autoComplete="off"
            value={formData.company}
            onKeyPress={(event) => {
              if (!/^[a-zA-Z ]*$/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
        </div>
        <div>
          <label>Turnover</label>
          <input
            type="text"
            name="turnover"
            placeholder=""
            onChange={handleChange}
            value={formData.turnover}
            autoComplete="off"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            required
          />
        </div>
        {/* place */}
        <div>
          <label htmlFor="place" className="form-lable">
            Branch
          </label>
          <Select
            // options={options}
            options={formatedAdvertisers}
            // value={selectedOptions}
            value={formData.place}
            onChange={onSelect}
            isMulti={true}
          />
        </div>
        {/* active */}
        <label>Choose a company:</label>
        <select
          name="cars"
          id="myCompanies"
          multiple={true}
          onChange={handleChange}
          value={formData.cars}
        >
          <option value="wipro">Wipro</option>
          <option value="jws">JWS</option>
          <option value="google">Google</option>
          <option value="microsoft">Microsoft</option>
        </select>

        {/* select */}
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditRecord;
