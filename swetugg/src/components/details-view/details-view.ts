import { ISwapiService, SwapiService } from "../../services/swapiService";

export class DetailsView {
    public entity: object = undefined;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async loading(params: object) {
        if (params[0]) {
            this.entity = await this.swapiService.getByUrl(params[0]);
        }
    }

    isArray(input) {
        return Array.isArray(input);
    }
}