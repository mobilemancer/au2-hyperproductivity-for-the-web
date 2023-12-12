import { ISwapiService, SwapiService } from "../../services/swapiService";

export class DetailsView {
    public url: string;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async loading(params: object) {
        if (!params[0]) {
            return;
        }

        this.url = params[0];
    }

    public async loadEntity() {
        if (!this.url) { return; }

        return this.swapiService.getByUrl(this.url);
    }

    isArray(input) {
        return Array.isArray(input);
    }
}