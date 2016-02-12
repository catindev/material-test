import { tree } from 'state';
import request from 'superagent';

const getRequests = ( ) => {
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
	getRequests,
}
