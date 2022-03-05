import getAllNames from "../utility/getAllNames";
import getDataByName from "../utility/getDataByName";
import Image from "next/image";

const Pokemon = ({ pokemonPageData }) => {
	return (
		<>
			<h1>{pokemonPageData.name}</h1>
			<Image
				src={pokemonPageData.sprites.other.dream_world.front_default}
				width="200"
				height="200"
			/>
		</>
	);
};

export async function getStaticPaths() {
	const pokemonPagePaths = await getAllNames().then((res) => {
		return res.map((pokemon) => {
			return {
				params: {
					pokemonPage: pokemon.name,
				},
			};
		});
	});

	return {
		paths: pokemonPagePaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const pokemonPageData = await getDataByName(context.params.pokemonPage);
	return {
		props: { pokemonPageData },
	};
}

export default Pokemon;
