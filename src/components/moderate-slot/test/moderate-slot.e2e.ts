import { newE2EPage } from '@stencil/core/testing';

describe('moderate-slot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<moderate-slot></moderate-slot>');

    const element = await page.find('moderate-slot');
    expect(element).toHaveClass('hydrated');
  });
});
