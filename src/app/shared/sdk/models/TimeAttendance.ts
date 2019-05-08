/* tslint:disable */
import {
  Perdorues,
  Org
} from '../index';

declare var Object: any;
export interface TimeAttendanceInterface {
  "attId": any;
  "checked_in": Date;
  "checked_out"?: Date;
  "id"?: any;
  "perdoruesId"?: any;
  "timeAttId"?: any;
  "orgId"?: any;
  perdorues?: Perdorues;
  org?: Org;
}

export class TimeAttendance implements TimeAttendanceInterface {
  "attId": any;
  "checked_in": Date;
  "checked_out": Date;
  "id": any;
  "perdoruesId": any;
  "timeAttId": any;
  "orgId": any;
  perdorues: Perdorues;
  org: Org;
  constructor(data?: TimeAttendanceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TimeAttendance`.
   */
  public static getModelName() {
    return "TimeAttendance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TimeAttendance for dynamic purposes.
  **/
  public static factory(data: TimeAttendanceInterface): TimeAttendance{
    return new TimeAttendance(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'TimeAttendance',
      plural: 'TimeAttendances',
      path: 'TimeAttendances',
      idName: 'id',
      properties: {
        "attId": {
          name: 'attId',
          type: 'any'
        },
        "checked_in": {
          name: 'checked_in',
          type: 'Date'
        },
        "checked_out": {
          name: 'checked_out',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "perdoruesId": {
          name: 'perdoruesId',
          type: 'any'
        },
        "timeAttId": {
          name: 'timeAttId',
          type: 'any'
        },
        "orgId": {
          name: 'orgId',
          type: 'any'
        },
      },
      relations: {
        perdorues: {
          name: 'perdorues',
          type: 'Perdorues',
          model: 'Perdorues',
          relationType: 'belongsTo',
                  keyFrom: 'perdoruesId',
          keyTo: 'id'
        },
        org: {
          name: 'org',
          type: 'Org',
          model: 'Org',
          relationType: 'belongsTo',
                  keyFrom: 'orgId',
          keyTo: 'id'
        },
      }
    }
  }
}
