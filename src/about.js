function createAboutPage() {
    const contentDiv = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    aboutDiv.id = "about";
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Us";
    aboutDiv.append(aboutTitle);
    const aboutDesc = document.createElement('p');
    aboutDesc.textContent = "We are a small and growing coffee shop in Atlanta, Georgia! We use only the best quality ingredients and we are sure to not disappoint! Come check us out at 123 Atlanta Rd.";
    aboutDiv.append(aboutDesc);

    const aboutFooterHours = document.createElement('table');
    aboutFooterHours.id = "aboutFooter";

    const row1 = document.createElement('tr');
    const row1Heading = document.createElement('th');
    row1Heading.innerText = 'Monday - Friday';
    const row1Cell = document.createElement('td');
    row1Cell.innerText = "5:00 - 5:00";
    row1.append(row1Heading);
    row1.append(row1Cell);
    aboutFooterHours.append(row1);

    const row2 = document.createElement('tr');
    const row2Heading = document.createElement('th');
    row2Heading.innerText = 'Weekends';
    const row2Cell = document.createElement('td');
    row2Cell.innerText = "6:00 - 2:00";
    row2.append(row2Heading);
    row2.append(row2Cell);
    aboutFooterHours.append(row2);

    aboutDiv.append(aboutFooterHours);


    contentDiv.append(aboutDiv);
}

export {createAboutPage};