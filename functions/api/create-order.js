export async function onRequestPost(context) {
  const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = context.env;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    const body = await context.request.json();
    const { name, phone, email } = body;

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`),
      },
      body: JSON.stringify({
        amount: 4900, // ₹49 in paise
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        notes: { name, phone, email },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return new Response(
        JSON.stringify({ error: error.error?.description || 'Order creation failed' }),
        { status: 500, headers }
      );
    }

    const order = await response.json();

    return new Response(
      JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: RAZORPAY_KEY_ID,
      }),
      { headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers }
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
