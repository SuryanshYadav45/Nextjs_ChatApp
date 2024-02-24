"use client"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React,{useState} from "react"
export default function SignUp() {
    const [formData, setformData] = useState({
        username:"",
        email:"",
        password:""
    })
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">SignUp</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name"  autoComplete="false"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Login</Button>
          </CardFooter>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            
          </div>
          

          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Have an account?{" "}
            <Link href="/login" className=" text-blue-600 hover:underline">Sign </Link>
          </p>
        </Card>
      </div>
    </div>
  )
}