import { IHttpClient } from "@aurelia/fetch-client";
import { DI } from "aurelia";

import { objectType } from "./objectType";

export class DataService {
    constructor(@IHttpClient readonly http: IHttpClient) {
        http.baseUrl = "https://swapi.dev/api/";
    }

    public async getOne(resource: objectType, id: string) {
        const resourcePath = resource + (id ? `/${id}` : '');
        const result = await this.http.fetch(resourcePath);
        if (!result.ok) {
            throw "Failed to fetch resource";
        }

        return await result.json();
    }

    public async getFromUrl(url: string) {
        const result = await this.http.fetch(url);
        if (!result.ok) {
            throw "Failed to fetch resource";
        }

        return await result.json();
    }

    public async search(resource: objectType, fragment: string) {
        const resourcePath = resource + (fragment ? `/${fragment}` : '');
        const result = await this.http.fetch(resourcePath);
        if (!result.ok) {
            throw "Failed to fetch resource";
        }

        return await result.json();
    }
}

export const IDataService = DI.createInterface<DataService>('DataService',
    (x) => x.singleton(DataService));
