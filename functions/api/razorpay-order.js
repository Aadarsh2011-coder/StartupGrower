export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { plan, currency, formData } = await context.request.json();
    
    // Validate input
    if (!plan || !currency || !formData) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // Get Razorpay keys from environment
    const RAZORPAY_KEY_ID = context.env.RAZORPAY_LIVE_KEY;
    const RAZORPAY_KEY_SECRET = context.env.RAZORPAY_NUMBER_KEY;
    
    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Payment gateway not configured' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    const PRICING_PLANS = {
      starter: { inr: 99, usd: 1.20 },
      growth: { inr: 199, usd: 2.40 },
      pro: { inr: 399, usd: 4.80 },
      elite: { inr: 599, usd: 7.00 },
      ultimate: { inr: 799, usd: 9.50 }
    };

    const planConfig = PRICING_PLANS[plan];
    if (!planConfig) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid plan selected' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    const amount = currency === 'inr' ? planConfig.inr * 100 : Math.round(planConfig.usd * 100);
    
    // Create order via Razorpay API
    const orderResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(RAZORPAY_KEY_ID + ':' + RAZORPAY_KEY_SECRET)
      },
      body: JSON.stringify({
        amount: amount,
        currency: currency === 'inr' ? 'INR' : 'USD',
        receipt: 'rcpt_' + Math.random().toString(36).substring(2, 10),
        notes: { product_name: formData.name, plan: plan, website: formData.url },
        payment_capture: 1
      })
    });

    if (!orderResponse.ok) {
      throw new Error(`Razorpay API error: ${orderResponse.status}`);
    }

    const orderData = await orderResponse.json();

    return new Response(JSON.stringify({
      success: true,
      orderId: orderData.id,
      amount: orderData.amount,
      currency: orderData.currency,
      key: RAZORPAY_KEY_ID
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}