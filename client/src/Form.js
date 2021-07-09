import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  timezone: "",
  password:"",
  terms:false
  
};
const validationSchema = Yup.object({
  firstname: Yup.string().required("This field is required"),
  lastname: Yup.string().required("This field is required"),
  username: Yup.string().required("This field is required"),
  email: Yup.string().email().required("Email is required"),
  timezone:Yup.string().required("This field is required"),
  terms:Yup.boolean()
  .oneOf([true], "You must accept the terms and conditions"),
  password:Yup.string()
  .required("Password is required")
  .min(4, "Password is too short - should be 4 chars minimum"),

});

function Form({ setRefresh, heading }) {
  const [data, setData] = useState();
  const [colorState, setColorState] = useState(true);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  
  function onSubmit(formData) {
   if(colorState){
    axios.post("http://localhost:8000/submit-fan", formData).then((response) => {
      alert("Success");
    })  .catch((err) => {
      alert("Error")
    })
   }
   else{
    axios.post("http://localhost:8000/submit-talent", formData).then((response) => {
     
      alert("Succes");
    })
    .catch((err) => {
      alert("Erro")
    })

   }
  
  }
  function colorClick(e) {
    e.preventDefault();
    setColorState(colorState === false ? true : false);
  }
  

  return (
    <form className="main-form p-5 mt-5 mx-auto" onSubmit={formik.handleSubmit}>
      <div
        className="rounded-pill mx-auto "
        style={{ background: "#121212", width: "fit-content" ,padding:'4px'}}
      >
        <button
          style={{ background: colorState === true ? "#10ff8d" : "#121212" }}
          className="rounded-pill p-2  toggle-button pl-4 pr-4 button-1"
          onClick={colorClick}
        >
          Fan Signup
        </button>
        <button
          className="rounded-pill toggle-button  button-2 p-2  pl-4 pr-4 "
          style={{ background: colorState === true ? "#121212" : "#10ff8d" }}
          onClick={colorClick}
        >
          Talen Signup
        </button>
      </div>

      <div className="row">
        <h3 className="text-white mt-5 mx-auto">Create Your {colorState===true?'Fan':'Talent'} Account</h3>
      </div>
      <div className="mx-auto">
        <div className=" centering ">
          <div>
            <small>firstname</small>
          </div>
          <input class="ip p-2" placeholder="first name" name="firstname" {...formik.getFieldProps("firstname")} />
          {formik.touched.firstname && formik.errors.firstname ? (
          <div className="text-danger">{formik.errors.firstname}</div>
        ) : null}
        </div>
        <div className=" centering">
          <div>
          <small>lasttname</small>
          </div>
          <input class="ip p-2" placeholder="Last name" name="lastname" {...formik.getFieldProps("lastname")} />
          {formik.touched.lastname && formik.errors.lastname ? (
          <div className="text-danger">{formik.errors.lastname}</div>
        ) : null}
        </div>
        <div className=" centering">
          <div>
            <small>username</small>
          </div>
          <input class="ip p-2" placeholder="username" name="username" {...formik.getFieldProps("username")}/>
          {formik.touched.username && formik.errors.username ? (
          <div className="text-danger">{formik.errors.username}</div>
        ) : null}
        </div>
        <div className=" centering">
          <div>
            <small>firstname</small>
          </div>
          <input class="ip p-2" placeholder="email" name="email" {...formik.getFieldProps("email")}/>
          {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
        </div>
        <div className=" centering">
          <div>
            <small>firstname</small>
          </div>
          <select class="ip p-2" type="select" placeholder="timezone" name="time" {...formik.getFieldProps("timezone")} >
          <option value="12pm UK">12 UK</option>
          <option value="12pm UK">12 UK</option>
          
          </select>
          {formik.touched.timezone && formik.errors.timezone ? (
          <div className="text-danger">{formik.errors.timezone}</div>
        ) : null}
        </div>
        <div className=" centering">
          <div>
            <small>password</small>
          </div>
          <input class="ip p-1 p-2" type="password" placeholder="password" name="username" {...formik.getFieldProps("password")} />
          {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
        </div>
        <div className="row mr-3 mt-3 ml-3 "> <div className="mx-auto"><input type="checkbox" name="terms" {...formik.getFieldProps("terms")} /><small className="ml-2">I agree to the <span style={{color:"#6ae37e"}}>terms and Condition</span></small></div></div>
        {formik.touched.terms && formik.errors.terms ? (
          <div className="row">
          <div className="text-danger mx-auto">{formik.errors.terms}</div>
          </div>
        ) : null}
        <div className="row mt-3">
            <button type="submit" className="rounded-pill mx-auto pt-2 pl-5 pr-5 pb-2 signup-button">SIGN UP</button>
        </div>
        <div className="row "> <div className="mx-auto"><small className="ml-2">I agree to the terms and Condition</small></div></div>
      </div>
    </form>
  );
}

export default Form;
