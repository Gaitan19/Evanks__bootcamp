import { services } from '@/constants/servicesList';
import ServicesCard from './ServicesCard';

const ServicesOffer = () => {
  const renderServices = () =>
    services.map((service) => (
      <ServicesCard key={service.id} service={service} />
    ));

  return (
    <div className="Services">
      <div className="Services-content">{renderServices()}</div>
    </div>
  );
};

export default ServicesOffer;
