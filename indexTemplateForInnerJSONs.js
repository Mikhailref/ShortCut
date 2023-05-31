
document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.block-of-elements.column');
  
    function createTitles() {
      var titles = ['Operating Systems', 'Web Browsers', 'Office Suites', 'Code Editors','Graphic Design'];
  
      titles.forEach(function(title, index) {
        var newDiv = document.createElement('div');
        newDiv.className = 'div element p-1';
  
        var newH2 = document.createElement('h2');
        newH2.className = 'shortcut-title text-left';
        newH2.textContent = title;
  
        newDiv.appendChild(newH2);
        container.appendChild(newDiv);
      });
    }
  
    createTitles();
  
    // Fetch data from JSON files
    Promise.all([
      fetch('assets/text/operatingSystems.json').then(response => response.json()),
      fetch('assets/text/officeSuites.json').then(response => response.json()),
      fetch('assets/text/webBrowsers.json').then(response => response.json())
      // Add more fetch requests for other JSON files
    ])
      .then(dataArr => {
        var operatingSystems = dataArr[0].operatingSystems;
        var officeSuites = dataArr[1].officeSuites;
        var webBrowsers = dataArr[2].webBrowsers;
        // Access other data arrays from the response
  
        createExpandableMenus(operatingSystems, 'Operating Systems');
        createExpandableMenus(officeSuites, 'Office Suites');
        createExpandableMenus(webBrowsers, 'Web Browsers');
        // Create expandable menus for other data arrays
      })
      .catch(error => console.log('Error:', error));
  
    // New function to create expandable menus
    function createExpandableMenus(data, category) {
      var div = document.querySelector('.div.element.p-1');
      var expandableMenu = document.createElement('ul');
      expandableMenu.className = 'expandable-menu';
  
      data.forEach(function(item) {
        var menuItem = document.createElement('li');
        menuItem.textContent = item.name;
        menuItem.addEventListener('click', function(event) {
          handleMenuItemClick(event, item.shortcuts);
        });
        expandableMenu.appendChild(menuItem);
      });
  
      // Initially hide the expandable menu
      expandableMenu.style.display = 'none';
  
      var categoryDivs = document.querySelectorAll('.div.element.p-1');
      categoryDivs.forEach(function(div) {
        var title = div.querySelector('.shortcut-title');
        if (title && title.textContent === category) {
          div.appendChild(expandableMenu);
        }
      });
    }
  
    function toggleExpandableMenu(div) {
      var expandableMenu = div.querySelector('.expandable-menu');
      if (expandableMenu) {
        expandableMenu.style.display = (expandableMenu.style.display === 'none') ? 'block' : 'none';
      }
    }
  
    function handleMenuItemClick(event, shortcuts) {
      var shortcutList = document.getElementById('shortcut-list');
  
      // Clear the existing content
      shortcutList.innerHTML = '';
  
      // Create new <li> elements for each shortcut
      shortcuts.forEach(function(shortcut) {
        var li = document.createElement('li');
        li.textContent = shortcut.name + ': ' + shortcut.shortcut;
        shortcutList.appendChild(li);
      });
    }
  
    // Add click event listener to titles
    var titles = document.querySelectorAll('.shortcut-title');
    titles.forEach(function(title) {
      title.addEventListener('click', function() {
        var parentDiv = title.parentElement;
        toggleExpandableMenu(parentDiv);
      });
    });
  });
  