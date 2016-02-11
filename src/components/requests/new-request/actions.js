import { tree } from 'state';
import validate from './validator';

let form = tree.select('newRequestForm');

const changeForm = (data) => {
	form.set(['data', data.key], data.value);
	if ( validate(form.get().data) ) form.set('valid', true);
}

export {
	changeForm,
};
