import Card from "../Card";

const CardList = ({ contents }) => {
  return (
    <ul id="concepts">
      {contents.map((content, index) => (
        <Card key={index} {...content} />
      ))}
    </ul>
  );
};

export default CardList;
