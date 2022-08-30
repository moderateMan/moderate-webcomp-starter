import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'moderate-info': {
        first: string,
        middle:string,
        last:string,
      }
    }
  }
}

@Component({
  tag: 'moderate-info',
  styleUrl: 'moderate-info.css',
  shadow: true,
})
export class ModerateInfo {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <div class={'info'}>{this.getText()}</div>
      </div>
    );
  }
}
