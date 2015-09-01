/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import Person = require("./PersonImpl");

/**
 * @Class
 * Greeting
 */
class Greeting {
    private person: Person;
    constructor(person: Person) {
        this.person = person;
    }

    greet() {
        return !this.person.isNew()
            ? 'Hi, my name is ' + this.person.get('firstName') + ' ' + this.person.get('lastName')
            : 'This is a new Person, we need to get them registered...STAT!!!';
    }
}

export = Greeting;