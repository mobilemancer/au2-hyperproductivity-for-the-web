import { observable } from "aurelia";

export class fanOMeter {

    public verdict = "Select, and be judged!";

    @observable public answer;

    public answerChanged(newValue, oldValue) {
        switch (newValue) {
            case "0":
                this.verdict = "Really!? 😲";
                break;
            case "1":
                this.verdict = "Old School 👍"
                break;
            case "2":
                this.verdict = "New School 👌"
                break;

            default:
                break;
        }
    }

}