import { tree } from 'state';
import validate from './validator';

let form = tree.select('newRequestForm');

const changeForm = (data) => {
	form.set(['data', data.key], data.value);
	if ( validate(form.get().data) ) form.set('valid', true);
}

const getRequests = () => {
	request
		.get('api/request/')
		.end(function(err, response){
			tree.set(
				'requests',
				JSON.parse(response.text)
			);
		});
}

export {
	changeForm,
};
