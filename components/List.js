// import getAllNames from "../utility/getAllNames";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { motion } from "framer-motion";

import styles from "./List.module.scss";

const List = (props) => {
	const [names, setNames] = useState([]);
	const [isMobile, setIsMobile] = useState([]);

	// useEffect(() => {
	// 	console.log("run it");

	// 	// async function fetchData() {
	// 	// 	setNames(await getAllNames());
	// 	// }
	// 	// fetchData();
	// 	setIsMobile(window.innerWidth < 768);
	// }, []);

	// let container;

	// if (!isMobile) {
	// 	container = {
	// 		show: {
	// 			transition: {
	// 				staggerChildren: 0.05,
	// 				delayChildren: 0.3,
	// 			},
	// 		},
	// 	};
	// }

	const container = {
		show: {
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.3,
			},
		},
	};

	const listItems = props.names.map((item, index) => {
		return <ListItem name={item.name} index={index} key={index} />;
	});

	return (
		<>
			<div className={styles.list_outer}>
				<motion.div
					className={styles.list}
					initial="hidden"
					whileInView="show"
					variants={container}
				>
					{listItems}
				</motion.div>
			</div>
		</>
	);
};

export default List;
