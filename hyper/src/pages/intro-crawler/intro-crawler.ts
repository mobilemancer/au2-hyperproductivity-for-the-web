import { DataService, IDataService } from "../../services/dataService";


export class IntroCrawler {
    public film;
    private stars: Array<HTMLDivElement> = [];

    constructor(@IDataService private readonly dataService: DataService) { }

    public async loading(parameters) {
        this.film = await this.dataService.getFromUrl(parameters[0] as string);
        this.setupBackground();
    }

    public unloading() {
        // remove all the stars
        this.stars.forEach(div => div.remove());
    }

    private setupBackground(): void {
        // Sets the number of stars we wish to display
        const numStars = 500;

        // For every star we want to display
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement("div");
            star.className = "star";
            const xy = this.getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
            document.body.append(star);
            this.stars.push(star);
        }
    }

    // Gets random x, y values based on the size of the container
    private getRandomPosition(): [number, number] {
        const y = window.innerWidth;
        const x = window.innerHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
}