import { DI, IHttpClient } from "aurelia";

export class SwapiService {
    constructor(@IHttpClient readonly http: IHttpClient) {
        http.baseUrl = "https://swapi.dev/api/";
    }

    public async getById(resource: objectType, id: string) {
        const resourcePath = `${resource}/${id}`;
        const result = await this.http.fetch(resourcePath);
        if (!result.ok) {
            throw "Failed to fetch resource";
        }

        return await result.json();
    }
}

export const ISwapiService = DI.createInterface<SwapiService>('SwapiService',
    (x) => x.singleton(SwapiService));

export type objectType =
    "films" |
    "people" |
    "planets" |
    "species" |
    "starships" |
    "vehicles";
