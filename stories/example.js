import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ExampleComponent } from '../components/example/index';

const buttonStory = storiesOf('Button', module)

buttonStory.add('with text', () => (
  <button onClick={action('clicked')}>Hello Button</button>
))
  
buttonStory.add('with some emoji', () => (
  <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
))
  
buttonStory.add('stisni me', () => (
  <button>Mogu pisat kad sejvam</button>
));

buttonStory.add('example component', () => (
  <ExampleComponent></ExampleComponent>
));