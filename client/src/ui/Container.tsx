interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">{children}</div>
  );
};

export default Container;
