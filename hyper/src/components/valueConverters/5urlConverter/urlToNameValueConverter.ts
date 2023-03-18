import { DataService, IDataService } from "../../../services/dataService";
import { objectType } from "../../../services/objectType";

export class UrlToNameValueConverter {

    constructor(@IDataService private readonly dataService: DataService) { }

    async toView(url: string) {
        const resources = url.replace('https://swapi.dev/api/', '');
        const resource = await this.dataService.getOne(resources.split('/')[0] as objectType, resources.split('/')[1]);
        console.log(resource?.title);
        return resource?.title as string;
    }
}