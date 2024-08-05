import React from "react";
import ButtonToggle from "./components/ButtonToggle";
import SideBar from "./components/SideBar";

const App = () => {
	return (
		<div className="p-5">
			<SideBar></SideBar>
			<ButtonToggle></ButtonToggle>
		</div>
	);
};

export default App;
