/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import Person = require("./App/PersonImpl");
import Greeting = require("./App/GreetingImpl");

/**
 * @Class
 * ApplImpl
 */
class AppImpl {
    // public methods in the constructor auto-populates the class properties
    constructor(public person: Person, public greetings: Greeting) {}

    updatePerson(k?: string, v?: string): string {
        if (k) this.person.set(k, v);

        return this.viewPerson();
    }

    viewPerson(): string {
        var message = this.greetings.greet() + ' - ' + this.person.serialize();
        console.log(message);
        return message;
    }
}

/**
 * Setup
 */
var charles = new Person({
    firstName: 'Charles',
    lastName: 'Johnson',
    age: 32,
    image: 'http://www.sockittome.com/mypic.png'
});
var greetMe = new Greeting(charles);

// Initialize App
var App = new AppImpl(charles, greetMe);


/** Echo */
App.viewPerson();
App.updatePerson('lastName', 'Johnson II');
App.updatePerson('firstName', 'CE');