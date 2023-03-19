import { Parameters } from "@aurelia/router";
import { DataService, IDataService } from "../../services/dataService";

export class StarWarsFilms {
    constructor(@IDataService private readonly dataService: DataService) {
        console.log("films");
    }

    // async canLoad(parameters: Parameters) {
    //     console.log(parameters);
    //     if (!parameters[0]) {
    //         return false;
    //     }

    //     // this.dataService()

    //     return true;
    // }

    public loading(parameters: Parameters): void {
        console.log(parameters);
    }
}