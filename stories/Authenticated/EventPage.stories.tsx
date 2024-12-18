
import EventPage from '@/app/(protected)/event/page';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventPage> = {
  title: 'Page/Event Page',
  component: EventPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EventPage>
export default meta

type Story = StoryObj<typeof EventPage>
export const Event: Story = {
    render: () => <EventPage />,
  };
  
