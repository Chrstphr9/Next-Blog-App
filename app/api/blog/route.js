// import { ConnectDB } from "@/lib/config/db";
// const { NextResponse } = require("next/server");
// import {writeFile} from 'fs/promises'

// const LoadDB = async () => {
//     await ConnectDB();
// }

// LoadDB();


// export async function GET(request) {
    
//     return NextResponse.json({ msg:'API Working' });
// }

// export async function POST(request) {

//     const formData = await request.formData();
//     const timestamp = Date.now();

//     const image = formData.get('image');
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData)
//     const path = `./public/${timestamp}_${image.name}`
//     await writeFile(path, buffer);
//     const imgUrl = `/${timestamp}_${image.name}`
//     console.log(imgUrl);
//     return NextResponse.json({imgUrl})
    
// }

import { ConnectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from 'fs/promises';
const { Buffer } = require("buffer");

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request) {
    return NextResponse.json({ msg: 'API Working' });
}

export async function POST(request) {
    try {
        // Get form data
        const formData = await request.formData();  // Corrected typo here

        // Timestamp for unique file naming
        const timestamp = Date.now();

        // Extract the image file from form data
        const image = formData.get('image');

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // Convert image to buffer
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);  // Corrected typo here

        // Path to save the file
        const path = `./public/${timestamp}_${image.name}`;  // Consider using another folder instead of `./public/`

        // Save the file
        await writeFile(path, buffer);

        // Generate the image URL
        const imgUrl = `/${timestamp}_${image.name}`;
        console.log(imgUrl);

        return NextResponse.json({ imgUrl });
    } catch (error) {
        console.error('Error handling the POST request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
