/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import ICommonDomainObject = require("./ICommonDomainObject");

/**
 * Base Model Class - Great for storing Domain Objects
 */
class BaseModelClassImpl implements ICommonDomainObject {
	private model: any;
	private version: number = 0;

	constructor(model?: any) {
		if (!model)
			return;

		this.model = model;
		this.versionUpdate();
	}

	has(key: string) {
		return this.model.hasOwnProperty(key);
	}

	isNew(key?: any) {
		if (key && this.get(key.toString()))
			return false;
		else if (this.has('id'))
			return this.get('id') !== null;

		return true;
	}

	get(key: string) {
		if (this.has(key)) return this.model[key];
		else return null;
	}

	getVersion() {
		return this.version;
	}

	/**
	 * Stub for consumer to Implement
	 */
	save() { return false; }

	set(key: string, val: any) {
		if (!this.has(key)) return false;

		this.model[key] = val;
		this.versionUpdate();

		return true;
	}

	serialize() {
		return this.model;
	}

	private versionUpdate() {
		this.version += 1;
	}
}

export = BaseModelClassImpl;