const Card = ({ title, image, description }) => {
  return (
    <>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Card;
