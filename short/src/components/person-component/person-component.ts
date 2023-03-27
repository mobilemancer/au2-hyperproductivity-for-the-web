import { ISwapiService, SwapiService } from "../../services/swapiService";

export class PersonComponent {
    public person;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async getPerson(id) {
        this.person = await this.swapiService.getById("people", id);
    }

    isArray(input) {
        return Array.isArray(input);
    }

}