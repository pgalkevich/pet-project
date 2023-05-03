import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Button, EButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Кнопка',
    },
};

export const Clear: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Кнопка',
        theme: EButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        children: 'Кнопка',
        theme: EButtonTheme.OUTLINE,
    },
};

