const ListItem = ({ name, index } = props) => {
	return (
		<>
			<p>{name}</p>
			{/* <img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`}
			/> */}
		</>
	);
};

export default ListItem;
