const tabs = document.querySelectorAll('.tabs');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const tabPanelsArray = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide others tabs
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  // mark all tab unselected
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the tab panel that matches the clicked tab
  const { id } = event.currentTarget;

  // method 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby ="${id}"]`);
  // tabPanel.hidden = false;

  // method 2 - find in the array of tab panels
  // tab panels es un NodelList, hay que convertirlo a un array
  const tabPanel = tabPanelsArray.find(
    (panel) => panel.getAttribute('aria-labelledby') === id,
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick),
);
