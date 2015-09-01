/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
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

var greetings = new Greeting(person);

// Setup Method
function personUpdate(k?, v?) {
    if (k) person.set(k, v);

    return console.log(greetings.greet() + ' - ' + person.serialize());
}


/** Echo */
personUpdate();
personUpdate('lastName', 'Johnson II');
personUpdate('firstName', 'CE');
console.log('\n');