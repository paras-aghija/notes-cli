const React = require("react");
const { getNotes } = require("../services");
const Table = require("ink-table").default;

const Display = ({ important = false }) => {
	const [notes, setNotes] = React.useState([]);
	React.useEffect(() => {
		getNotes().then((n) => {
			if (important) {
				setNotes(n.filter((note) => note.important));
			} else {
				setNotes(n);
			}
		});
	}, []);
	return <Table data={notes} />;
};

module.exports = Display;
