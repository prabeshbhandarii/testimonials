import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest){
    try {
        const body = await req.json()
        console.log("hello world1")
        const newUser = await prisma.user.create({
            data: {
                name: body.username,
                email: body.email,
                password: body.password
            }
        })
    return NextResponse.json({
        user: newUser.name
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