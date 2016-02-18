import { tree } from 'state';
import request from 'superagent';

import validate from './validator';

let form = tree.select('newRequestForm');

const getRequests = ( ) => {
	request
		.get('api/request/')
		.end(function(err, response){
			tree.set(
				'requestsFeed',
				JSON.parse(response.text)
			);
		});
}

const drop = () => {
	form.set( 'data', {} );
	form.set( 'valid', false);
}

const setDefaults = (user) => {
	form.set( ['data', 'requester'], user.login ); // fake!
	form.set( ['data', 'priority'], "ORDINARY" );
	form.set( ['data', 'confidential'], "false" );
	if ( form.get().latest === 'success') form.set( 'latest', null);
}

const changeForm = ( data ) => {
	let value = data.value;
	if (data.key === 'desiredResolutionDate') value = new Date(value).getTime();
	if (data.key === 'priority') value ?  value = 'HIGH' : value = 'ORDINARY';
	form.set(['data', data.key], value);

	if ( validate(form.get().data) ) form.set('valid', true);
}

const submitForm = ( error ) => {
	form.set( 'latest', error || "success");
	if (!error) getRequests();
	drop();
}

const saveRequest = ( cb ) => {
	request
		.post( 'api/request/' )
		.send( form.get().data )
		.end( (err, response) => {
			submitForm( err );
			if ( cb ) cb( err, response );
		});
}

const sendRequest = () => {
	saveRequest( ( err, response ) => {
		submitForm( err );
		request
			.post( `api/request/${response.body}/process` )
			.end( (err, response) => {
				console.log('Starting process ', response.body, 'with', response);
			});
	});
}

export {
	changeForm,
	setDefaults,
	saveRequest,
	sendRequest,
};
