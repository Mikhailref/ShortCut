document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.block-of-elements.column');
    var menuData = {}; // Object to store the fetched menu data
  
    function createTitles() {
      var titles = ['Operating Systems', 'Web Browsers', 'Office Suites', 'Code Editors', 'Graphic Design'];
  
      titles.forEach(function(title) {
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
  
    // Fetch data from API
    function fetchMenuData(url, category) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          menuData[category] = data.appsCollection;
          createExpandableMenus(category);
        })
        .catch(error => console.log('Error:', error));
    }
  
    // Create expandable menus
    function createExpandableMenus(category) {
      var div = document.querySelector('.div.element.p-1');
      var expandableMenu = document.createElement('ul');
      expandableMenu.className = 'expandable-menu';
  
      menuData[category].forEach(function(item) {
        var menuItem = document.createElement('li');
        menuItem.textContent = item.name;
        menuItem.addEventListener('click', function(event) {
          handleMenuItemClick(event, item.shortCutsWithDescription);
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
        li.textContent = shortcut[0] + ': ' + shortcut[1];
        shortcutList.appendChild(li);
      });
    }
  
    // Add click event listener to titles
    var titles = document.querySelectorAll('.shortcut-title');
    titles.forEach(function(title, index) {
      title.addEventListener('click', function() {
        var parentDiv = title.parentElement;
        toggleExpandableMenu(parentDiv);
  
        var category = title.textContent;
        if (menuData[category]) {
          // If menu data is already fetched, create expandable menus
          createExpandableMenus(category);
        } else {
          // Fetch menu data based on index + 1
          var url = 'https://localhost:7212/api/SoftWare/' + (index + 1);
          fetchMenuData(url, category);
        }
      });
    });
  });
  