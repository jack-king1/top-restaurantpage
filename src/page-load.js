function loadHome(){
    let homeContent = `<div id="home">
            <div>
                <h3>Welcome!</h3>
            </div>
            <div>
                <p>We are Beaned, we are a coffee house in Exeter. With naturally
                    curated beans and customer service to match we are the perfect
                    place for a weekend catchup or an office hangout!
                </p>
            </div>
            <div><button>See Menu</button></div>
        </div>`;
    return homeContent;
}

function loadAbout(){
    let aboutContent = `        <div id="about">
            <div>
                <h3>About</h3>
            </div>
            <div>
                <p>We are a perfect hub for local business persons and regular cafe goers!</p>
                <p>With our high speed internet and luxurious private seating we have seating for whatever fits your needs!</p>
                <p>With professionally brewed coffee and freshly baked pastries we are the one stop shop for your morning coffee or afternoon break.</p>
            </div>
        </div>`;
return aboutContent;
}

function loadMenu(){
    let menuContent = `<div id="menu">
            <div>
                <h3>Menu</h3>
            </div>
            <div class="menu-item">White:</div>
            <div class="menu-item"><b>£4.95</b></div>
            <div class="menu-item">Latte:</div>
            <div class="menu-item"><b>£4.95</b></div>
            <div class="menu-item">Mocha:</div>
            <div class="menu-item"><b>£4.95</b></div>
        </div>`;
return menuContent;
}

function loadContact(){
    let contactContent = `        <div id="contact">
            <div>
                <h3>Contact</h3>
            </div>
            <div>
                <p>
                    If you would like to contact us please call us on 01392 000000
                </p>
                <p>
                    Or if yo would prefer to email us at: beaned@gmail.com
                </p>
            </div>
        </div>`;
return contactContent;
}

export {loadAbout, loadHome, loadMenu, loadContact}