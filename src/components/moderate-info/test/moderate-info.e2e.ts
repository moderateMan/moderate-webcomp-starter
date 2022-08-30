import { newE2EPage } from '@stencil/core/testing';

describe('moderate-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<moderate-info></moderate-info>');

    const element = await page.find('moderate-info');
    expect(element).toHaveClass('hydrated');
  });
});
