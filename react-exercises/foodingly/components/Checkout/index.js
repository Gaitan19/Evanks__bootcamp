import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Banner from '../Banner';
import CheckoutOrder from './CheckoutOrder';
import { ordersInformation } from '@/constants/cartView';

const Checkout = (props) => {
  const { children, titlePage, isOrder, titleOrder, orderClass } = props;

  const renderOrdersInformation = () =>
    ordersInformation.map((orderInformation) => (
      <div key={orderInformation.id} className="Checkout-orders">
        <span>{orderInformation.text}</span>
        <span>{orderInformation.value}</span>
      </div>
    ));

  return (
    <Layout headPageTitle={`${titlePage}-foodingly`}>
      <Banner title={titlePage} page={titlePage} />
      <div className="Food">
        <div className="Food-content">
          <div className="Checkout-container">
            {children}
            <div className="Checkout-container-right">
              <CheckoutOrder
                isOrder={isOrder}
                title={titleOrder}
                customClass={`Checkout-box-orders ${orderClass}`}
              >
                {isOrder && (
                  <div className="Checkout-container-orders">
                    {renderOrdersInformation()}
                  </div>
                )}
              </CheckoutOrder>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Checkout.propTypes = {
  children: PropTypes.node,
  titlePage: PropTypes.string.isRequired,
  isOrder: PropTypes.bool,
  orderClass: PropTypes.string,
  titleOrder: PropTypes.string,
};

Checkout.defaultProps = {
  children: <></>,
  isOrder: false,
  orderClass: '',
  titleOrder: '',
};

export default Checkout;
