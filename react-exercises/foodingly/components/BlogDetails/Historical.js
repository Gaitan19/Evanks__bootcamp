import Image from 'next/image';
import { v4 } from 'uuid';
import { FaCircle } from 'react-icons/fa';
import { instructions } from '@/constants/blogsList';

const Historical = () => {
  const renderInstructions = () =>
    instructions.map((instruction) => (
      <li className="Details-instruction" key={v4()}>
        <FaCircle className="Details-circle" />
        {instruction}
      </li>
    ));

  return (
    <div className="Details-container">
      <Image
        width={896}
        height={461.45}
        alt="food"
        priority
        src="/blogs-details.png"
        className="Details-image"
      />
      <h2 className="Details-title">
        Historical culture of asian food and nutrition
      </h2>
      <p className="Details-text">
        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
        There are many variations of passages of Lorem Ipsum available but the
        majority.
      </p>

      <p className="Details-text">
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrang hidden in the middle of text. All the
        Lorem Ipsum generators on the Internet tend to repeat predefined chunks
        as necessary, making this the first true.
      </p>

      <h3 className="Details-title-secondary">Lorem Ipsum is simply dummy?</h3>
      <p className="Details-text">
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul>{renderInstructions()}</ul>
      <div className="Details-container-images">
        <Image
          width={436}
          height={272}
          className="Details-historical-image"
          alt="historical food 1"
          priority
          src="/blogs_details_left.png"
        />

        <Image
          width={436}
          height={272}
          className="Details-historical-image"
          alt="historical food 2"
          priority
          src="/blogs_details_right.png"
        />
      </div>
      <p className="Details-text">
        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
        There are many variations of passages of Lorem Ipsum available, but the
        majority have alteration in some injected or words which don't look even
        slightly believable.
      </p>
    </div>
  );
};

export default Historical;
