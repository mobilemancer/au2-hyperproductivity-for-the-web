import { ISwapiService, SwapiService } from "../../services/swapiDataService";

export class PersonComponent {
    person;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async getPerson(id: string) {
        this.person = await this.swapiService.getById('people', id);
    }

    isArray(input) {
        return Array.isArray(input);
    }
}