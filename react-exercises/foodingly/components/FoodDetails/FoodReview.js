import { testimonials } from '@/constants/testimonialList';
import TestimonialCard from '../Testimonials/TestimonialCard';

const FoodReview = () => {
  const renderTestimonials = () =>
    testimonials.map(
      (testimonial, index) =>
        index < 3 && (
          <TestimonialCard person={testimonial} key={testimonial.id} />
        ),
    );

  return (
    <div className="Food-details Review">
      <div className="Food-details-content Review-content">
        <h3 className="Food-details-item-title">All review</h3>

        <div className="Review-container">{renderTestimonials()}</div>
      </div>
    </div>
  );
};

export default FoodReview;
