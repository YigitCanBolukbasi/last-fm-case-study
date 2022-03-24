import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import ProductCard from './ProductCard';
import {ThemeProvider} from '../../../Contexts/ThemeContext';

test('should first', () => {
  const items = {
    '@attr': {
      rank: '20',
    },
    artist: {
      mbid: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9',
      name: 'The Weeknd',
      url: 'https://www.last.fm/music/The+Weeknd',
    },
    image: [
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'small',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'medium',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'large',
      },
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'extralarge',
      },
    ],
    listeners: '341031',
    mbid: '05a472b0-09e5-44cd-bf2d-f6f6ab56cc32',
    name: 'What You Need',
    playcount: '2619123',
    streamable: '0',
    url: 'https://www.last.fm/music/The+Weeknd/_/What+You+Need',
  };
  const comp = render(
    <ThemeProvider>
      <ProductCard product={items} />
    </ThemeProvider>,
  );
  expect(comp).toMatchSnapshot();
});
