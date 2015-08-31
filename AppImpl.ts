/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II <charlesjohnson@jfamstudios.com>, August 2015
 */

import Person = require("./App/PersonImpl");
import Greeting = require("./App/GreetingImpl");

/** Setup */
var person = new Person({
	firstName: 'Charles',
	lastName: 'Johnson',
	age: 32,
	image: 'http://www.sockittome.com/mypic.png'
});

var hi = new Greeting(person);

function personUpdate(k?, v?) {
	if (k) person.set(k, v);

	return console.log(hi.greet() + ' - ' + person.serialize());
}


/** Echo */
personUpdate();
personUpdate('lastName', 'Johnson II');
personUpdate('firstName', 'CE');
