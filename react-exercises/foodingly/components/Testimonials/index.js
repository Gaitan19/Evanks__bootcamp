import { testimonials } from '@/constants/testimonialList';
import TestimonialCard from './TestimonialCard';
import MultiCarousel from '../MultiCarousel';
import { responsiveCarouselTestimonials } from '@/constants/responsiveCarousel';
import TextButton from '../Home/TextButton';

const Testimonials = () => {
  const renderTestimonials = () =>
    testimonials.map((testimonial) => (
      <TestimonialCard person={testimonial} key={testimonial.id} />
    ));

  return (
    <TextButton
      customClass="Testimonials"
      title="Testimonials"
      text="What Our Client's Say About Us"
    >
      <MultiCarousel
        customClass="Testimonials-carousel"
        responsive={responsiveCarouselTestimonials}
      >
        {renderTestimonials()}
      </MultiCarousel>
    </TextButton>
  );
};

export default Testimonials;
