import { router } from "expo-router";

export class UniqueSeparatorParamHandler {
  private separator = "###UNIQUE_SEPARATOR###";

  encodeString(value: string): string {
    return value?.replaceAll("(", this.separator);
  }

  decodeString(value: string): string {
    return value?.split(this.separator)?.join("(");
  }
}

export const handleOnDestinationPress = (value: string) => {
  const ParamHandler = new UniqueSeparatorParamHandler();
  // ignore ts check for now
  // @ts-ignore
  router.push({
    pathname: "/destination",
    params: {
      value: ParamHandler.encodeString(value),
    },
  });
};
