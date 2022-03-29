import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { CommonModule } from '@angular/common';

import { SlideshowComponent } from './slideshow.component';
import { slide } from 'src/shared/models/slide';
import {
  BtnType,
  PlayButtonComponent,
} from '../play-button/play-button.component';
import { SlideComponent } from '../slide/slide.component';

const slides: slide[] = [
  { position: 0, image: 'assets/images/000.png' },
  { position: 1, image: 'assets/images/001.png' },
  { position: 2, image: 'assets/images/002.png' },
  { position: 3, image: 'assets/images/003.png' },
  { position: 4, image: 'assets/images/004.png' },
  { position: 5, image: 'assets/images/005.png' },
  { position: 6, image: 'assets/images/006.png' },
];

export default {
  component: SlideshowComponent,
  decorators: [
    moduleMetadata({
      declarations: [PlayButtonComponent, SlideComponent, SlideshowComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Slideshow',
  excludeStories: /.*Data$/,
  argTypes: {
    handleNextEvent: { action: 'handleNextEvent' },
    handlePreviousEvent: { action: 'handlePreviousEvent' },
  },
} as Meta;

export const actionsData = {
  handleNextEvent: action('handleNextEvent'),
  handlePreviousEvent: action('handlePreviousEvent'),
};

const Template: Story<SlideshowComponent> = (args: SlideshowComponent) => ({
  props: {...args, actionsData, }
});

export const Default = Template.bind({});
Default.args = {
  slides: slides,
  previous: BtnType.PREVIOUS,
  next: BtnType.NEXT,
};
