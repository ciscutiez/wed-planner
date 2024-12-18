
import BudgetPage from '@/app/(protected)/budget/page';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BudgetPage> = {
  title: 'Page/Budget Page',
  component: BudgetPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BudgetPage>
export default meta

type Story = StoryObj<typeof BudgetPage>
export const Budget: Story = {
    render: () => <BudgetPage />,
  };
  
