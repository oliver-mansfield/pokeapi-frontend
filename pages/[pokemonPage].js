import getAllNames from "../utility/getAllNames";
import getDataByName from "../utility/getDataByName";

const Pokemon = ({ pokemonPageData }) => {
	return (
		<>
			<h1>lmao</h1>
			<h2>{pokemonPageData.name}</h2>
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
