import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/example.js');
}

configure(loadStories, module);