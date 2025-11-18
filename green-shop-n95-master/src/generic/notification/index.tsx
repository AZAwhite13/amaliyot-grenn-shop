import { notification } from "antd";

type NotifyType = "confirm_password" | "add_to_cart";

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "confirm_password":
        return notification.error({ message: "Passwrods don't match !" });
      case "add_to_cart":
        return notification.success({ message: "Product added to cart!" });
    }
  };

  return notify;
};
