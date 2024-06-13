import { Modal, View } from "react-native";
enum MyPopupAlignment {
  TOP = "flex-start",
  CENTER = "center",
  BOTTOM = "flex-end",
}

interface MyPopupProps {
  visible: boolean;
  children: React.ReactNode;
  alignment?: MyPopupAlignment;
}

export const MyPopup = ({
  children,
  visible,
  alignment = MyPopupAlignment.CENTER,
}: MyPopupProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      className="flex flex-row justify-center flex-1"
      visible={visible}
    >
      <View
        className={`${alignment}`}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View className=" m-auto">{children}</View>
      </View>
    </Modal>
  );
};
