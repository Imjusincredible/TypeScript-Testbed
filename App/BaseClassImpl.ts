/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import ICommonObject = require("./ICommonObject");

/**
 * @class
 * BaseClass
 */
class BaseClassImpl implements ICommonObject {
    constructor() {}

    has(key: string): boolean {
        return (this.hasOwnProperty(key));
    }

    get(key: string): any {
        if (this.has(key)) return this[key];
        else return null;
    }

    set(key: string, val: any): boolean {
        if (!this.has(key)) return false;

        this[key] = val;
        return true;
    }
}

export = BaseClassImpl;