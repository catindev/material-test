import { tree } from 'state';
import request from 'superagent';

import validate from './validator';

let form = tree.select('newRequestForm');


const changeForm = (data) => {
	let value = data.value;
	if (data.key === 'desiredResolutionDate') value = new Date(value).getTime();
	if (data.key === 'priority') value ?  value = 'HIGH' : value = 'ORDINARY';
	form.set(['data', data.key], value);

	if ( validate(form.get().data) ) form.set('valid', true);
}

const drop = () => {
	form.set( 'data', {} );
	form.set( 'valid', false);
}

const setDefaults= () => {
	form.set( ['data', 'requester'], "Иванов" ); // fake!
	form.set( ['data', 'priority'], "ORDINARY" );
	form.set( ['data', 'confidential'], "false" );
	if ( form.get().latest === 'success') form.set( 'latest', null);
}

const sendRequest = () => {
	request
		.get('/api/ref/service?level=PROCESS_GROUP')
		.end(function(err, response){
			services.set(
				['PROCESS_GROUP', 'list'],
				JSON.parse(response.text)
			);
		});
}

const saveRequest = ( cb ) => {
	request
		.post( '/api/request/' )
		.send( form.get().data )
		.end( (err, response) => {
			if (!err && response.ok) {
				drop();
				form.set( 'latest', "success");
			} else {
				form.set( 'latest', err);
			}
		});
}

export {
	changeForm,
	setDefaults,
	saveRequest
};
