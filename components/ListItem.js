import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { motion } from "framer-motion";

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
		<div className="list-item" onClick={handleClick}>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`}
				width="200"
				height="200"
				className="image"
			/>

			<style jsx>{`
				.list-item {
					border: 1px solid black;
					width: 100%;
					background-color: white;
				}

				.image {
					display: block;
					margin: 0 auto;
				}
			`}</style>
		</div>
	);
};

export default ListItem;
