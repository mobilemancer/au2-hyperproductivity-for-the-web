import { ISwapiService, SwapiService } from "../../services/swapiDataService";

export class PersonComponent {
    person;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async getPerson(input: string) {
        this.person = await this.swapiService.getById('people', input);
    }

    isArray(obj) {
        return Array.isArray(obj);
    }
}