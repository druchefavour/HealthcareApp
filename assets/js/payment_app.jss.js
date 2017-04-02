// Creating a Custom Payment Form with Stripe.js: // https://stripe.com/docs/custom-form#step-1-collecting-credit-card-information

// =====================================================================================

// 1. Securely collecting the payment details

//You need to POST to a PHP file in your $.ajax() function:
<?php

require_once('Stripe.php');

// -------------------------------------------------------------------

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://manage.stripe.com/account
Stripe::setApiKey("sk_test_APIKEYREDACTED");

// Get the credit card details submitted by the form
$token = json_decode($_POST['chargeData']);
$tokenid = $token['id'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
$charge = Stripe_Charge::create(array(
  "amount" => 2000, // amount in cents, again
  "currency" => "usd",
  "card" => $tokenid,
  "description" => "payinguser@example.com")
);
echo 'success';
} catch(Stripe_CardError $e) {
  // The card has been declined
    echo $tokenid;
}

?>
//---------------------

$.ajax({
    type: 'POST',
    url: './stripe-payment.php',
    headers: {
      stripeToken: response.id
    },
    data: {
      number: ccNum,
      cvc: ccCVC,
      exp_month: ccMonth,
      exp_year: ccYear
    },
    success: (response) => {
      console.log('successful payment: ', response);
    },
    error: (response) => {
      console.log('error payment: ', response);
    }
  })




