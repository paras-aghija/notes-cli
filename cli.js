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
		--important
		--remove
		--help

	Examples
	  $ magneto-notes --create => opens form to create notes
	  $ magneto-notes --display => display all notes
	  $ magneto-notes --remove => deleting a note
	  $ magneto-notes --important => display important notes
	  $ magneto-notes --help => opens help window
`,
	{
		flags: {
			create: { type: "boolean" },
			display: { type: "boolean" },
			important: { type: "boolean" },
			delete: { type: "boolean" },
			help: { type: "boolean" },
		},
	}
);

render(React.createElement(ui, cli.flags));
