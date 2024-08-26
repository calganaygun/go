import * as React from "react";
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg";
const LargeArrowUp = (props: SvgProps) => (
  <Svg width={49} height={48} fill="none" {...props}>
    <G fill="#1f2937" fillRule="evenodd" clipRule="evenodd" filter="url(#a)">
      <Path d="M12.068 23.662a2.334 2.334 0 0 1-.19-3.27l10.91-12.415A2.278 2.278 0 0 1 24.5 7.2c.654 0 1.276.283 1.71.777l10.911 12.415c.84.956.755 2.42-.19 3.27a2.271 2.271 0 0 1-3.232-.193l-6.91-7.863v22.878c0 1.28-1.025 2.316-2.29 2.316-1.264 0-2.289-1.037-2.289-2.316V15.606L15.3 23.47a2.271 2.271 0 0 1-3.232.192Z" />
      <Path d="M10.731 25.149a4.334 4.334 0 0 1-.355-6.077l10.91-12.415A4.278 4.278 0 0 1 24.5 5.2c1.233 0 2.402.534 3.213 1.457l10.91 12.415a4.334 4.334 0 0 1-.354 6.077 4.271 4.271 0 0 1-6.072-.36l-3.408-3.877v17.572c0 2.362-1.899 4.316-4.29 4.316-2.39 0-4.288-1.954-4.288-4.316V20.912l-3.408 3.878a4.271 4.271 0 0 1-6.072.359Zm2.65-3.436a.334.334 0 0 0 .024.461.271.271 0 0 0 .393-.025l6.91-7.863a2 2 0 0 1 3.502 1.32v22.878c0 .196.151.316.29.316.138 0 .29-.12.29-.316V15.606a2 2 0 0 1 3.502-1.32l6.91 7.863a.272.272 0 0 0 .392.025.334.334 0 0 0 .025-.461L24.71 9.297a.278.278 0 0 0-.21-.097.279.279 0 0 0-.208.097l-10.91 12.416Z" />
    </G>
    <Defs></Defs>
  </Svg>
);

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82018 9.85899C4.42642 9.50496 4.39095 8.8951 4.74096 8.49682L9.28703 3.32384C9.46805 3.11786 9.72752 3 10 3C10.2725 3 10.5319 3.11786 10.713 3.32384L15.259 8.49682C15.609 8.8951 15.5736 9.50496 15.1798 9.85899C14.7861 10.213 14.1831 10.1771 13.8331 9.77886L10.9539 6.50265L10.9539 16.0351C10.9539 16.568 10.5268 17 10 17C9.47316 17 9.04607 16.568 9.04607 16.0351L9.04607 6.50265L6.16691 9.77886C5.8169 10.1771 5.21395 10.213 4.82018 9.85899Z" fill="#201F29"></path>
</svg>
export default LargeArrowUp;