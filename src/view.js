import pages from './pages';

class WebsiteView {
    constructor(pages, menu) {
        this.pages = pages;
        this.menu = menu;
        this.DOM = {};
    }

    init() {
        this.renderContent();
        this.renderHeader();
        this.renderNavigation();
        this.renderPages();
        this.renderFooter();
        this.bindLocalListeners();
    }

    renderContent() {
        document.body.innerHTML = `
            <div id="content"></div>
        `;
        this.DOM.content = document.querySelector('#content');
    }

    renderHeader() {
        const html = `
            <header>
                <div class="logo">
                    <i class="uil uil-restaurant"></i> <span>Odin</span>Restaurant
                </div>
                <div><i class="uil uil-phone-volume"></i> +1 124-647-8878</div>
            </header>
        `;
        this.DOM.content.insertAdjacentHTML('afterbegin', html);

        this.DOM.header = document.querySelector('header');
        this.DOM.logo = document.querySelector('.logo');
    }

    renderNavigation() {
        this.DOM.header.insertAdjacentHTML('afterend', `<nav></nav>`);
        this.DOM.contentNav = document.querySelector('nav');

        this.pages.forEach((page, i) => {
            this.DOM.contentNav.insertAdjacentHTML('beforeend', `
                <li data-title="${page.title}" class="${!i ? 'is-active' : ''}">
                    ${page.icon} ${page.title}
                </li>
            `);
        });
    
        this.DOM.navItems = document.querySelectorAll('nav li');
    }

    renderPages() {
        this.DOM.contentNav.insertAdjacentHTML('afterend', `<div id="pages"></div>`);
        this.DOM.contentPages = document.querySelector('#pages');

        this.pages.forEach((page, i) => {
            this.DOM.contentPages.insertAdjacentHTML('beforeend', `
                <section data-page="${page.title}" class="${!i ? 'is-active' : ''}">
                    ${page.html}
                </section>
            `);
        });

        this.DOM.renderedPages = document.querySelectorAll('section');
    }

    renderFooter() {
        const year = new Date().getFullYear();
        const html = `
            <footer>OdinRestaurant<i class="uil uil-registered"></i> ${year}</footer>
        `;
        
        document.body.insertAdjacentHTML('beforeend', html);
        this.DOM.footer = document.querySelector('footer');
    }

    bindNavigationListeners(handler) {
        // Header
        this.DOM.logo.addEventListener('click', () => {
            handler('home');
        });
        // Nav
        this.DOM.navItems.forEach(navItem => {
            navItem.addEventListener('click', function(e) {
                e.stopPropagation();
                handler(this.dataset.title);
            });
        });
        // Pages
        this.pages.forEach((page, i) => { 
            if (page.hasEvents) {
                page.events.forEach(event => {
                    if (event.type === 'navigation') {
                        event.func(handler)
                    }
                }); 
            }
        });
    }

    bindLocalListeners() {
        document.addEventListener('scroll', () => {
            let {scrollY} = window;
            if (scrollY >= 92) {
                this.DOM.header.classList.add('is-scroll');
            } else {
                this.DOM.header.classList.remove('is-scroll');
            }
        });
    }

    goToPage(title, prevPage) {
        this.DOM.navItems.forEach(navItem => navItem.classList.remove('is-active'));
        [...this.DOM.navItems]
            .find(navItem => navItem.dataset.title === title)
            .classList.add('is-active');
        
        prevPage.classList.add('is-out');

        const selectedPage = [...this.DOM.renderedPages].find(page => page.dataset.page === title);

        setTimeout(() => {
            this.DOM.renderedPages.forEach(page => {
                page.classList.remove('is-out');
                page.classList.remove('is-active');
            });
            selectedPage.classList.add('is-active');
        }, 250);
    }
}

export default new WebsiteView(pages);