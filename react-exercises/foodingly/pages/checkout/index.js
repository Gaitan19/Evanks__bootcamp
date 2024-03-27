import Checkout from '@/components/Checkout';
import CheckoutForm from '@/components/Checkout/CheckoutForm';

export default function checkoutPage() {
  return (
    <Checkout titlePage="Checkout" titleOrder="Your Orders">
      <CheckoutForm />
    </Checkout>
  );
}
