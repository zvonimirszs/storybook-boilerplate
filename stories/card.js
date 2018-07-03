import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Card from '../components/card';
import beers from './beers.json';

const cardStory = storiesOf('Card', module);

cardStory.add('simple', () => (
    <Card
      imgUrl="https://images.punkapi.com/v2/keg.png"
      name="Pivo"
      id='1'
      tagline="Naše pivo"
      onClickFavorites={renderStarRating}
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
       Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
       Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
       accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
       eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum."
       iconFavorites="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
       iconCart="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
       iconDetails="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
      ></Card>
));

cardStory.add('all beers', () => {
  const cards = beers.map(beer => <Card
        id={beer.id}
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        onClickFavorites={renderStarRating}
        onClickDetails={renderStarRating}
        onClickCart={renderStarRating}
        iconFavorites="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        iconCart="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        iconDetails="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"
        ></Card>);
  return <div className="row">{cards}</div>;
});

function renderStarRating(event) {
  console.log(document.getElementsByName('divMain'));
}
