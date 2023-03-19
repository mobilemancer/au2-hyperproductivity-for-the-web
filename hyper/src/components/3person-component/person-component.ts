import { DataService, IDataService } from "../../services/dataService";

export class PersonComponent {
    public person: any;

    constructor(@IDataService private readonly dataService: DataService) { }

    async getPerson(name: string) {
        this.person = await this.dataService.getOne("people", name);
    }

    async getFilmTitle(film: string) {
        const result = await this.dataService.getFromUrl(film);//.then((result) => result?.title);
        console.log(result?.title);
        return result?.title;
    }

}
