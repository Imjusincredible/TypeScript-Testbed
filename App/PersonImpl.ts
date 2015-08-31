/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II <charlesjohnson@jfamstudios.com>, August 2015
 */

import BaseModelClass = require("./BaseModelClassImpl");
import IPersonModel = require("./IPersonModel");

/**
 * @Class - Domain Model
 * Person
 */
class PersonImpl extends BaseModelClass {
	constructor(person?: IPersonModel) {
		// Create an Empty Object based on the Interface
		if (!person) {
			super(<IPersonModel>{});
			return;
		}

		super(person);
	}

	serialize() {
		return 'Serializing the model ' + this.get('firstName') +
		' ' + this.get('lastName') + ' @ v:' + this.getVersion();
	}
}

export = PersonImpl;