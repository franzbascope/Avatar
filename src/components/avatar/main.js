import { bodyConfig } from "../../conf/bodyConfig";
import BodyItem from "./bodyItem";

export default () => {
  return (
    <div>
      {bodyConfig.map((bodyItem, index) => {
        return (
          <BodyItem bodyItem={bodyItem} items={bodyItem.items} key={index} />
        );
      })}
    </div>
  );
};
