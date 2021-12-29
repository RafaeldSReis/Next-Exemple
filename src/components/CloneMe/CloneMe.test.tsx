import { screen } from '@testing-library/react';
import { CloneMe } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('shold render', () => {
    renderTheme(<CloneMe />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
