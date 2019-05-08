/* tslint:disable */
import {
  Perdorues,
  TimeAttendance,
  OrgPrivateData
} from '../index';

declare var Object: any;
export interface OrgInterface {
  "domain": string;
  "id"?: any;
  perdorues?: Perdorues[];
  timeAttendances?: TimeAttendance[];
  orgPrivateData?: OrgPrivateData;
}

export class Org implements OrgInterface {
  "domain": string;
  "id": any;
  perdorues: Perdorues[];
  timeAttendances: TimeAttendance[];
  orgPrivateData: OrgPrivateData;
  constructor(data?: OrgInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Org`.
   */
  public static getModelName() {
    return "Org";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Org for dynamic purposes.
  **/
  public static factory(data: OrgInterface): Org{
    return new Org(data);
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
      name: 'Org',
      plural: 'Orgs',
      path: 'Orgs',
      idName: 'id',
      properties: {
        "domain": {
          name: 'domain',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        perdorues: {
          name: 'perdorues',
          type: 'Perdorues[]',
          model: 'Perdorues',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'realm'
        },
        timeAttendances: {
          name: 'timeAttendances',
          type: 'TimeAttendance[]',
          model: 'TimeAttendance',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'timeAttId'
        },
        orgPrivateData: {
          name: 'orgPrivateData',
          type: 'OrgPrivateData',
          model: 'OrgPrivateData',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'orgId'
        },
      }
    }
  }
}
