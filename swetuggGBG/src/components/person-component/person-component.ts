import { ISwapiService, SwapiService } from "../../services/swapiService";

export class PersonComponent {
    public fetchingdata = false;
    public person;

    constructor(@ISwapiService private readonly swapiService: SwapiService) { }

    async getPerson(input: string) {
        this.fetchingdata = true;
        this.person = await this.swapiService.getById('people', input);
        this.fetchingdata = false;
    }

    isArray(obj) {
        return Array.isArray(obj);
    }
}