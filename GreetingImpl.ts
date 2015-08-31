/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II <charlesjohnson@jfamstudios.com>, August 2015
 */

import Person = require("./PersonImpl");

/**
 * @Class
 * Greeting
 */
class Greeting {
	message: string;
	person: Person;
	constructor(person: Person) {
		this.person = person;
	}

	greet() {
		return 'Hi, my name is ' + this.person.get('firstName') + ' ' + this.person.get('lastName');
	}
}

export = Greeting;