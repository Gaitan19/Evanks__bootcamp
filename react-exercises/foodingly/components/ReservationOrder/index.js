import Link from 'next/link';
import Banner from '../Banner';
import Layout from '../Layout';
import routes from '@/constants/routes';
import Button from '../Button';
import Select from '../Select';

const ReservationOrder = () => {
  const selectOptions = ['Guest', '20+', '30+', '40+', '50+', '100+'];

  return (
    <Layout headPageTitle="Food reservation">
      <Banner title="Reservation" page="Reservation" />
      <div className="Food-details Order">
        <div className="Food-details-content Order-content">
          <h2 className="Order-title">Booking your order</h2>
          <p className="Order-text">
            Eu sint minim tempor anim aliqua officia voluptate incididunt
            deserunt. Velitgo quis Lorem culpa qui pariatur occaecat.
          </p>
          <form
            className="Order-container"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="Order-form Food-details-item ">
              <div className="Order-container-inputs">
                <input
                  className="Order-inputs"
                  placeholder="First  name*"
                  required
                />
                <input
                  className="Order-inputs"
                  placeholder="Last name*"
                  required
                />
                <input
                  className="Order-inputs"
                  placeholder="Email address (Optional)"
                  required
                />
                <input
                  className="Order-inputs"
                  placeholder="Mobile number*"
                  type="tel"
                  required
                />

                <Select options={selectOptions} />
                <input className="Order-inputs" type="date" required />
                <input className="Order-inputs" type="time" required />
                <input className="Order-inputs" placeholder="Aditional Notes" />
              </div>
            </div>
            <div className="Order-container-link">
              <input type="checkbox" className="Order-checkbox" />
              <span>I have read and accepted the</span>
              <Link className="Order-links" href={routes.termsService}>
                Therms and conditions
              </Link>
              <span>and</span>
              <Link className="Order-links" href={routes.privacyPolicy}>
                Privacy policy
              </Link>
            </div>

            <Button buttonType="submit" customClass="Button-fill">
              <span className="Button-fill-text">Book Now</span>
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationOrder;
