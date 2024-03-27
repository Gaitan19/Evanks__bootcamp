import Banner from '@/components/Banner';
import TextButton from '@/components/Home/TextButton';
import Layout from '@/components/Layout';
import TestimonialCard from '@/components/Testimonials/TestimonialCard';
import { testimonials } from '@/constants/testimonialList';

export default function testimonialsPage() {
  const renderTestimonials = () =>
    testimonials.map(
      (person, index) =>
        index < 3 && <TestimonialCard person={person} key={person.id} />,
    );

  return (
    <Layout headPageTitle="Testimonials-Foodingly">
      <Banner title="Testimonials" page="Testimonials" />
      <TextButton
        customClass="Reservation"
        text="What our client say about us"
        title="Testimonials"
      >
        <div className="Review-container">{renderTestimonials()}</div>
        <div className="Review-container">{renderTestimonials()}</div>
      </TextButton>
    </Layout>
  );
}
