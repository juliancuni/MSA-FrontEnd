/* tslint:disable */

declare var Object: any;
export interface LogInterface {
  "dataOra": Date;
  "event": string;
  "senderId": string;
  "mesazhi"?: string;
  "type": string;
  "rolet"?: Array<any>;
  "id"?: any;
}

export class Log implements LogInterface {
  "dataOra": Date;
  "event": string;
  "senderId": string;
  "mesazhi": string;
  "type": string;
  "rolet": Array<any>;
  "id": any;
  constructor(data?: LogInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Log`.
   */
  public static getModelName() {
    return "Log";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Log for dynamic purposes.
  **/
  public static factory(data: LogInterface): Log{
    return new Log(data);
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
      name: 'Log',
      plural: 'Logs',
      path: 'Logs',
      idName: 'id',
      properties: {
        "dataOra": {
          name: 'dataOra',
          type: 'Date'
        },
        "event": {
          name: 'event',
          type: 'string'
        },
        "senderId": {
          name: 'senderId',
          type: 'string'
        },
        "mesazhi": {
          name: 'mesazhi',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "rolet": {
          name: 'rolet',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
