
class Student {

	fullName: string;

	constructor(public firstName, public middleInital, public lastName) {
		this.fullName = firstName + ' ' + middleInital + '' + lastName;
	}

}


export default Student;