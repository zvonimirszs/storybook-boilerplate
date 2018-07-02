import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import styles from './index.css';
import ImageText from '../components/image-text';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import Card from '../components/card';
import Menu from '../components/menu';

const beers = require('./beers');

const maincontentStory = storiesOf('Main Content', module);

const links = [
  {
    id: 1,
    content: <a href="google.com">Google</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="google.com">Moogle</a>,
  },
  {
    id: 3,
    content: <a href="google.com">Home</a>,
    active: false,
  },
  {
    id: 4,
    content: <a href="google.com">Favoriets</a>,
  },
  {
    id: 5,
    content: <a href="google.com">About as</a>,
  },
];

maincontentStory.add('simple', () => (
  <Menu links={links} />
));

maincontentStory.add('simple2', () => {
  const cards = beers.map(beer => <Card
    key={beer.id}
    imgUrl={beer.image_url}
    name={beer.name}
    tagline={beer.tagline}
    description={beer.description}
  ></Card>);
  return (
    <div className={styles.main}>
      <Header
        imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
        class=""
      ></Header>
      <Navigation links={links} />
      <div className={styles.body}>
        <div className={styles.content}>
          <Main>{cards}</Main>
        </div>
        <div className={styles.menu}>
          <Menu links={links} />
          <Footer>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Twitter"
        href="http://iusinfo.hr"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Facebook"
        href="http://iusinfo.hr"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="GitHub"
      ></ImageText>
      <ImageText
        imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        classImg="img"
        classTxt="text"
        text="Instagram"
      ></ImageText>
   </Footer>
        </div>
      </div>
      
    </div>
  );
});
