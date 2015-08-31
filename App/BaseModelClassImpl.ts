/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II <charlesjohnson@jfamstudios.com>, August 2015
 */

import BaseClass = require("./BaseClassImpl");

/**
 * Base Model Class - Great for storing Domain Objects
 */
class BaseModelClassImpl extends BaseClass {
	private model: any;
	private version: number = 0;

	constructor(model?: any) {
		super();

		if (!model)
			return;

		this.model = model;
		this.versionUpdate();
	}

	has(key: string) {
		return this.model.hasOwnProperty(key);
	}

	get(key: string) {
		if (this.has(key)) return this.model[key];
		else return null;
	}

	set(key: string, val: any) {
		if (!this.has(key)) return false;

		this.model[key] = val;
		this.versionUpdate();

		return true;
	}

	getVersion() {
		return this.version;
	}

	private versionUpdate() {
		this.version += 1;
	}
}

export = BaseModelClassImpl;