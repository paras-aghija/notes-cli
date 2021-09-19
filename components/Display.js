const React = require("react");
const { Box, Text, Newline } = require("ink");
const { getNotes } = require("../services");
const Table = require("ink-table").default;

const Display = ({ important = false }) => {
	const [notes, setNotes] = React.useState([]);
	React.useEffect(() => {
		getNotes().then((n) => setNotes(n));
	}, []);
	return <Table data={notes} />;
};

module.exports = Display;
