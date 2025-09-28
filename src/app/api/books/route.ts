import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

//GET
export async function GET() {
    try{
        const books = await prisma.book.findMany();

        return NextResponse.json({
            success: true,
            data: books
        })
    }catch(error){
        console.error('Error fetching books.',error);
        return NextResponse.json(
            {success:false, error: 'Failed to fetch books.'},
            {status:500}
        )
    }
}

//POST
export async function POST(request:NextRequest){
    try{
        const body = await request.json();
        const {title,author,publishedYear}= body;

        if(!title||!author){
            return NextResponse.json(
                { success: false, error: 'Title and author are required' },
                { status: 400 }
            );
        }

        const newBook= await prisma.book.create({
            data:{
                title,
                author,
                publishedYear: publishedYear ? parseInt(publishedYear) : null
            }
        });

        return NextResponse.json({
            success: true,
            data: newBook
        }, { status: 201 });
    }catch(error){
        console.error('Error creating book:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create book' },
            { status: 500 }
        );
    }
}