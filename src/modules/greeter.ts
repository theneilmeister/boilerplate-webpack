import Person from '../interfaces/Person'


function greet(person: Person) {
	console.debug('Person: ', person);
	return 'Hello ' + person.firstName + ' ' + person.lastName;
}


export = greet;