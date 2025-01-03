'use client';

import React from 'react';

import {
  Calendar,
  Users,
  Mail,
  Settings,
  LogOut,
  BarChart,
  DollarSign,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import Link from 'next/link';


// Define an array of routes for the sidebar
const links = [
  { href: '/dashboard', label: 'Dashboard', icon: Calendar },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/guests', label: 'Guest List', icon: Users },
  { href: '/notifications', label: 'Notifications', icon: Mail },
  { href: '/budget', label: 'Budget Tracker', icon: DollarSign },
  { href: '/analytics', label: 'Analytics', icon: BarChart },
  { href: '/vendors', label: 'Vendors', icon: Users },
];

// Settings and logout links
const settingsLinks = [
  { href: '/profile', label: 'Profile', icon: Settings },
  { href: '/logout', label: 'Logout', icon: LogOut },
];

export function DashboardSidebar() {


  return (
    <Sidebar className='bg-pink-50 text-pink-800 w-64 min-h-screen'>
      <SidebarHeader className='p-4'>
        <h2 className='text-2xl font-bold text-pink-700'>Wedding Planner</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    // isActive={pathname?.startsWith(link.href)}
                    className='hover:bg-pink-100 data-[active=true]:bg-pink-200 data-[active=true]:text-pink-800'
                  >
                    <Link href={link.href}>
                      <link.icon className='w-5 h-5 mr-2' />
                      {link.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    // isActive={pathname?.startsWith(link.href)}
                    className='hover:bg-pink-100 data-[active=true]:bg-pink-200 data-[active=true]:text-pink-800'
                  >
                    <Link href={link.href}>
                      <link.icon className='w-5 h-5 mr-2' />
                      {link.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
