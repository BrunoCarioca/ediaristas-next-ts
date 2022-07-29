import { MenuItem } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
    title: 'inputs/Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <Select {...args}>
        <MenuItem value={''}>Selecione um item</MenuItem>
        <MenuItem value={10}> DEZ </MenuItem>
        <MenuItem value={20}> vinte </MenuItem>
        <MenuItem value={30}> trinta </MenuItem>
    </Select>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Números',
    value: 10,
};
