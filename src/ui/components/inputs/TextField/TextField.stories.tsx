import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'inputs/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
