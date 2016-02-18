import { tree } from 'state';
import request from 'superagent';

const services = tree.select('newRequestServices');


// levels shortcuts
const childs = {
	'PROCESS_GROUP': 'PROCESS',
	'PROCESS': 'SUBPROCESS',
	'SUBPROCESS': 'TASK',
	'TASK': 'TASK_ELEMENT'
};

// actions shortcuts
const changeLevel = {
	'PROCESS_GROUP': data => services.set(['PROCESS', 'list'], data),
	'PROCESS': data => services.set(['SUBPROCESS', 'list'], data),
	'SUBPROCESS': data => services.set(['TASK', 'list'], data),
	'TASK': data => services.set(['TASK_ELEMENT', 'list'], data)
}

const getProcessGroups = ( data ) => {
	request
		.get('api/ref/service?level=PROCESS_GROUP')
		.end(function(err, response){
			services.set(
				['PROCESS_GROUP', 'list'],
				JSON.parse(response.text)
			);
		});
};

const changeServices = ( data ) => {
	services.set([ data.level, 'selected'], data.value);
	if (data.level === 'TASK_ELEMENT') {
		tree.select('newRequestForm').set(['data', 'serviceId'], data.value);
		return;
	}
	request
		.get(`api/ref/service?level=${childs[data.level]}&parentId=${data.value}`)
		.end(function(err, response){
			if (data.level in changeLevel)
					changeLevel[ data.level ]( JSON.parse(response.text) );
		});

};

export {
	getProcessGroups,
	changeServices,
};
