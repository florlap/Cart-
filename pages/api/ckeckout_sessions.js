const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);   // pasaRela de pagos STRIPE

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1LftcKLJ2o9OfZj6F62RKpFr',  // id de precio ..con  stripe 
						quantity: 1,
					},
				],
				payment_method_types: ['card'],
				mode: 'payment',
				success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			});
			res.redirect(303, session.url);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}