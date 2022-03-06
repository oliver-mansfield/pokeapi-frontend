import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = () => {
	const [names, setNames] = useState([]);
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		console.log("run it");

		async function fetchData() {
			setNames(await getAllNames());
		}
		fetchData();
	}, []);

	const listItems = names.map((item, index) => {
		return <ListItem name={item.name} index={index} key={index} />;
	});

	return (
		<>
			<div className="list-outer">
				<div className="list">{listItems}</div>

				{showOverlay ? <div className="overlay"></div> : null}
			</div>

			<style jsx>{`
				.list {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					row-gap: 20px;
					column-gap: 20px;
					position: relative;
				}

				.list-outer {
					background: grey;
				}

				.overlay {
					background-color: red;
					opacity: 0.5;
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 9;
				}
			`}</style>
		</>
	);
};

export default List;
