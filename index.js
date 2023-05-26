document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.block-of-elements.column');
    var shortcutList = document.getElementById('shortcut-list');
    var textContent = document.getElementById('text-content');


    function createTitles() {
        var titles = ['Windows Shortcuts','Browser Shortcuts', 'Most Common Shortcuts'];
  
        titles.forEach(function(title, index) {
          var newDiv = document.createElement('div');
          newDiv.className = 'div element p-1';
  
          var newH2 = document.createElement('h2');
          newH2.className = 'shortcut-title text-center';
          newH2.textContent = title;
  
          newDiv.appendChild(newH2);
          container.appendChild(newDiv);
        });
      }
      createTitles();


    var shortcutData = [
      {
        className: 'div element p-1',
        h2ClassName: 'shortcut-title text-center',
        description: 'This is the description for Windows Shortcuts.',
        shortcuts: [
          'Copy: Ctrl + C',
          'Paste: Ctrl + V',
          'Cut: Ctrl + X',
          'Undo: Ctrl + Z',
          'Save: Ctrl + S',
          'Print: Ctrl + P',
          'Select All: Ctrl + A',
          'Find: Ctrl + F',
          'Task Manager: Ctrl + Shift + Esc',
          'Switch between open programs: Alt + Tab'
        ]
      },
      {
        className: 'div element p-1',
        h2ClassName: 'shortcut-title text-center',
        description: 'This is the description for Browser Shortcuts.',
        shortcuts: [
          'Open new tab: Ctrl + T',
          'Close current tab: Ctrl + W',
          'Restore closed tab: Ctrl + Shift + T',
          'Go to next tab: Ctrl + Tab',
          'Go to previous tab: Ctrl + Shift + Tab',
          'Refresh page: Ctrl + R',
          'Open find dialog: Ctrl + F',
          'Open history: Ctrl + H',
          'Open developer tools: Ctrl + Shift + I',
          'Toggle full screen: F11'
        ]
      },
      {
        className: 'div element p-1',
        h2ClassName: 'shortcut-title text-center',
        description: 'This is the description for Most Common Shortcuts.',
        shortcuts: [
          'Undo: Ctrl + Z',
          'Redo: Ctrl + Y',
          'Cut: Ctrl + X',
          'Copy: Ctrl + C',
          'Paste: Ctrl + V',
          'Save: Ctrl + S',
          'Select All: Ctrl + A',
          'Find: Ctrl + F',
          'Print: Ctrl + P',
          'Refresh: F5'
        ]
      }
    ];

   

    function addDescriptionAndShortcuts() {
        const shortcutTitles = document.querySelectorAll('.shortcut-title');
        const shortcutList = document.getElementById('shortcut-list');
      
        shortcutTitles.forEach((title, index) => {
          title.addEventListener('click', (e) => {
            const shortcutText = e.target.textContent;
      
            // Clear the existing shortcuts
            shortcutList.innerHTML = '';
      
            if (shortcutText === 'Windows Shortcuts') {
              shortcutData[index].shortcuts.forEach((shortcut) => {
                const listItem = document.createElement('li');
                listItem.textContent = shortcut;
                shortcutList.appendChild(listItem);
              });

            } else if (shortcutText === 'Browser Shortcuts') {
              shortcutData[index].shortcuts.forEach((shortcut) => {
                const listItem = document.createElement('li');
                listItem.textContent = shortcut;
                shortcutList.appendChild(listItem);
              });

            } else if (shortcutText === 'Most Common Shortcuts') {
              shortcutData[index].shortcuts.forEach((shortcut) => {
                const listItem = document.createElement('li');
                listItem.textContent = shortcut;
                shortcutList.appendChild(listItem);
              });
            }
            // Add more else if statements for additional options
      
          });
        });
      }
      
    addDescriptionAndShortcuts();
  });

  


  
