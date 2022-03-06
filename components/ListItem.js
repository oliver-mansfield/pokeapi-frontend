import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, index } = props) => {
	const itemRef = useRef(name);
	const router = useRouter();

	const handleClick = (e) => {
		// console.log("clicked ref" + itemRef.current);
		console.log("clicked index" + index);
		e.preventDefault();

		// router.push(`/${name}`);
	};

	return (
		<div className={styles.list_item} onClick={handleClick}>
			<Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`}
				width="200"
				height="200"
				className="image"
			/>
		</div>
	);
};

export default ListItem;
