import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { BtnType, PlayButtonComponent } from './play-button.component';

export default {
  component: PlayButtonComponent,
  decorators: [
    withDesign,
    moduleMetadata({
      declarations: [PlayButtonComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Play Button',
  excludeStories: /.*Data$/,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const actionsData = {
  onClick: action('onClick'),
};

const Template: Story<PlayButtonComponent> = (args: PlayButtonComponent) => ({
  props: { ...args, actionsData },
});

export const Next = Template.bind({});
Next.args = {
  type: BtnType.NEXT,
};

Next.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5MWewNEgMSmMxILUZEW24o/Storybook-Demo?node-id=2%3A4',
  },
};

export const Previous = Template.bind({});
Previous.args = {
  type: BtnType.PREVIOUS,
};
