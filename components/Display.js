const React = require("react");
const { Box, Text, Newline } = require("ink");
const { getNotes } = require("../services");

const Display = ({ important = false }) => {
	const [notes, setNotes] = React.useState([]);
	React.useEffect(() => {
		getNotes().then((n) => setNotes(n));
	}, []);
	return (
		<Box flexDirection="row">
			{notes.map((note) => (
				<Box key={note.id} flexDirection="column" borderStyle="single">
					<Text>Content: {note.content}</Text>
					<Text>Date: {note.date}</Text>
					<Text>Important: {note.important ? "yes" : "no"}</Text>
				</Box>
			))}
		</Box>
	);
};

module.exports = Display;
