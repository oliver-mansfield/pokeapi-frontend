import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { motion, useAnimation } from "framer-motion";

import styles from "./List.module.scss";

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
			<div className={styles.list_outer}>
				<motion.div
					transition={{ staggerChildren: -0.1 }}
					className={styles.list}
				>
					{listItems}
				</motion.div>

				{showOverlay ? <div className={styles.overlay}></div> : null}
			</div>
		</>
	);
};

export default List;
