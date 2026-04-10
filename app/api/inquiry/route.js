
export async function POST(request) {
  const body = await request.json()
  const name = (body.name || '').trim()
  const phone = (body.phone || '').trim()

  if (!name || !phone) {
    return Response.json({ error: 'Name and phone are required.' }, { status: 400 })
  }

  return Response.json({
    ok: true,
    message: 'Inquiry received.',
  })
}
