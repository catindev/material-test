import { tree } from 'state';

const services = tree.select('newRequestServices');

// devmode mocks
import processGroupsMock from 'components/requests/common/mocks/processGroupsMock';
import processMock from 'components/requests/common/mocks/processMock';
import subprocessMock from 'components/requests/common/mocks/subprocessMock';
import taskMock from 'components/requests/common/mocks/taskMock';
import taskElementsMock from 'components/requests/common/mocks/taskElementsMock';

// requests shortcuts (fake now)
const changeLevel = {
	'PROCESS_GROUP': data => services.set(['PROCESS', 'list'], processMock),
	'PROCESS': data => services.set(['SUBPROCESS', 'list'], subprocessMock),
	'SUBPROCESS': data => services.set(['TASK', 'list'], taskMock),
	'TASK': data => services.set(['TASK_ELEMENT', 'list'], taskElementsMock)
}

const getProcessGroups = ( data ) => {
	// backend: /api/ref/service?level=PROCESS_GROUP
	services.set(['PROCESS_GROUP', 'list'], processGroupsMock);
};

const changeServices = ( data ) => {
	services.set([ data.level, 'selected'], data.value);

	// backend: /api/ref/service?level={ data.level }&parentId={ data.value }
	if (data.level in changeLevel)
			changeLevel[ data.level ](/* response from backend */);
};

export {
	getProcessGroups,
	changeServices,
};
