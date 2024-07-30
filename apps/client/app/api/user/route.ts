// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient().$extends(withAccelerate())
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    try {
        const body = await req.json()
        console.log("hello world1")
        console.log(body)
        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        })
    return NextResponse.json({
        user: newUser
    })
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            err: "error creating user"
        }, {status: 500})
    }
}

export async function GET(){
    try {
        return NextResponse.json({
            msg: "get req successful"
        })
    } catch (err) {
        return NextResponse.json({
            err: err
        })
    }
}