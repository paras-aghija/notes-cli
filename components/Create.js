const React = require("react");
const { Box, Text, Newline } = require("ink");
const TextInput = require("ink-text-input").default;
const importJsx = require("import-jsx");
const { Form } = importJsx("ink-form");
const { addNote } = require("../services");

const options = [
	{ label: "Yes", value: "Yes" },
	{ label: "No", value: "No" },
];

const Create = () => {
	const [query, setQuery] = React.useState("");
	return (
		<Box>
			<Form
				form={{
					title: "Create New Note",
					sections: [
						{
							title: "New Note",
							fields: [
								{
									type: "string",
									name: "content",
									label: "Content",
									placeholder: "enter note content",
								},
								{
									type: "boolean",
									name: "important",
									label: "Important",
									options,
								},
							],
						},
					],
				}}
				onSubmit={(result) => {
					addNote(result)
						.then(() => {
							console.log("Note added successfully");
							process.exit();
						})
						.catch((err) => {
							console.log("some error occured");
							process.exit();
						});
				}}
			/>
		</Box>
	);
};

module.exports = Create;
