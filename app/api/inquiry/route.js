export async function POST(request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());

  return Response.json({
    ok: true,
    message: "Inquiry received.",
    payload
  });
}
