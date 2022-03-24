import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import ArtistCard from './ArtistCard';
import {ThemeProvider} from '../../../Contexts/ThemeContext';

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

test('should render component', () => {
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );

  expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
  const title = 'Artist';
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );
  const artistTitle = comp.getByTestId('artist-title').children[0];
  expect(artistTitle).toBe(title);
});

test('should render name correctly', () => {
  const name = items.name;
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );
  const artistName = comp.getByTestId('artist-name').children[0];
  expect(artistName).toBe(name);
});
test('should render playcount correctly', () => {
  const playCount = 'Playcount:';
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );
  const artistPlaycount = comp.getByTestId('artist-playcount').children[0];
  expect(artistPlaycount).toBe(playCount);
});
test('should render listeners correctly', () => {
  const listeners = 'Listeners:';
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} />
    </ThemeProvider>,
  );
  const artistListeners = comp.getByTestId('artist-listeners').children[0];
  expect(artistListeners).toBe(listeners);
});

test('should triggered onSelect', () => {
  const mockFunction = jest.fn();
  const comp = render(
    <ThemeProvider>
      <ArtistCard artist={items} onSelect={mockFunction} />
    </ThemeProvider>,
  );
  const buttonTouchable = comp.getByTestId('artist-touchable');
  fireEvent(buttonTouchable, 'press');
  expect(mockFunction).toBeCalled();
});
