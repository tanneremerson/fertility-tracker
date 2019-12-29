function formatData(d) {
  const formattedData = d.map((cycle, index) => {
    const builder = {};
    builder.cycleDay = index + 1;
    builder.temp = cycle.temp;
    builder.fluid = cycle.fluid;
    builder.max = 97.7;
    switch (cycle.fluid) {
      case "EGG_WHITE":
        builder.fluid = "Egg White";
        break;
      case "CREAMY":
        builder.fluid = "Creamy";
        break;
      case "STICKY":
        builder.fluid = "Sticky";
        break;
      case "NONE":
        builder.fluid = "None";
        break;
      case "BLOOD":
        builder.fluid = "Blood";
        break;

      default:
        break;
    }
    return builder;
  });
  return formattedData;
}

export default formatData;
