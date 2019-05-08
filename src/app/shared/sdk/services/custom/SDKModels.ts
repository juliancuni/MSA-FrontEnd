/* tslint:disable */
import { Injectable } from '@angular/core';
import { Perdorues } from '../../models/Perdorues';
import { TimeAttendance } from '../../models/TimeAttendance';
import { Log } from '../../models/Log';
import { Org } from '../../models/Org';
import { OrgPrivateData } from '../../models/OrgPrivateData';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Perdorues: Perdorues,
    TimeAttendance: TimeAttendance,
    Log: Log,
    Org: Org,
    OrgPrivateData: OrgPrivateData,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
