/* tslint:disable */
import {
  Org
} from '../index';

declare var Object: any;
export interface OrgPrivateDataInterface {
  "emri"?: string;
  "sllogani"?: string;
  "nius"?: string;
  "adresa"?: string;
  "id"?: any;
  "orgId"?: any;
  org?: Org;
}

export class OrgPrivateData implements OrgPrivateDataInterface {
  "emri": string;
  "sllogani": string;
  "nius": string;
  "adresa": string;
  "id": any;
  "orgId": any;
  org: Org;
  constructor(data?: OrgPrivateDataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrgPrivateData`.
   */
  public static getModelName() {
    return "OrgPrivateData";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrgPrivateData for dynamic purposes.
  **/
  public static factory(data: OrgPrivateDataInterface): OrgPrivateData{
    return new OrgPrivateData(data);
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
      name: 'OrgPrivateData',
      plural: 'orgPrivateData',
      path: 'orgPrivateData',
      idName: 'id',
      properties: {
        "emri": {
          name: 'emri',
          type: 'string'
        },
        "sllogani": {
          name: 'sllogani',
          type: 'string'
        },
        "nius": {
          name: 'nius',
          type: 'string'
        },
        "adresa": {
          name: 'adresa',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "orgId": {
          name: 'orgId',
          type: 'any'
        },
      },
      relations: {
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
