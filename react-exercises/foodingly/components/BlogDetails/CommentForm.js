import Button from '../Button';

const CommentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="Details-form" onSubmit={handleSubmit}>
      <h3 className="Details-form-title">Leave a comment</h3>

      <div className="Details-form-container">
        <input
          className="Details-input Details-input-group"
          type="text"
          placeholder="First Name"
          required
        />

        <input
          className="Details-input Details-input-group"
          type="email"
          placeholder="Enter email addres"
          required
        />
      </div>

      <textarea
        className="Details-input Details-input-comment"
        type="text"
        placeholder="Write your comment"
        required
      />

      <Button buttonType="submit" customClass="Button-fill">
        <span className="Button-fill-text">Post comment</span>
      </Button>
    </form>
  );
};

export default CommentForm;
