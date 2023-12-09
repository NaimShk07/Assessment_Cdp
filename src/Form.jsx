import React, { useState } from "react";
import "./Style/App.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetData, SendData } from "./ReduxToolkit/Features/UserSlice";
import { toast } from "react-toastify";

const Form = () => {
	const value = useSelector((state) => state.user);
	const [vis, setvis] = useState("visible");
	const [formvalue, setformvalue] = useState({
		email: "",
		password: "",
		rpassword: "",
		fname: "",
		lname: "",
		number: "",
		address: "",
		town: "",
		pczip: "",
		country: "",
	});
	const dispatch = useDispatch();

	const changeHandler = (e) => {
		setformvalue({ ...formvalue, [e.target.name]: e.target.value });
	};

	let validation = () => {
		//checking every field
		var result = true;
		if (formvalue.email == "" || formvalue.email == null) {
			result = false; // further code should not run
			toast.error("email field is required");
			return false; // for reload
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formvalue.email)) {
			result = false;
			toast.error("Write in this format abc@gmail.com");
			return false;
		}

		if (formvalue.password == "" || formvalue.password == null) {
			result = false;
			toast.error("password field is required");
			return false;
		}

		if (formvalue.rpassword == "" || formvalue.rpassword == null) {
			result = false;
			toast.error("rpassword field is required");
			return false;
		}
		if (formvalue.fname == "" || formvalue.fname == null) {
			result = false;
			toast.error("fname field is required");
			return false;
		}
		if (formvalue.lname == "" || formvalue.lname == null) {
			result = false;
			toast.error("lname field is required");
			return false;
		}
		if (formvalue.number == "" || formvalue.number == null) {
			result = false; // further code should not run
			toast.error("number field is required");
			return false; // for reload
		}

		if (formvalue.address == "" || formvalue.address == null) {
			result = false;
			toast.error("address field is required");
			return false;
		}

		if (formvalue.town == "" || formvalue.town == null) {
			result = false;
			toast.error("town field is required");
			return false;
		}
		if (formvalue.pczip == "" || formvalue.pczip == null) {
			result = false;
			toast.error("pczip field is required");
			return false;
		}
		if (formvalue.country == "" || formvalue.country == null) {
			result = false;
			toast.error("country field is required");
			return false;
		}
		return result;
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (validation()) {
			dispatch(SendData(formvalue));
			setformvalue({
				...formvalue,
				email: "",
				password: "",
				rpassword: "",
				fname: "",
				lname: "",
				number: "",
				address: "",
				town: "",
				pczip: "",
				country: "",
			});
		}
	};
	return (
		<div className="full">
			<div className="main">
				<h3>Register here</h3>
				<h1>User Registeration</h1>
				<h4 className="star">
					Feild marked <span>*</span> are required
				</h4>
				<form action="" method="post">
					<table style={{ width: "100%" }} className="form-table">
						<tr>
							<td align="right" width={"35%"}>
								Email
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="email"
									name="email"
									onChange={changeHandler}
									value={formvalue.email}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Password
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="password"
									value={formvalue.password}
									onChange={changeHandler}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Retype Password
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="rpassword"
									onChange={changeHandler}
									value={formvalue.rpassword}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								First Name
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="fname"
									onChange={changeHandler}
									value={formvalue.fname}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Last Name
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="lname"
									onChange={changeHandler}
									value={formvalue.lname}
								/>
							</td>
						</tr>

						<tr>
							<td align="right" width={"35%"}>
								Phone Number
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="number"
									name="number"
									onChange={changeHandler}
									value={formvalue.number}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Address
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="address"
									onChange={changeHandler}
									value={formvalue.address}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Town
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="town"
									onChange={changeHandler}
									value={formvalue.town}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Postcode / Zip
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<input
									type="text"
									name="pczip"
									onChange={changeHandler}
									value={formvalue.pczip}
								/>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}>
								Country
								<span className="star" style={{ visibility: vis }}>
									*
								</span>
							</td>
							<td width={"50%"}>
								<select
									name="country"
									id=""
									onChange={changeHandler}
									value={formvalue.country}
								>
									<option value="">{value.country}</option>
									<option value="india">India</option>
									<option value="uk">United Kingdom</option>
									<option value="canada">Canada</option>
									<option value="china">China</option>
								</select>
							</td>
						</tr>
						<tr>
							<td align="right" width={"35%"}></td>
							<td width={"50%"}>
								<button onClick={(e) => submitHandler(e)} type="submit">
									Register
								</button>
							</td>
						</tr>
					</table>
				</form>
			</div>
			<div className="main2">
				<table>
					<tr>
						<td width={"10%"}>Id</td>
						<td>Email</td>
						<td>Password</td>
						<td>Rpassword</td>
						<td>Fname</td>
						<td>Lname</td>
						<td>Number</td>
						<td>Address</td>
						<td>Town</td>
						<td>PostZip</td>
						<td>Country</td>
					</tr>

					{value.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.email}</td>
								<td>{item.password}</td>
								<td>{item.rpassword}</td>
								<td>{item.fname}</td>
								<td>{item.lname}</td>
								<td>{item.number}</td>
								<td>{item.address}</td>
								<td>{item.town}</td>
								<td>{item.pczip}</td>
								<td>{item.country}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default Form;
