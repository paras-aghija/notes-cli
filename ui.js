"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const importJsx = require("import-jsx");
const Create = importJsx("./components/Create");
const Display = importJsx("./components/Display");

const App = ({ create, display, important }) => (
	<Box>
		{create && <Create />}
		{display && <Display />}
		{important && <Display important={true} />}
	</Box>
);

module.exports = App;
