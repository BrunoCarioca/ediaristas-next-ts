import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import RoundedButton from './RoundedButton';

export default {
  title: 'inputs/RoundedButton',
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
  <RoundedButton {...args}>Clique Aqui</RoundedButton>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
};
