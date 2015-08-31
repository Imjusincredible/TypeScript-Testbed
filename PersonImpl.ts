/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II <charlesjohnson@jfamstudios.com>, August 2015
 */

import BaseModelClass = require("./BaseModelClassImpl");
import IPersonModel = require("./IPersonModel");

/**
 * @Class
 * Person
 */
class PersonImpl extends BaseModelClass {
	model: any;

	constructor(person: IPersonModel) {
		super(person);
	}

	serialize() {
		return 'Serializing the model ' + this.get('firstName') +
		' ' + this.get('lastName') + ' @ v:' + this.getVersion();
	}
}

export = PersonImpl;