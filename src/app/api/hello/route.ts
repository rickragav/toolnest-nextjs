//https://logsnag.com/blog/deploying-nextjs-13-app-dir-to-cloudflare-pages
//https://blog.logrocket.com/using-next-js-route-handlers/

export const runtime = 'edge'; // defaults to force-static
export async function GET(request: Request) {
    return Response.json({ 'rakesh':'welcomes' })
}