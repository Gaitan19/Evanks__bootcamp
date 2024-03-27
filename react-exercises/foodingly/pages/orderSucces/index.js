import Image from 'next/image';
import Checkout from '@/components/Checkout';
import { costumersInformation, orderDetails } from '@/constants/cartView';

export default function orderSuccessPage() {
  const { firstName, lastName, email } = orderDetails;

  const renderCostumerInformation = () =>
    costumersInformation.map((costumerInformation) => (
      <div key={costumerInformation.id} className="Checkout-information">
        <span className="Checkout-information-text">
          {costumerInformation.text}:
        </span>
        <span className="Checkout-information-value">
          {costumerInformation.value}
        </span>
      </div>
    ));

  return (
    <Checkout
      titlePage="Order success"
      titleOrder="Order details"
      orderClass="Checkout-box-details"
      isOrder
    >
      <div className="Checkout-container-left">
        <div className="Checkout-box Checkout-box-success">
          <Image
            width={128}
            height={128}
            alt="success order"
            src="/right.png"
          />
          <div className="Checkout-container-success">
            <h3>{`${firstName} ${lastName},Thank you Payment Is Successfully Processsed!`}</h3>
            <span>{`Your Order details has been sent to: ${email}`}</span>
          </div>
        </div>

        <div className="Checkout-item">
          <h2 className="Checkout-title">Your information</h2>
          <div className="Checkout-box Checkout-box-inputs">
            {renderCostumerInformation()}
          </div>
        </div>
      </div>
    </Checkout>
  );
}
