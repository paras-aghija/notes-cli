const React = require("react");
const SelectInput = require("ink-select-input").default;
const { getNotes, deleteNote } = require("../services");

const Delete = () => {
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		getNotes().then((n) => {
			const v = n.map((note) => {
				let obj = {
					label: `${note.id} : ${note.content}`,
					value: `${note.id}`,
				};
				return obj;
			});
			setItems(v);
		});
	});

	const handleSelect = (item) => {
		deleteNote(item.value)
			.then(() => {
				console.log("note deleted successfully");
				process.exit();
			})
			.catch((err) => {
				console.log("some error occured");
				console.log(err);
				process.exit();
			});
	};

	return <SelectInput items={items} onSelect={handleSelect} />;
};

module.exports = Delete;
