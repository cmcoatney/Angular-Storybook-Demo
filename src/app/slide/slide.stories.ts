import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { SlideComponent } from './slide.component';
import { slide } from 'src/shared/models/slide';

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
  component: SlideComponent,
  decorators: [
    moduleMetadata({
      declarations: [SlideComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Slide',
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story<SlideComponent> = (args: SlideComponent) => ({
  props: args,
});

export const SlideZero = Template.bind({});
SlideZero.args = {
  image: slides[0].image,
};

export const SlideOne = Template.bind({});
SlideOne.args = {
  image: slides[1].image
};

export const SlideTwo = Template.bind({});
SlideTwo.args = {
  image: slides[2].image,
};

export const SlideThree = Template.bind({});
SlideThree.args = {
  image: slides[3].image,
};

export const SlideFour = Template.bind({});
SlideFour.args = {
  image: slides[4].image,
};

export const SlideFive = Template.bind({});
SlideFive.args = {
  image: slides[5].image,
};

export const SlideSix = Template.bind({});
SlideSix.args = {
  image: slides[6].image,
};




