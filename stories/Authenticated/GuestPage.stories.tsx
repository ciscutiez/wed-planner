
import GuestPage from '@/app/(protected)/guest/page';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GuestPage> = {
  title: 'Page/Guest Page',
  component: GuestPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GuestPage>
export default meta

type Story = StoryObj<typeof GuestPage>
export const Guest: Story = {
    render: () => <GuestPage />,
  };
  
