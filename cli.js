#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./ui");

const cli = meow(
	`
	Usage
	  $ magneto-notes

	Options
		--create
		--display

	Examples
	  $ magneto-notes --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			create: { type: "boolean" },
			display: { type: "boolean" },
		},
	}
);

render(React.createElement(ui, cli.flags));