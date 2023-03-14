import { IHttpClient } from "@aurelia/fetch-client";

export class DataService {
    constructor(@IHttpClient readonly http: IHttpClient) { }

    getOne(obj: objectType, id: string) {
        this.http.fetch()
    }
}

export type objectType =
    "person"
    | "films"
    | "people"
    | "planets"
    | "species"
    | "starships"
    | "vehicles";