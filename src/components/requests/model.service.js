import State from 'state';

function model ($http, $location) {
  Object.assign(
    this,
    { loadRequests: loadRequests },
    { getRequests: getRequests },
    { setUser: setUser },
    { toggleUserType: toggleUserType },
    { loadUserSession: loadUserSession }
  );
  // service.loadRequests = loadRequests;
  // service.getRequests = getRequests;
  // service.setUser = setUser;
  // service.toggleUserType = toggleUserType;

  ///

  const loadRequests = () => {
  	$http
  		.get('api/request/')
  		.then( response => State.set('requestsFeed', data) )
      .catch( error => console.log('loadRequests fail', error) );
  }

  const getRequests = () => {
  	return State.select('requestsFeed').get();
  }

  const setUser = ( data ) => {
  	State.set('userData', data);
  }

  // для фейкового запроса от ЮД
  const toggleUserType = ( val ) => {
    State.set('userType', val);
  }

  const loadUserSession = () => {
    $http
      .get('api/user/_current')
      .then( response => State.set('userData', response.data) )
      .catch( error => console.log('loadRequests fail', error) );
  }

}
model.$inject = ['$http', '$location'];

export default model;
