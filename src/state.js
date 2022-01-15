class WebsiteState {
    constructor() {
        this.menu = [];
        this.currentPage = 'home';
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }
}

export default new WebsiteState();