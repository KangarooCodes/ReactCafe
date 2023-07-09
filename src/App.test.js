import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './NavBar';
import Add from './NewItemForm';
import { MemoryRouter } from 'react-router-dom';

test('App renders', () => {
  render(<App />);
});

describe('Testing', () => {
  test('NavBar should load', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
    const form = document.getElementById("new-item");
    expect(form).not.toBe(null);
  })
  test('Form input should start with "", per initial state', () => {
    render(<MemoryRouter><Add /></MemoryRouter>);
    const formName = document.getElementById("name");
    expect(formName.value).toBe("");
  })
})
