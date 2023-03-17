import { bindable, observable } from "aurelia";

export class fanOMeter {

    @bindable public name: string;

    @observable public answer: string;

    public verdict: string; // = "Select, and be judged!";

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