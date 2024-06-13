export class Colors {
  static background16 = "#24242D";
  static background13 = "#1E1E26";
  static primary78 = "#8E92FE";
  static primary84 = "#AFB2FF";
  static background34 = "#4D4D61";
  static background23 = "#313243";
  static background19 = "#282937";
  static primary57 = "#5155D1";
  static primary57_20 = "#5155D133";
  static primary57_20solid = "#282948";
  static white = "#FFFFFF";
  static white60 = "#FFFFFF99";
  static white80 = "#FFFFFFCC";
  static white40 = "#FFFFFF66";
  static white20 = "#FFFFFF33";
  static white10 = "#FFFFFF1A";
  static white5 = "#FFFFFF0D";

  static black = "#000000";
  static black60 = "#00000099";
  static black80 = "#000000CC";
  static black40 = "#00000066";
  static black20 = "#00000033";
  static black10 = "#0000001A";
  static black5 = "#0000000D";

  static primary31 = "#34376b";

  static error = "#CD4266";

  static transparent = "transparent";

  static hexaCodeFor10pacity = "1A";
  static hexaCodeFor20Opacity = "33";
  static hexaCodeFor40Opacity = "66";
  static hexaCodeFor60Opacity = "99";
  static hexaCodeFor80Opacity = "CC";
  static hexaCodeFor100Opacity = "FF";

  //Color in #RRGGBB format to RGBA format with definable aplha
  static hexToRGBA = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  static RGBAToHexA = (rgba: string) => {
    const sep = rgba.indexOf(",") > -1 ? "," : " ";
    let rgba2 = rgba.substr(5).split(")")[0].split(sep);

    // Strip the slash if using space-separated syntax
    if (rgba2.indexOf("/") > -1) {
      rgba2.splice(3, 1);
    }

    // Convert to hex
    let r = (+rgba2[0]).toString(16),
      g = (+rgba2[1]).toString(16),
      b = (+rgba2[2]).toString(16),
      a = Math.round(+rgba2[3] * 255).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    if (a.length == 1) a = "0" + a;

    return "#" + r + g + b + a;
  };

  static mixTwoColors = (color1: string, color2: string, weight: number) => {
    const d2h = (d: number) => d.toString(16);
    const h2d = (h: string) => parseInt(h, 16);

    let resultColor = "#";
    for (let i = 1; i < 7; i += 2) {
      const v1 = h2d(color1.substr(i, 2));
      const v2 = h2d(color2.substr(i, 2));
      let val = d2h(Math.floor(v2 + (v1 - v2) * weight));
      while (val.length < 2) {
        val = "0" + val;
      }
      resultColor += val;
    }
    return resultColor;
  };
}
