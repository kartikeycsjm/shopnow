import { NextResponse } from "next/server"
import Product from "@/app/lib/database"
import { connectDB } from "@/app/lib/connectdb"
export const GET=async()=>{
    try {
        await connectDB()
        const things=await Product.find()
        return NextResponse.json({'data':things,'message':'success'})
    } catch (error) {
        return NextResponse.json({'data':'','message':'failed'})
    }
}