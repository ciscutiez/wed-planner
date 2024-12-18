import { DashboardSidebar } from '@/components/DashboardSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DashboardSidebar> = {
  title: 'Components/Sidebar',
  component: DashboardSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof DashboardSidebar>;
export default meta;
type Story = StoryObj<typeof DashboardSidebar>;
export const Dashboard: Story = {

};
