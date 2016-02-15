import { tree } from 'state';
import request from 'superagent';

const getRequests = ( cb ) => {
	request
		.get('api/request/')
		.end(function(err, response){
			cb(err, response)
		});
}

const setUser = ( data ) => {
	tree.set('userData', data);
}

export {
	getRequests,
	setUser,
}
