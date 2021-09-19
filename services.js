const axios = require("axios");

const baseUrl = "https://crud-notes-app.herokuapp.com/api/notes";

const getNotes = () => {
	const req = axios.get(baseUrl);
	return req.then((res) => res.data);
};

const addNote = (note) => {
	const req = axios.post(baseUrl, note);
	return req.then((res) => res.data);
};

module.exports = {
	getNotes,
	addNote,
};
