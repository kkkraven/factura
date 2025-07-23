// API route for Stripe webhook
export async function POST(request: Request) {
  return new Response(JSON.stringify({ message: 'Not implemented' }), { status: 501 })
} 