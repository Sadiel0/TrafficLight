import React from "react";

export default function TrafficLight() {
	const [color, setColor] = React.useState("");
	return (
		<div>
			<div>
				<div className="traffic-light ">
					<div
						className={
							color === "red" ? "red-light onState" : "red-light"
						}
						onClick={() => {
							setColor("red");
						}}></div>
					<div
						className={
							color === "yellow"
								? "yellow-light onState"
								: "yellow-light"
						}
						onClick={() => {
							setColor("yellow");
						}}></div>
					<div
						className={
							color === "green"
								? "green-light onState"
								: "green-light"
						}
						onClick={() => {
							setColor("green");
						}}></div>
				</div>
			</div>
		</div>
	);
}
