import {connect} from "@/src/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userModel.js"
import bcryptjs from "bcryptjs"


connect();


export async function POST(req:NextRequest) {
    try {
        const salt= await bcryptjs.genSalt(10)
        const reqbody= await req.json();
        const {username,email,password}=reqbody;

        const user= await User.findOne({email})
        if(user)
        {
            return NextResponse.json({message:"user already exists"})
        }

        const hashedpassword= await bcryptjs.hash(password,salt)
        const response= await User.create({
            name:username,
            email,
            password:hashedpassword
            
        })
        return NextResponse.json({
            message:"user created successfully",
        },{
            status:201
        })

    } catch (error) {
        console.log(error)
    }
    
}