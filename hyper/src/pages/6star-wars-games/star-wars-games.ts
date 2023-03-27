export class StarWarsGames {
    private token = "ring";
    public clickHandler(event) {
        event.target.classList.add(this.token);
        this.token = this.token === "ring" ? "cross" : "ring";
    }
}