import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

//DELETE
export async function DELETE(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    try {
        const {id} = await params;
        await prisma.book.delete({
            where: {id}
        });

        return NextResponse.json({
            success: true,
            message: 'Book deleted successfully'
        })
    } catch(error) {
        console.error('Error deleting book:', error);
        return NextResponse.json(
            {success: false, error: 'Failed to delete book'},
            {status: 500}
        );
    }
}

//PUT
export async function PUT(request: NextRequest, {params}: {params: Promise<{id: string}>}) {
    try {
        const {id} = await params;
        const body = await request.json();
        const {title, author, publishedYear} = body;
        
        const updateData: any = {};
        if (title !== undefined) updateData.title = title;
        if (author !== undefined) updateData.author = author;
        if (publishedYear !== undefined) updateData.publishedYear = parseInt(publishedYear);
        
        const updatedBook = await prisma.book.update({
            where: {id},
            data: updateData
        });
        
        return NextResponse.json({
            success: true,
            data: updatedBook,
            message: 'Book updated successfully'
        });
        
    } catch(error) {
        console.error('Error updating book:', error);
        return NextResponse.json(
            {success: false, error: 'Failed to update book'},
            {status: 500}
        );
    }
}

//GET
export async function GET(request:NextRequest, {params}:{params: Promise<{id:string}>}){
    try{
        const {id}=await params;
        const book=await prisma.book.findUnique({
            where:{id}
        });

        if(!book){
            return NextResponse.json({ success: false, error: 'Book not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: book });
    }catch(error){
        console.error('Error fetching book:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch book' }, { status: 500 });
    }
} 