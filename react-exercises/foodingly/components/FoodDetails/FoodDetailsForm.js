import Button from '../Button';

const FoodDetailsForm = () => {
  return (
    <div className="Food-details-item Food-details-comments">
      <h3 className="Food-details-item-title">Write your review</h3>
      <form
        className="Details-form Food-details-form"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="Details-form-container">
          <input
            className="Details-input Details-input-group Food-details-inputs"
            type="text"
            placeholder="Enter your full name"
            required
          />

          <input
            className="Details-input Details-input-group Food-details-inputs"
            type="email"
            placeholder="Enter email addres"
            required
          />
        </div>

        <textarea
          className="Details-input Details-input-comment Food-details-inputs"
          type="text"
          placeholder="Write your comments"
          required
        />

        <Button buttonType="submit" customClass="Button-fill">
          <span className="Button-fill-text">Post comment</span>
        </Button>
      </form>
    </div>
  );
};

export default FoodDetailsForm;
