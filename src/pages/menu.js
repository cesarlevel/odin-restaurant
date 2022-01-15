import menu from '../data/menu';

const html = `
    <div class="container">
        <h1 class="title">Our menu</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, risus ut feugiat posuere, ligula tortor tincidunt ante, at pulvinar dui tellus sed velit. Duis sed nunc risus. Maecenas ac neque dolor. Suspendisse luctus sem vitae leo posuere, ac suscipit orci finibus. Praesent viverra ullamcorper quam id blandit. Suspendisse ante velit, semper et dictum ac, malesuada vitae sem. Proin a mauris dignissim, pretium est eget, bibendum lorem.</p>
        <div id="menu">
            ${
                menu.map(menuSection => {
                    return `
                        <h2>${menuSection.name}</h2>
                        <ul>
                            ${
                                menuSection.items.map(item => {
                                    return `
                                        <li>
                                            <p><strong>${item.name}</strong><i>${priceFormat(item.price)}</i></p>
                                            <p>${item.description}</p>
                                        </li>
                                    `;
                                }).join('')
                            }
                        </ul>
                    `;
                }).join('')
            }
        </div>
    </div>
`;

function priceFormat(amount) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
}

export default {
    title: 'menu',
    icon: '<i class="uil uil-utensils"></i>',
    html,
}