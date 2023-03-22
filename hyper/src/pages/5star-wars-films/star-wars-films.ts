import { Parameters } from "@aurelia/router";
import { DataService, IDataService } from "../../services/dataService";

export class StarWarsFilms {

    public film: any;

    constructor(@IDataService private readonly dataService: DataService) { }

    public async loading(parameters: Parameters): Promise<void> {
        console.log(parameters);
        this.film = await this.dataService.getOne("films", parameters[0] as string);
        console.log(this.film);
    }
}