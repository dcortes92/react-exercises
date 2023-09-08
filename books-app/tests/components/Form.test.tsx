import { render, screen } from '@testing-library/react'
import { Form } from '../../src/components/Form';

const formProps = {
  title: '',
  author: '',
  country: '',
  year: '',
  onChange: () => {}
}

test('Renders the Form component', () => {
  render(<Form {...formProps} />);
  const title = screen.getByText(/Title/i);
  expect(title).toBeInTheDocument();
});