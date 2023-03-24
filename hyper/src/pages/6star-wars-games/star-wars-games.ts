export class StarWarsGames {
    private token = "ring";
    public clickHandler(event) {
        console.log(event);

        event.target.classList.add(this.token);
        if (this.token === "ring") {
            this.token = "cross";
        } else {
            this.token = "ring";
        }
    }
}