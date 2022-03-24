import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import ArtistCard from './ArtistCard';
import {ThemeProvider} from '../../../Contexts/ThemeContext';

test('should first', () => {
  const items = {
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
      {
        '#text':
          'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
        size: 'mega',
      },
    ],
    listeners: '5354850',
    mbid: 'b95ce3ff-3d05-4e87-9e01-c97b66af13d4',
    name: 'Eminem',
    playcount: '272269112',
    streamable: '0',
    url: 'https://www.last.fm/music/Eminem',
  };
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );

  expect(comp).toMatchSnapshot();
});

/* test('should first', () => {
  expect(5 + 6).toBe(11);
}); */
