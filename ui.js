"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const importJsx = require("import-jsx");
const Create = importJsx("./components/Create");
const Display = importJsx("./components/Display");

const App = ({ create, display }) => (
	<Box>
		{create && <Create />}
		{display && <Display />}
	</Box>
);

module.exports = App;
