import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const List = () => {
	const [names, setNames] = useState([]);

	useEffect(async () => {
		console.log("run it");

		setNames(await getAllNames());
	}, []);

	const listItems = names.map((item, index) => {
		return <ListItem name={item.name} index={index} />;
	});

	return (
		<>
			<h2>List</h2>
			{listItems}
		</>
	);
};

export default List;
