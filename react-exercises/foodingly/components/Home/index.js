import Reservation from '../Reservation';
import Hero from './Hero';
import TextButton from './TextButton';
import Subscribe from './Subscribe';
import Testimonials from '../Testimonials';
import { blogs } from '@/constants/blogsList';
import BlogCard from './BlogCard';
import PopularItems from './PopularItems';
import Chefs from './Chefs';

const Home = () => {
  const renderBlogs = () =>
    blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />);

  return (
    <>
      <Hero
        title="The best options of the day in your town"
        text="Best dishes and ingredients"
        secondText=" Aliqua enim amet anim nisi minim amet veniam eu magna tempor
            laboris. Duis veniam officia culpa sunt deserunt nisi"
      />
      <Reservation />
      <TextButton
        customClass="Special"
        title="Special Offers"
        buttonText="Buy Now"
        text="Preferred Food, Drinks, Juice 30% Off Friday Only"
        hasFillButton
      />
      <PopularItems />
      <TextButton
        customClass="Dinner"
        title="Do You Have Any Dinner Plan Today? Reserve Your Tbale"
        buttonText="Buy Now"
        text="Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor
        demon consequat eu in id. Eu ex ea commodo."
        hasImage
        hasFillButton
      />
      <Chefs />
      <TextButton
        customClass="App"
        title="Never Feel Hungry! Download Our Mobile App & Enjoy Delicious Food"
        text="Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor
            demon consequat eu in id. Eu ex ea commodo."
        hasImage
      >
        <div className="App-buttons">
          <div className="App-store" />
          <div className="App-google" />
        </div>
      </TextButton>
      <Testimonials />
      <Subscribe />
      <TextButton
        customClass="Blog"
        title="Our Blog"
        text="Our latest blogs and blogs"
      >
        <div className="Blog-cards">{renderBlogs()}</div>
      </TextButton>
    </>
  );
};

export default Home;
