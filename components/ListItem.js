import Image from "next/image";
import Link from "next/link";

const ListItem = ({ name, index } = props) => {
	return (
		<Link href={`/${name}`}>
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
		</Link>
	);
};

export default ListItem;
