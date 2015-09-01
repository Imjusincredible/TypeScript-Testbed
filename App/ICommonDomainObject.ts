/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

import ICommonObject = require("./ICommonObject");

/**
 * @Interface
 * <I>Common Object
 */
interface ICommonDomainObject extends ICommonObject {
    isNew(key?: any): boolean;
    save(): boolean;
    serialize(key: string): any;
}

export = ICommonDomainObject;