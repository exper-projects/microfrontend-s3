import { Drawer, DrawerContent, DrawerHeader } from "@usy-ui/base";
import { useHistory, useParams } from "react-router-dom";

export const Order = () => {
  const history = useHistory();
  const { code } = useParams<{ code: string }>();
  return (
    <Drawer
      header={
        <DrawerHeader
          title="Placed Trade"
          onClose={() => {
            history.goBack();
          }}
        />
      }
    >
      <DrawerContent>
        <div>Order page - {code}</div>
      </DrawerContent>
    </Drawer>
  );
};
