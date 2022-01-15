import websiteState from './state';
import websiteView from './view';
import './style.css';

class Website {
    constructor(websiteState, websiteView) {
        this.websiteState = websiteState;
        this.websiteView = websiteView;
        this.init();

        this.websiteView.bindNavigationListeners(this.handleNavigationActions.bind(this));
    }

    init() {
        this.websiteView.init();
    }

    handleNavigationActions(title) {
        if (this.websiteState.currentPage != title) {
            const prevPage = [...this.websiteView.DOM.renderedPages]
                .find(page => page.dataset.page === this.websiteState.currentPage);

            this.websiteView.goToPage(title, prevPage);
            this.websiteState.setCurrentPage(title);
        }
    }
}

const website = new Website(websiteState, websiteView);
