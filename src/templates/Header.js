const Header = () => {
    const view = `
        <div class="Header">
            <div class="Header-logo">
                <a href="#">MNTN</a>
            </div>
            <div class="Header-nav" id="nav" >
                <a href="#" class="Header-nav--links">Home</a>
                <a href="#" class="Header-nav--links">News</a>
                <a href="#" class="Header-nav--links">Contact</a>
                <a href="#" class="Header-nav--links">About</a>
                <a href="javascript:void(0);" onclick="myFunction()">
                    <span class="material-icons md-36">menu</span>
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;