  /*document.addEventListener('DOMContentLoaded', () => {
        const shortcutTitles = document.querySelectorAll('.shortcut-title');
        const shortcutList = document.getElementById('shortcut-list');
      
        shortcutTitles.forEach((title) => {
          title.addEventListener('click', (e) => {
            const shortcutText = e.target.textContent;
            const listItem = document.createElement('li');
            listItem.textContent = shortcutText;
            shortcutList.appendChild(listItem);
          });
        });
      });*/



/*document.addEventListener('DOMContentLoaded', () => {
    const shortcutTitles = document.querySelectorAll('.shortcut-title');
    const shortcutList = document.getElementById('shortcut-list');
  
    shortcutTitles.forEach((title) => {
      title.addEventListener('click', (e) => {
        const shortcutText = e.target.textContent;
  
        // Clear the existing shortcuts
        shortcutList.innerHTML = '';
  
        if (shortcutText === 'Windows ShortCuts') {
          const windowsShortcuts = [
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
          ];
  
          windowsShortcuts.forEach((shortcut) => {
            const listItem = document.createElement('li');
            listItem.textContent = shortcut;
            shortcutList.appendChild(listItem);
          });
        }
      });
    });
  });*/
  

document.addEventListener('DOMContentLoaded', () => {
    const shortcutTitles = document.querySelectorAll('.shortcut-title');
    const shortcutList = document.getElementById('shortcut-list');
  
    shortcutTitles.forEach((title) => {
      title.addEventListener('click', (e) => {
        const shortcutText = e.target.textContent;
  
        // Clear the existing shortcuts
        shortcutList.innerHTML = '';
  
        if (shortcutText === 'Windows ShortCuts') {
          const windowsShortcuts = [
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
          ];
  
          windowsShortcuts.forEach((shortcut) => {
            const listItem = document.createElement('li');
            listItem.textContent = shortcut;
            shortcutList.appendChild(listItem);
          });
        } else if (shortcutText === 'Browser ShortCuts') {
          const browserShortcuts = [
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
          ];
  
          browserShortcuts.forEach((shortcut) => {
            const listItem = document.createElement('li');
            listItem.textContent = shortcut;
            shortcutList.appendChild(listItem);
          });
        } else if (shortcutText === 'Most Common ShortCuts') {
          const commonShortcuts = [
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
          ];
  
          commonShortcuts.forEach((shortcut) => {
            const listItem = document.createElement('li');
            listItem.textContent = shortcut;
            shortcutList.appendChild(listItem);
          });
        }
      });
    });
  });
  
  
