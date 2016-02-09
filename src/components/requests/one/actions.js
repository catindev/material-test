import { tree } from 'state';

const addButton = (item) => {
	tree.select('buttons').push(item);
};

export {
	addButton
};
