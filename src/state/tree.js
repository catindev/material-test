import Baobab from 'baobab';

const config = {
	maxHistory: 10,
	validate: validation
};
const initialState = { buttons: [] };

function validation(previousState, newState, affectedPaths) {
	console.groupCollapsed('validator:');
	console.log('previous state', previousState);
	console.log('new state', newState);
	console.log('affected paths', affectedPaths);
	console.groupEnd();
}

const tree = new Baobab(initialState, config);

export default tree;
