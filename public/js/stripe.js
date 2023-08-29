/* eslint-disable */
import axios from 'axios';
import Stripe from 'stripe';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51NkMyAHfnFSPslHw6oP78DG9U14IlRfs5XvoORWORT7ZQzKJOYiBvZEeK0nYme9VJ4xq02yQVSDpedkheUAaKhLo00p09YWp4H',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create checkout form+ charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.url,
    // });

    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
