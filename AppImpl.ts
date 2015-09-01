/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import AppMode = require("./App/AppMode");
import BaseClass = require("./App/BaseClassImpl");
import Person = require("./App/PersonImpl");
import Greeting = require("./App/GreetingImpl");

/**
 * @Class
 * ApplImpl
 */
class AppImpl extends BaseClass {
    mode: AppMode = AppMode.DEMO;

    // public methods in the constructor auto-populates the class properties
    constructor(public person: Person, public greetings: Greeting, mode?: AppMode) {
        super();

        if (mode) this.set('mode', mode);
    }

    updatePerson(k?: string, v?: string): string {
        if (k) this.person.set(k, v);

        return this.viewPerson();
    }

    viewPerson(): string {
        var message = this.greetings.greet();
        console.log(message);
        return message;
    }

    getMode(): string {
        return AppMode[this.mode];
    }

    /**
     * @override
     * Setter for the class
     * @param  {string}  key
     * @param  {any}     val
     * @return {boolean}
     */
    set(key: string, val: any): boolean {
        if (key === 'mode' && val !== this.mode)
            console.log('Application Mode Changed from ' + this.getMode() + ' to ' + AppMode[val]);

        return super.set(key, val);
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

console.log('\n');
App.set('mode', AppMode.PRODUCTION);
console.log('Raw value stored in App.mode: ' + App.get('mode'));    // inherited method