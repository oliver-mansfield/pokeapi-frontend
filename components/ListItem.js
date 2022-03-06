import Image from "next/image";
import { useRouter } from "next/router";

const ListItem = ({ name, index } = props) => {
	const router = useRouter();

	const handleClick = (e) => {
		console.log("clicked " + name);
		e.preventDefault();
		router.push(`/${name}`);
	};

	return (
		<button onClick={handleClick}>
			<div>
				<p>{name}</p>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
						index + 1
					}.svg`}
					width="200"
					height="200"
				/>
			</div>
		</button>
	);
};

export default ListItem;
