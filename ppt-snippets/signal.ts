import { ISignaler } from "aurelia";

export class signal {
    constructor(@ISignaler readonly signaler: ISignaler) { }

    public localeChanged() {
        this.signaler.dispatchSignal("locale.changed");
    }
}
