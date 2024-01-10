import Button from "./Button";
import { useLoaderData } from "react-router-dom";

function ButtonData() {
  const button = useLoaderData();
  return (
    <>
      {button &&
        button.map((button) => {
          return <Button button={button} key={button.id} />;
        })}
    </>
  );
}

export default ButtonData;
