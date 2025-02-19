"use client"
import React from 'react'
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Checkbox } from '@/components/ui/checkbox';

import Link from 'next/link';
export default function SigninForm() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <>
    <form className='space-y-6 mx-auto'>
      <div>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          name='email'
          // value={data.email}
          className='mt-1 block w-full'
          autoComplete='username'
          // onChange={(e) => setData("email", e.target.value)}
          required
        />
        {/* {errors.email && (
                    <Alert variant="destructive" className="mt-2">
                        <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                )} */}
      </div>

      <div>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          type={showPassword ? 'text' : 'password'}
          name='password'
          // value={data.password}
          className='mt-1 block w-full'
          autoComplete='current-password'
          // onChange={(e) => setData("password", e.target.value)}
          required
        />
        {/* {errors.password && (
                    <Alert variant="destructive" className="mt-2">
                        <AlertDescription>
                            {errors.password}
                        </AlertDescription>
                    </Alert>
                )} */}
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Checkbox
            id='remember'
            name='remember'
            // checked={data.remember}
            // onCheckedChange={(checked) =>
            //     setData("remember", checked)
            // }
          />
          <Label htmlFor='remember' className='ml-2 text-sm'>
            Remember me
          </Label>
        </div>
        <div className='flex items-center'>
          <Checkbox
            id='show-password'
            className='mr-2'
            onChange={() => setShowPassword(!showPassword)}
          />
          <Label htmlFor='show-password' className='text-sm'>
            Show Password
          </Label>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <Link
          href='/passwordrequest'
          className='text-sm text-pink-600 hover:text-pink-500'
        >
          Forgot your password?
        </Link>
        <Button
          type='submit'
          className='bg-pink-600 hover:bg-pink-700'
          // disabled={processing}
        >
          Log in
        </Button>
      </div>

      <div className='text-center'>
        <Link
          href='/auth/signup'
          className='text-sm text-pink-600 hover:text-pink-500'
        >
          Need an account? Register
        </Link>
      </div>
    </form>
  </>
  )
}
