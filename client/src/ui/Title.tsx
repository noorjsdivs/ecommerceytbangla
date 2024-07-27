interface Props {
  title: string;
}
const Title = ({ title }: Props) => {
  return <p className="text-xl font-semibold text-black">{title}</p>;
};

export default Title;
