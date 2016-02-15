import Baobab from 'baobab';
import initial from './initial';

const config = {
	maxHistory: 10,
	validate: logger
};

function logger(previousState, newState, affectedPaths) {
	console.groupCollapsed('State history:');
	console.log('Previous', previousState);
	console.log('Now', newState);
	console.log('Affected', affectedPaths);
	console.groupEnd();
}

const tree = new Baobab( initial, config );

export default tree;
