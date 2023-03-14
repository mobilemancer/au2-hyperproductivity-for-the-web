import { IHttpClient } from "@aurelia/fetch-client";

export class DataService {
    constructor(@IHttpClient readonly http: IHttpClient) {
        http.baseUrl = "https://swapi.dev/api/";
    }

    async getOne(resource: objectType, id: string) {
        const resourcePath = resource + (id ? `/${id}` : '');
        const result = await this.http.fetch(resourcePath);
        if (!result.ok) {
            throw "Failed to fetch resource";
        }

        return await result.json();
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