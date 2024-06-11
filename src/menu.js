class MenuItem {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    create() {
        const menuDiv = document.getElementById('menu');
        const menuItem = document.createElement('div');
        menuItem.classList.add("menuItems");
        const menuItemText = document.createElement('div');
        menuItemText.classList.add("menuItemsText")
        const menuItemTitle = document.createElement('h2');
        menuItemTitle.textContent = this.name;
        const menuItemDesc = document.createElement('p');
        menuItemDesc.textContent = this.description;
        menuItemText.append(menuItemTitle);
        menuItemText.append(menuItemDesc);
        menuItem.append(menuItemText);
        const menuItemPrice = document.createElement('div');
        menuItemPrice.textContent = this.price;
        menuItemPrice.classList.add('menuPrice');
        menuItem.append(menuItemPrice);
        menuDiv.appendChild(menuItem);
    }
    
}

function createMenuPage() {
    const contentDiv = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
    const menuDivHeading = document.createElement('h1');
    menuDivHeading.textContent = "Menu";
    menuDiv.append(menuDivHeading);
    contentDiv.append(menuDiv);

    const espresso = new MenuItem("Espresso", "Rich and bold shot of pure coffee", "$3.00");
    espresso.create();
    const americano = new MenuItem("Americano", "Espresso with hot water for a smooth taste", "$3.50");
    americano.create();
    const latte = new MenuItem("Latte", "Espresso, steamed milk, and light foam", "$4.50");
    latte.create();
    const cappuccino = new MenuItem("Cappuccino", "Espresso, steamed milk, foam, with coca", "$4.50");
    cappuccino.create();
    const mocha = new MenuItem("Mocha", "Espresso, chocolate syrup, steamed milk, whipped cream", "$5.00");
    mocha.create();

    const menuFooter = document.createElement('div');
    menuFooter.textContent = "For a full detailed menu, visit us at 123 Atlanta rd. ";
    menuFooter.id = "menuFooter";
    menuDiv.append(menuFooter);
    contentDiv.append(menuDiv);
}   

export { createMenuPage };