import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Overlay, { Props } from '../src/components/Overlay';

const meta: Meta = {
    title: 'Overlay',
    component: Overlay,
    argTypes: {
        // children: {
        //     control: {
        //         type: 'text',
        //     },
        // },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story<Props> = args => <Overlay {...args} />;
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default: Story<Props> = Template.bind({});

Default.args = { visible: false };

export const Example: Story<Props> = props => {
    const [visible, setVisible] = useState(false);

    useEffect(() => setVisible(props.visible), [props.visible]);

    return <div>
        <button onClick={() => setVisible(true)}>Open Overlay</button>
        <Overlay {...props} visible={visible} onClick={() => setVisible(false)} />
    </div>;
};
