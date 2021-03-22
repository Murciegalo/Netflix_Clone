import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Player from '../components/player/Player'

describe('<Player />', () => {
  it('renders the <Player /> with a bunny video', () => {
    const { getByText, queryByTestId, container } = render(
      <Player>
        <Player.Btn />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );

    expect(queryByTestId('player')).tobeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).tobeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  })
})

