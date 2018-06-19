import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Image from '../components/image';

const footerStory = storiesOf('Footer', module);

footerStory.add('simple', () => (
  <Image
     imgUrl="https://images.punkapi.com/v2/keg.png"
     class=""
  ></Image>
));
