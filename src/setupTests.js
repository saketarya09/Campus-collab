// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'text-encoding';
 // Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
