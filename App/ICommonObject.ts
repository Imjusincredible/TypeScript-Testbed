/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

/**
 * @Interface
 * <I>Common Object
 */
interface ICommonObject {
    get(key: string): any;
    has(key: string): boolean;
    set(key: string, val: any): boolean;
}

export = ICommonObject;