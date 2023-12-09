import React, { useState } from "react";
import "./Style/App.scss";
import Form from "./Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<ToastContainer />
			<Form />
		</>
	);
};

export default App;
