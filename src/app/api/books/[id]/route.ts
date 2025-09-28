import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

//DELETE
export async function DELETE(request:NextRequest, props:{params:{id:string}}){
    const params =props.params;

    try{
        const {id}=params;
        await prisma.book.delete({
            where:{id}
        });

        return NextResponse.json({
            success:true,
            message:'Book deleted successfully'
        })
    }catch(error){
        console.error('Error dleting todo:',error);
        return NextResponse.json(
            {success:false, error:'failed to delete book.'},
            {status:500}
        );
    }
}

//PUT
export async function PUT(request: NextRequest, props: {params: {id: string}}) {
    const params = props.params;
    
    try {
        const {id} = params;
        const body = await request.json();
        const {title, author, publishedYear} = body;
        
        // Sadece gönderilen alanları güncelle
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