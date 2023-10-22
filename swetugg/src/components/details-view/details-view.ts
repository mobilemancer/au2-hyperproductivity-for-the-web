import { ISwapiService, SwapiService } from "../../services/swapiService";

export class DetailsView {
    public fetchingdata = false;
    public entity: object = undefined;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async loading(params: object) {
        if (!params[0]) {
            return;
        }

        this.loadData(params[0]);
    }

    isArray(input) {
        return Array.isArray(input);
    }

    private async loadData(input) {
        this.entity = undefined;
        this.fetchingdata = true;
        this.entity = await this.swapiService.getByUrl(input);
        this.fetchingdata = false;
    }
}