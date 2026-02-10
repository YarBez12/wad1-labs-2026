'use strict'

import JsonStore from "./json-store.js";

const employees = {
    store: new JsonStore('./models/employee.json', { info: {} }),
    collection: 'employee',
    
    getAppInfo() {
        return this.store.findAll(this.collection);
    }
};

export default employees;