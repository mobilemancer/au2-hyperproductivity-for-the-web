import { bindable } from "aurelia";
import { DataService, IDataService } from "../../services/dataService";

export class IntroCrawler {
    public film;

    constructor(@IDataService private readonly dataService: DataService) {

    }

    public async loading(parameters) {
        this.film = await this.dataService.getFromUrl(parameters[0] as string);
        this.setupBackground();
    }

    setupBackground() {
        // Sets the number of stars we wish to display
        const numStars = 100;

        // For every star we want to display
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement("div");
            star.className = "star";
            const xy = this.getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
            document.body.append(star);

            //TODO: Add to array and dismantle on navigation
        }
    }

    // Gets random x, y values based on the size of the container
    private getRandomPosition() {
        const y = window.innerWidth;
        const x = window.innerHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
}