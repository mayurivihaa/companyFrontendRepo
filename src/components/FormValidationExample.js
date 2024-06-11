import Select from "react-select";
import { useState } from "react";
import "./App.css";

const options = [
  { value: "india", lable: "India" },
  { value: "america", label: "America" },
  { value: "france", label: "France" },
  { value: "england", label: "england" },
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    status: "",
    address: "",
    turnover: "",
    branch: [],
  });

  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "branch") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.branch.push(event.target.value);
      } else {
        copy.branch = copy.branch.filter((e) => e !== event.target.value);
      }
      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    console.log(selectedOptions);
  };

  // const checkSpecialChar = (e) => {
  //   if (!/^[a-z\d\-_\s]+$/i.test(e.key)) {
  //     e.preventDefault();
  //   }
  // };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.branch.trim()) {
      validationErrors.branch = "branch is required";
    }
    if (!formData.company.trim()) {
      validationErrors.company = "company is required";
    }

    if (!formData.name.trim()) {
      validationErrors.email = "name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      validationErrors.name = "name is not valid";
    }

    if (!formData.turnover.trim()) {
      validationErrors.turnover = "turnover is required";
    } else if (formData.turnover.length < 6) {
      validationErrors.turnover = "turnover should be at least 6 char";
    }

    if (formData.confirmturnover !== formData.turnover) {
      validationErrors.confirmturnover = "turnover not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  // handle submit
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* {" "} */}
        <div className="form-group">
          <label htmlFor="name" className="form-lable">
            Name Of Client
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeHandler}
            //onChange={(e) => checkSpecialChar(e)}
            name="name"
          />
          {errors.name && <span>{errors.name}</span>}
          {/* <Feild /> */}
        </div>
        <div className="form-group">
          <label htmlFor="companyname" className="form-lable">
            Company Name
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            onChange={onChangeHandler}
            name="company"
          />
          {errors.company && <span>{errors.company}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="place" className="form-lable">
            Place
          </label>
          <Select
            className="select"
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            isMulti={true}
          />
        </div>
        {/* branch */}
        <div className="form-group">
          <label htmlFor="branch" className="form-lable">
            Branch
          </label>
          <div>
            <div>
              <input
                type="checkbox"
                autoComplete="off"
                value="india"
                onChange={onChangeHandler}
                name="branch"
              />
              <label htmlFor="html">India</label>
            </div>
            <div>
              <input
                type="checkbox"
                autoComplete="off"
                value="america"
                onChange={onChangeHandler}
                name="branch"
              />
              <label htmlFor="html">America</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="france"
                onChange={onChangeHandler}
                name="branch"
              />
              <label htmlFor="html">France</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="england"
                onChange={onChangeHandler}
                name="branch"
              />
              <label htmlFor="html">England</label>
            </div>
          </div>
          {errors.email && <span>{errors.email}</span>}
        </div>
        {/* branch */}
        <div className="form-lable">
          <label htmlFor="status">Active Status</label>
          <div>
            <div>
              <input
                type="radio"
                value="yes"
                onChange={onChangeHandler}
                name="status"
                autoComplete="off"
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                value="no"
                onChange={onChangeHandler}
                name="status"
                autoComplete="off"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="turnover" className="form-lable">
            Turn over
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onChangeHandler}
            name="turnover"
            autoComplete="off"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="" className="form-lable">
            Address
          </label>
        </div>
        <div className="form-group">
          <textarea
            rows="9"
            cols="70"
            name="address"
            onChange={onChangeHandler}
          ></textarea>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="form-group">
          <button
            className="btn"
            type="button"
            onClick={() => console.log(formData)}
          >
            Submit
          </button>
          <button className="btn" type="button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
