import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";

const List = () => {
	const [names, setNames] = useState([]);

	useEffect(async () => {
		console.log("run it");

		setNames(await getAllNames());
	}, []);
	return (
		<>
			<h2>List</h2>
		</>
	);
};

export default List;
