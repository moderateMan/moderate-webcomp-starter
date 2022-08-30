import { newSpecPage } from '@stencil/core/testing';
import { ModerateInfo } from '../moderate-info';

describe('moderate-info', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModerateInfo],
      html: `<moderate-info></moderate-info>`,
    });
    expect(page.root).toEqualHtml(`
      <moderate-info>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </moderate-info>
    `);
  });
});
