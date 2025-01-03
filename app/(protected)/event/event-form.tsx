import { Button } from '@/components/ui/button';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
const eventTypes = [
  { label: 'Birthday', value: 'birthday' },
  { label: 'Wedding', value: 'wedding' },
  { label: 'Anniversary', value: 'anniversary' },
  { label: 'Corporate Event', value: 'corporate' },
  { label: 'Other', value: 'other' },
] as const;

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Please use YYYY-MM-DD format.',
  }),
  type: z.string({
    required_error: 'Please select an event type.',
  }),
});
export default function EventForm() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      date: '',
      type: '',
    },
  });

  const events = [
    {
      id: 1,
      title: 'Engagement Party',
      date: '2024-12-10',
      status: 'Upcoming',
    },
    { id: 2, title: 'Wedding Ceremony', date: '2025-01-01', status: 'Planned' },
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
    form.reset();
  }
  return (
    <div className='mt-6 flex justify-end'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='inline-flex items-center'>
            <PlusCircle className='mr-2 h-4 w-4' />
            Add Event
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter event title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Date</FormLabel>
                  <FormControl>
                    <Input type='date' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='type'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Event Type</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          role='combobox'
                          className={cn(
                            'w-full justify-between',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value
                            ? eventTypes.find(
                                (eventType) => eventType.value === field.value
                              )?.label
                            : 'Select event type'}
                          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-[200px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search event type...' />
                        <CommandEmpty>No event type found.</CommandEmpty>
                        <CommandGroup>
                          {eventTypes.map((eventType) => (
                            <CommandItem
                              value={eventType.label}
                              key={eventType.value}
                              onSelect={() => {
                                form.setValue('type', eventType.value);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  eventType.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {eventType.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Add Event</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}


