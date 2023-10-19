import { ISwapiService, SwapiService } from "../../services/swapiService";

export class DetailsView {
    public fetchingdata = false;
    public entity: object = undefined;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async loading(params: object) {
        if (params[0]) {
            this.entity = undefined;
            this.fetchingdata = true;
            this.entity = await this.swapiService.getByUrl(params[0]);
            this.fetchingdata = false;
        }
    }

    isArray(input) {
        return Array.isArray(input);
    }
}