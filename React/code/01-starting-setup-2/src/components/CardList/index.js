import Card from "../Card";

const CardList = ({ contents }) => {
  return (
    <ul id="concepts">
      {contents.map((content, index) => (
        <li className="concept">
          <Card key={index} {...content} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
