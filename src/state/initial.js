export default {
	userData: null,
	userType: false,
	requestsFeed: [],
	newRequestServices: {
		PROCESS_GROUP: { list: [], selected: null },
		PROCESS: { list: [], selected: null },
		SUBPROCESS: { list: [], selected: null },
		TASK: { list: [], selected: null },
		TASK_ELEMENT: { list: [], selected: null },
	},
	newRequestForm: {
		data: {},
		valid: false,
		latest: null
	},
};
