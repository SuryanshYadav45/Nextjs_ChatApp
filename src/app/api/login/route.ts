import {connect} from "@/src/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request:NextRequest){
    return NextResponse.json("hello from the server")
}