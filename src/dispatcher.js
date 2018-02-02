class Dispatcher {
    constructor() {
        this.callbacks = [];
    }
    register(callback) {
        this.callbacks.push(callback);
    }
    dispatch(payload) {
        this.callbacks.forEach(callback => callback(payload));
    }
}

export default new Dispatcher();
