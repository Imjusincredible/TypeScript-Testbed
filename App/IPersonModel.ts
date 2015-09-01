/* Copyright (C) ProMedia Development Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Charles Johnson, II - August 2015
 */

/**
 * @Interface
 * IPerson
 */
interface IPersonModel {
    firstName: string;
    lastName: string;
    image: string;
    age: number;
}

export = IPersonModel;