import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Header } from './Header';

export default {
  title: 'surfaces/Header',
  componenet: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
Default.args = {};
