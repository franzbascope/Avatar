import { bodyConfig } from "../../conf/bodyConfig";
import BodyItem from "./bodyItem";

export default () => {
  return bodyConfig.map((mappedItem, index) => {
    return <BodyItem item={mappedItem} key={index} />;
    // const ConstructItems = (bodyItem, key) => {
    //   if (bodyItem.items) {
    //     return (
    //       <BodyItem key={key}>{bodyItem.items.map(ConstructItems)}</BodyItem>
    //     );
    //   } else {
    //     return <BodyItem key={key} bodyItem={bodyItem} />;
    //   }
    // };
    // return <BodyItem bodyItem={bodyItem} />;
  });
};
