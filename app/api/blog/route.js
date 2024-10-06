import { ConnectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises'

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();


export async function GET(request) {
    
    return NextResponse.json({ msg:'API Working' });
}

export async function POST(request) {

    const formData = await request.forData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer);
    const imgURL = `/${timestamp}_${image.name}`
    console.log(imgURL);
    returnNextResponse.json({imgURL})
    
}