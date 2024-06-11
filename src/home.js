import seasonalItem2IMG from './seasonal-menu-1.jpeg';
import seasonalItem1IMG from './seaonal-menu-2.jpeg';
import seasonalItem3IMG from './seasonal-menu-3.jpeg';



function createHomePage() {
    const contentDiv = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home';
    // Heading Div

    const homeHeadingDiv = document.createElement('div');
    homeHeadingDiv.id = 'home-heading';
    const homeHeadingh1 = document.createElement('h1');
    const homeHeadingp = document.createElement('p');
    homeHeadingh1.textContent = "The Best Coffee in Atlanta!";
    homeHeadingp.textContent = "We specialize in the best coffee beans on the market and with our incredible barista's, You should be sure to love it!"
    homeHeadingDiv.appendChild(homeHeadingh1);
    homeHeadingDiv.appendChild(homeHeadingp)

    //Home Content Div

    const homeContentDiv = document.createElement('div');
    homeContentDiv.id = "home-content";
    const homeContentTitle = document.createElement('h1');
    homeContentTitle.textContent = "Speciality Seasonal Menu";
    homeContentDiv.append(homeContentTitle);
    const specialMenuDiv = document.createElement('div');
    specialMenuDiv.id = 'specialMenu';

    //Special menu item #1
    const specialMenuItem1 = document.createElement('div');
    specialMenuItem1.classList.add('specialMenuItem');
    const specialMenuItem1H3 = document.createElement('h3');
    specialMenuItem1H3.innerText = "Seasonal Iced Drinks";
    const specialMenuItem1ImgDiv = document.createElement('div');
    const seasonalItem1 = new Image;
    specialMenuItem1ImgDiv.classList.add('image-holder')
    seasonalItem1.src = seasonalItem1IMG;
    specialMenuItem1ImgDiv.append(seasonalItem1);
    const specialMenuItem1p = document.createElement('p');
    specialMenuItem1p.innerText = "New Mocha, Caramel, and Vanilla speciality iced drinks that will be refreshing in the sumemr time!";
    specialMenuItem1.append(specialMenuItem1H3);
    specialMenuItem1.append(specialMenuItem1ImgDiv);
    specialMenuItem1.append(specialMenuItem1p);
    specialMenuDiv.append(specialMenuItem1);
    
    //Special menu item #2
    const specialMenuItem2 = document.createElement('div');
    specialMenuItem2.classList.add('specialMenuItem');
    const specialMenuItem2H3 = document.createElement('h3');
    specialMenuItem2H3.innerText = "Johnys Donutsssss";
    const specialMenuItem2ImgDiv = document.createElement('div');
    const seasonalItem2 = new Image;
    seasonalItem2.src = seasonalItem2IMG;
    specialMenuItem2ImgDiv.classList.add('image-holder')
    specialMenuItem2ImgDiv.append(seasonalItem2);
    const specialMenuItem2p = document.createElement('p');
    specialMenuItem2p.innerText = "New delicious summer donuts, Limitd Quantity!";
    specialMenuItem2.append(specialMenuItem2H3);
    specialMenuItem2.append(specialMenuItem2ImgDiv);
    specialMenuItem2.append(specialMenuItem2p);
    specialMenuDiv.append(specialMenuItem2);

    //Special menu item #3
    const specialMenuItem3 = document.createElement('div');
    specialMenuItem3.classList.add('specialMenuItem');
    const specialMenuItem3H3 = document.createElement('h3');
    specialMenuItem3H3.innerText = "Hot Drinks";
    const specialMenuItem3ImgDiv = document.createElement('div');
    const seasonalItem3 = new Image;
    seasonalItem3.src = seasonalItem3IMG;
    specialMenuItem3ImgDiv.classList.add('image-holder')
    specialMenuItem3ImgDiv.append(seasonalItem3);
    const specialMenuItem3p = document.createElement('p');
    specialMenuItem3p.innerText = "For a relaxing evening, try our new Hot menu!";
    specialMenuItem3.append(specialMenuItem3H3);
    specialMenuItem3.append(specialMenuItem3ImgDiv);
    specialMenuItem3.append(specialMenuItem3p);
    specialMenuDiv.append(specialMenuItem3);

    homeContentDiv.append(specialMenuDiv);
    
    //Home Footer 

    const homeFooterDiv = document.createElement('div');
    homeFooterDiv.id = "home-footer";
    const homeFooterDivHeading = document.createElement('p');
    homeFooterDivHeading.innerText = "Come and visit us Soon!";
    homeFooterDiv.append(homeFooterDivHeading);

    //Home Footer Table 

    const homeFooterHours = document.createElement('table');
    homeFooterHours.id = "home-footer";
    const homeFooterHoursCaption = document.createElement('caption');
    homeFooterHoursCaption.innerText = "Hours";
    homeFooterHours.append(homeFooterHoursCaption);

    const row1 = document.createElement('tr');
    const row1Heading = document.createElement('th');
    row1Heading.innerText = 'Monday - Friday';
    const row1Cell = document.createElement('td');
    row1Cell.innerText = "5:00 - 5:00";
    row1.append(row1Heading);
    row1.append(row1Cell);
    homeFooterHours.append(row1);

    const row2 = document.createElement('tr');
    const row2Heading = document.createElement('th');
    row2Heading.innerText = 'Weekends';
    const row2Cell = document.createElement('td');
    row2Cell.innerText = "6:00 - 2:00";
    row2.append(row1Heading);
    row2.append(row1Cell);
    homeFooterHours.append(row2);

    homeFooterDiv.append(homeFooterHours);


    homeDiv.append(homeHeadingDiv);
    homeDiv.append(homeContentDiv);
    homeDiv.append(homeFooterDiv);


    contentDiv.append(homeDiv);
}

export { createHomePage };