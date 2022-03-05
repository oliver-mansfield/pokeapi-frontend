import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const List = () => {
	const [names, setNames] = useState([]);

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
			<h2>List</h2>
			{listItems}
		</>
	);
};

export default List;
