"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const importJsx = require("import-jsx");
const Create = importJsx("./components/Create");
const Display = importJsx("./components/Display");
const Delete = importJsx("./components/Delete");

const App = ({ create, display, important, remove }) => (
	<Box>
		{create && <Create />}
		{display && <Display />}
		{important && <Display important={true} />}
		{remove && <Delete />}
	</Box>
);

module.exports = App;
