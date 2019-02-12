const unit = str => (isNaN(str) ? str.substr(str.length - 2) : 'px');

export default function fluidTypography({
  minFontSize,
  maxFontSize,
  minScreenSize = 420,
  maxScreenSize = 1200
}) {
  const u1 = unit(minFontSize);
  const u2 = unit(maxFontSize);
  const u3 = unit(minScreenSize);
  const u4 = unit(maxScreenSize);

  if (u1 === u2 && u1 === u3 && u1 === u4) {
    const units = u1;
    const styles = {
      fontSize: minFontSize
    };

    if (minScreenSize !== maxScreenSize) {
      styles[`@media only screen and (min-width: ${minScreenSize}${units})`] = {
        fontSize: `calc(${parseInt(minFontSize)}${units} + ${parseInt(
          maxFontSize
        ) -
          parseInt(
            minFontSize
          )} * ((100vw - ${minScreenSize}${units}) / ${parseInt(maxScreenSize) -
          parseInt(minScreenSize)}))`
      };
    }

    styles[`@media only screen and (min-width: ${maxScreenSize}${units})`] = {
      fontSize: maxFontSize
    };

    return styles;
  }

  throw new Error(
    'Detected mixed units. Please use the same units for all parameters.'
  );
}
