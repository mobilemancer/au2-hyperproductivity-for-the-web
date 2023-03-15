import { DataService, IDataService } from "../../services/dataService";

export class PersonComponent {
    public person: any;

    constructor(@IDataService private readonly dataService: DataService) { }

    async getPerson(name: string) {
        this.person = await this.dataService.getOne("people", name);
    }

}
