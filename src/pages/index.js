import home from './home';
import menu from './menu';
import contact from './contact';

class Pages {
    constructor({title, icon = '', events = [], html} = {}) {
        this.title = title;
        this.icon = icon;
        this.events = events;
        this.html = html;
    }

    get hasEvents() {
        return Boolean(this.events.length);
    }
}
export default [
    new Pages(home), 
    new Pages(menu), 
    new Pages(contact)
];
