class demo {

    constructor(@IEventAggregator readonly ea: IEventAggregator) {
        this.ea.subscribe('event name', payload => {
            // Do stuff       
        });
    }

    sendEvent() {
        this.ea.publish('event name', payload);
    }

}
