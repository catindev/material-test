import Baobab from 'baobab';

const config = {
	maxHistory: 10,
	validate: logger
};

const initialState = {
	userType: false,
	requests: [],
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

function logger(previousState, newState, affectedPaths) {
	console.groupCollapsed('state:');
	console.log('previous', previousState);
	console.log('new', newState);
	console.log('affected paths', affectedPaths);
	console.groupEnd();
}

const tree = new Baobab(initialState, config);

export default tree;
