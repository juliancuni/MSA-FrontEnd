/* tslint:disable */
import {
  TimeAttendance,
  Org
} from '../index';

declare var Object: any;
export interface PerdoruesInterface {
  "emer": string;
  "mbiemer": string;
  "adresa"?: string;
  "email"?: string;
  "tel": string;
  "enabled": boolean;
  "checkedIn": boolean;
  "meTimeAtt": boolean;
  "matOret": boolean;
  "foto": string;
  "attId": number;
  "gishtId"?: number;
  "passNePajisje"?: string;
  "privilegjiNePajisje"?: string;
  "realm"?: any;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  rolet?: any[];
  timeAttendances?: TimeAttendance[];
  org?: Org;
}

export class Perdorues implements PerdoruesInterface {
  "emer": string;
  "mbiemer": string;
  "adresa": string;
  "email": string;
  "tel": string;
  "enabled": boolean;
  "checkedIn": boolean;
  "meTimeAtt": boolean;
  "matOret": boolean;
  "foto": string;
  "attId": number;
  "gishtId": number;
  "passNePajisje": string;
  "privilegjiNePajisje": string;
  "realm": any;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  rolet: any[];
  timeAttendances: TimeAttendance[];
  org: Org;
  constructor(data?: PerdoruesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Perdorues`.
   */
  public static getModelName() {
    return "Perdorues";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Perdorues for dynamic purposes.
  **/
  public static factory(data: PerdoruesInterface): Perdorues{
    return new Perdorues(data);
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
      name: 'Perdorues',
      plural: 'Perdoruesit',
      path: 'Perdoruesit',
      idName: 'id',
      properties: {
        "emer": {
          name: 'emer',
          type: 'string'
        },
        "mbiemer": {
          name: 'mbiemer',
          type: 'string'
        },
        "adresa": {
          name: 'adresa',
          type: 'string',
          default: 'TR'
        },
        "email": {
          name: 'email',
          type: 'string',
          default: 'info@artservis.al'
        },
        "tel": {
          name: 'tel',
          type: 'string'
        },
        "enabled": {
          name: 'enabled',
          type: 'boolean',
          default: true
        },
        "checkedIn": {
          name: 'checkedIn',
          type: 'boolean',
          default: false
        },
        "meTimeAtt": {
          name: 'meTimeAtt',
          type: 'boolean',
          default: true
        },
        "matOret": {
          name: 'matOret',
          type: 'boolean',
          default: true
        },
        "foto": {
          name: 'foto',
          type: 'string',
          default: 'assets/img/user/nopic.png'
        },
        "attId": {
          name: 'attId',
          type: 'number'
        },
        "gishtId": {
          name: 'gishtId',
          type: 'number'
        },
        "passNePajisje": {
          name: 'passNePajisje',
          type: 'string'
        },
        "privilegjiNePajisje": {
          name: 'privilegjiNePajisje',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'any'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        rolet: {
          name: 'rolet',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          modelThrough: 'RoleMapping',
          keyThrough: 'roleId',
          keyFrom: 'id',
          keyTo: 'principalId'
        },
        timeAttendances: {
          name: 'timeAttendances',
          type: 'TimeAttendance[]',
          model: 'TimeAttendance',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'attId'
        },
        org: {
          name: 'org',
          type: 'Org',
          model: 'Org',
          relationType: 'belongsTo',
                  keyFrom: 'realm',
          keyTo: 'id'
        },
      }
    }
  }
}
