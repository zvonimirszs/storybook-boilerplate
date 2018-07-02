import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/card');
  require('../stories/footer');
  require('../stories/header');
  require('../stories/main-content');
  require('../stories/navigation-menu');
  require('../stories/roundicon-button');
}

configure(loadStories, module);