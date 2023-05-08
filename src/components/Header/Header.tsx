import "./Header.scss";
export const Header: React.FC<any> = (props: any) => {
  return (
    <h1
      className="text-center header"
      style={{ backgroundImage: `url${"./outline.png"}` }}
    >
      Liam Coll
    </h1>
  );
};
