import {revalidatePath} from "next/cache"

export async function GET(req, res) {
    revalidatePath("/")
    return new Response('Success!', {
        status: 200,
      });
}


export async function POST(req, res) {
    revalidatePath("/")
    return new Response('Success!', {
        status: 200,
      });
}