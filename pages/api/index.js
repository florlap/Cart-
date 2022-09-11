import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';


// PASARELA DE PAGOS CON STRIPE 

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const HomePage = () => {
	const router = useRouter();
	const { success, canceled } = router.query;

	useEffect(() => {
		if (success !== undefined || canceled !== undefined) {
			if (success) {
				console.log(
					'Pago realizado! Recibirás un correo de confirmación.'
				);
			}

			if (canceled) {
				console.log(
					'Pago cancelado -- volver al inicio.'
				);
			}
		}
	}, [success, canceled]);

	return (
		<form action='/api/checkout_sessions' method='POST'>
			<section>
				<div>
					<Image
						className='image'
						src='{{IMAGE_URL}}'
						alt='Pagos'
						width={150}
						height={150}
					/>
					<div className='description'>
						<h3 className='heading'>Pagos</h3>
						<h5 className='price'>$200</h5>
					</div>
				</div>
				<button type='submit' role='link'>
					Verificar
				</button>
			</section>
			<style jsx>
				{`
					.description {
						float: right;
						margin-left: 10px;
					}
					.image {
						float: left;
					}
					.heading {
						font-size: 28px;
						font-weight: 200;
					}
					.price {
						font-size: 18px;
						font-weight: bold;
					}
					section {
						background: #ffffff;
						display: flex;
						flex-direction: column;
						width: 450px;
						height: 112px;
						border-radius: 6px;
						justify-content: space-between;
					}
					button {
						height: 45px;
						padding: 10px;
						background: #556cd6;
						border-radius: 4px;
						color: white;
						border: 0;
						font-size: 18px;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.2s ease;
						box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
					}
					button:hover {
						opacity: 0.8;
					}
				`}
			</style>
		</form>
	);
};

export default HomePage;

