import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { motion } from "framer-motion";

import styles from "./List.module.scss";

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
			<motion.div
				initial={{ y: "-20px" }}
				animate={{ y: 0 }}
				transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
				className={styles.list_outer}
			>
				<div className={styles.list}>{listItems}</div>
			</motion.div>
		</>
	);
};

export default List;
