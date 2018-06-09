import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/card');
}

configure(loadStories, module);