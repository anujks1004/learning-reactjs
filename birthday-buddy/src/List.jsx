import People from "./People";

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <People key={person.id} {...person}></People>;
      })}
    </section>
  );
};
export default List;
