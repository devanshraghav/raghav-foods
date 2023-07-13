import React from "react";
import MenuItem from "./MenuItem";

const MenuType = ({ menu }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="my-4">
          {menu.itemCards?.length > 0 && (
            <h1 className="font-bold">
              {/* Since in API many of them with title dont have itemCards outside they are inside categories
              therefore need to apply some checks. */}
              {menu.title} {menu.itemCards?.length}
            </h1>
          )}
        </div>
      </div>
      {
        menu.itemCards?.map((item)=><MenuItem key={item.card.info.id} data= {item.card.info} />)
      }
      
    </div>
  );
};

export default MenuType;
