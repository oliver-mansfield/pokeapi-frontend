const getDataByName = async (name) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

	return await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
};

export default getDataByName;
