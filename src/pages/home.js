const html = `
    <div class="hero">
        <h1>Discover fine Dinning</h1>
        <button>Check our menu</button>
    </div>
    <div class="container">
        <h1 class="title">About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, risus ut feugiat posuere, ligula tortor tincidunt ante, at pulvinar dui tellus sed velit. Duis sed nunc risus. Maecenas ac neque dolor. Suspendisse luctus sem vitae leo posuere, ac suscipit orci finibus. Praesent viverra ullamcorper quam id blandit. Suspendisse ante velit, semper et dictum ac, malesuada vitae sem. Proin a mauris dignissim, pretium est eget, bibendum lorem. Morbi feugiat, nisl non viverra aliquam, orci dui tincidunt enim, et molestie libero ex eget nulla. Nulla ullamcorper posuere ante, non fringilla nibh euismod sit amet. Phasellus velit arcu, tristique sed pellentesque euismod, sodales eget sem.</p>
        <p>Mauris eget libero dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis ipsum eu accumsan pretium. Nulla egestas quam ultrices vestibulum ornare. Etiam sollicitudin imperdiet ex quis consectetur. Nam blandit dui quis facilisis rhoncus. Sed consequat velit sit amet ornare bibendum. Nulla facilisi. Sed ac eros iaculis lacus auctor dapibus. Aliquam erat volutpat. Vestibulum tempus augue nec eros rhoncus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
`;

const checkMenu = (handler) => {
    const el = document.querySelector('.hero button');
    el.addEventListener('click', () => {
        handler('menu');
    });
} 

export default {
    title: 'home',
    icon: '<i class="uil uil-house-user"></i>',
    events: [
        {
            type: 'navigation',
            func: checkMenu,
        }
    ],
    html,
}