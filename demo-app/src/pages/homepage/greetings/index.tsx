interface Props {
  name: string;
}

const Greetings = ({ name }: Props) => {
  return (
    <div className="py-10">
      <div>Hello I am {name}</div>
    </div>
  );
};

export default Greetings;
