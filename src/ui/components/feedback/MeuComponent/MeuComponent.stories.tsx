import { ComponentMeta, ComponentStory } from '@storybook/react';
import MeuComponent from './MeuComponent';

export default {
  title: 'feedback/MeuComponent',
  component: MeuComponent,
  argTypes: {},
} as ComponentMeta<typeofMeuComponent;

const Template: ComponentStory<typeof MeuComponent> = (args) => {
  return <MeuComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
