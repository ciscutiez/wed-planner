
import CountdownPage from '@/app/(protected)/countdown/page';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountdownPage> = {
  title: 'Page/Countdown Page',
  component: CountdownPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountdownPage>
export default meta

type Story = StoryObj<typeof CountdownPage>
export const Countdown: Story = {
    render: () => <CountdownPage />,
  };
  
