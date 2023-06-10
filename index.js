document.addEventListener('DOMContentLoaded', function() {
  var container = document.querySelector('.block-of-elements.column');
  var menuData = {}; // Object to store the fetched menu data
  var allData=[menuData];



  function createTitles() {
    var titles = ['Operating Systems', 'Web Browsers', 'Office Suites', 'Code Editors', 'Graphic Design'];

    titles.forEach(function(title) {
      var newDiv = document.createElement('div');
      newDiv.className = 'div element p-1';

      var newH2 = document.createElement('h2');
      newH2.className = 'shortcut-group-title';
      newH2.textContent = title;

      newDiv.appendChild(newH2);
      container.appendChild(newDiv);
    });
  }
  createTitles();

  
  //goes to the api and fetches using ID of main groups browser,operating system...
  var titles = document.querySelectorAll('.div.element.p-1');//creates array browser,operating system...
  for (var i = 0; i < titles.length; i++) {
    var title = titles[i];
    var category = title.textContent;
    console.log(category);
    var url = 'https://linguafranca-001-site1.atempurl.com/api/software/' + (i + 1);
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);
      menuData[category] = data.appsCollection;
      allData.push(menuData[category]);//store the data in array to collect the whole data
      console.log(allData.length);
      createExpandableMenus(category, i + 1);//calls the function for each browser,operating system...
    } else {
      console.log('Error:', request.status);
      // Handle the error here if needed
    }
  }
  

  //creates expandable menu by loop for browser,operating system... using data brought from the api 
  function createExpandableMenus(category, index) {
    var div = document.querySelectorAll('.div.element.p-1')[index - 1]; //creates array  browser,operating system...
    var expandableMenu = document.createElement('ul');
    expandableMenu.className = 'expandable-menu';
    menuData[category].forEach(function(app) {//takes corresponding apps from the storage 
      var menuItem = document.createElement('li');
      menuItem.className = 'App';
      menuItem.textContent = app.name;
      expandableMenu.appendChild(menuItem);
    });
    div.appendChild(expandableMenu);
    
    // Initially hide the expandable menu
    expandableMenu.style.display = 'none';
  }


//expand or close the expandable menu by clicking on operating system, browser
  var h2s = document.querySelectorAll('.shortcut-group-title');
  h2s.forEach(function(h2) {
    h2.addEventListener('click', function() {
      var expandableMenu = h2.nextElementSibling; // Assuming the expandable menu is the next sibling of the clicked h2 element
      if (expandableMenu.style.display === 'none') {
        expandableMenu.style.display = 'block';
      } else {
        expandableMenu.style.display = 'none';
      }
    });
  });
  








  var appItems = document.querySelectorAll('.App');
  var shortcutList = document.getElementById('shortcut-list');
  
  appItems.forEach(function(app) {
    app.addEventListener('click', function() {
      var appName = this.textContent; // Get the content of the clicked li element
      var shortcuts = getMenuDataForApp(appName); // Get the shortcuts for the clicked app
  
      // Clear the existing content of the shortcutList
      shortcutList.innerHTML = '';
  
      // Call the handleMenuItemClick function with the shortcuts
      showShortCuts(shortcuts);
    });
  });
  



  function getMenuDataForApp(appName) {
    // Iterate through the menuData object to find the corresponding app and return its shortcuts
    for (var category in menuData) {
      var appsCollection = menuData[category];
      var app = appsCollection.find(function(app) {
        return app.name === appName;
      });
      if (app) {
        return app.shortCutsWithDescription;
      }
    }
    return []; // Return an empty array if the app is not found
  }
  



  function showShortCuts(shortcuts) {
    // Clear the existing content of the shortcutList
    shortcutList.innerHTML = '';
  
    var index = 1;
    // Create new <li> elements for each shortcut
    shortcuts.forEach(function(shortcut) {
      var li = document.createElement('li');
      li.className = 'shortcuts';
      li.textContent = index + ') ' + shortcut[0];
  
      var description = document.createElement('p');
      description.className="description";
      description.textContent = shortcut[1];
  
      li.appendChild(description); // Append the description to the <li> element
      shortcutList.appendChild(li);
      index++;
    });
  }
  







var searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  var searchValue = searchInput.value.toLowerCase();

  if (searchValue === '') {
    displaySearchResults([]);
    return;
  }

  var searchResults = [];

  // Iterate through each category in allData
  for (var category in allData[0]) {
    // Iterate through each app in the current category
    allData[0][category].forEach(function (app) {
      var appName = app.name.toLowerCase();

      // Check if the app name matches the search value
      if (appName.includes(searchValue)) {
        searchResults.push(app);
      }
    });
  }

  // Display the search results
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.innerHTML = '';

  if (results.length > 0) {
    results.forEach(function (app) {
      var appItem = document.createElement('div');
      appItem.className = 'App';
      appItem.textContent = app.name;
      searchResultsContainer.appendChild(appItem);

      // Add event listener to each search result
      appItem.addEventListener('click', function () {
        // Set the search input value to the clicked app name
        searchInput.value = app.name;

        var section = document.querySelector('.section-one .container .first-box');
        if (section) {
          var offset = 50; // Adjust the offset value as per your requirement
          var topPosition = section.getBoundingClientRect().top;
          window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth'
          });
        }

        var appName = app.name;
        var shortcuts = getMenuDataForApp(appName);
        shortcutList.innerHTML = '';
        showShortCuts(shortcuts);
      });
    });
  } else {
    var noResultsMessage = document.createElement('div');
    noResultsMessage.textContent = 'No results found.';
    searchResultsContainer.appendChild(noResultsMessage);
  }
}


});
 



