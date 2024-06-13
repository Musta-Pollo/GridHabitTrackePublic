// import React, { forwardRef, useCallback } from "react";

// import {
//   DefaultSectionT,
//   SectionList,
//   SectionListRenderItemInfo,
//   Text,
// } from "react-native";
// import { SectionGrid } from "react-native-super-grid";
// import { IconCard } from "./IconCard";

// export class IconElement {
//   isActive: boolean;
//   name: string;
//   sectionName: string;
//   onPress: () => void;

//   constructor(
//     isActive: boolean,
//     onPress: () => void,
//     name: string,
//     sectionName: string
//   ) {
//     this.isActive = isActive;
//     this.onPress = onPress;
//     this.name = name;
//     this.sectionName = sectionName;
//   }
// }

// export class IconHolder {
//   title: string;
//   data: IconElement[];

//   constructor(title: string, data: IconElement[]) {
//     this.title = title;
//     this.data = data;
//   }
// }

// interface IconGridProps {
//   iconHolder: IconHolder[];
//   ListHeaderComponent?: React.JSX.Element;
// }
// // Special structure for section

// export const IconGrid = forwardRef<
//   SectionList<IconElement, DefaultSectionT>,
//   IconGridProps
// >(({ iconHolder, ListHeaderComponent }: IconGridProps, ref) => {
//   console.log("IconGrid render");

//   const renderItem = useCallback(
//     ({
//       item,
//       rowIndex,
//       section,
//     }: SectionListRenderItemInfo<IconElement, DefaultSectionT> & {
//       rowIndex: number;
//     }) => (
//       <IconCard
//         onPress={item.onPress}
//         iconName={item.name}
//         isActive={item.isActive}
//       />
//     ),
//     []
//   );
//   return (
//     <SectionGrid
//       decelerationRate={0.2}
//       itemDimension={80}
//       className="px-1"
//       sections={iconHolder}
//       ref={ref}
//       initialNumToRender={10}
//       windowSize={30}
//       fixed={true}
//       maxToRenderPerBatch={30}
//       updateCellsBatchingPeriod={5}

//       removeClippedSubviews={true}
//       keyExtractor={(item, index) => item.name + item.sectionName}
//       ListHeaderComponent={ListHeaderComponent}
//       renderItem={renderItem}
//       renderSectionHeader={({ section }) => (
//         <Text className="text-white/60 font-nunito-500 text-base mx-2.5">
//           {section.title}
//         </Text>
//       )}
//     />
//   );
// });
