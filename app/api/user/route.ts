import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    return (
        Response.json({
            name: "Madhav",
            email: "madhavsingh203@gmail.com"
        })
    )
}

export async function POST(req: NextRequest){
    const body = await req.json()
   
let response = NextResponse.json({
    username: body.username,
    password: body.password
})
// Set a cookie to hide the banner
response.cookies.set('show-banner', 'false')
// Response will have a `Set-Cookie:show-banner=false;path=/home` header
return response
}



