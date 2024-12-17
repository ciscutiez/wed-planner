import PinkLayout from '@/components/Layout/PinkLayout';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <PinkLayout>
      <Button variant='default'>Button</Button>
      <Button variant='destructive'>Button</Button>
      <Button variant='ghost'>Button</Button>
      <Button variant='link'>Button</Button>
      <Button variant='secondary'>Button</Button>
    </PinkLayout>
  );
}
