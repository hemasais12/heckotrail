import { PixelRatio, Dimensions } from "react-native";

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export function adjustFont(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    } // iphone 5
    else if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    else if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    } else if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
}

export function adjustHeight(size) {
  console.log("pixelRatio=" + pixelRatio);
  console.log("deviceHeight=" + deviceHeight);
  console.log("deviceWidth=" + deviceWidth);
  console.log("size=" + size);
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      console.log("size=" + size * 0.95);
      return size * 0.95;
    } // iphone 5
    else if (deviceHeight < 667) {
      console.log("size=" + size);
      return size;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      console.log("size=" + size * 1.15);
      return size * 1.15;
    }
    // older phablets
    console.log("size=" + size * 1.25);
    return size * 1.25;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    else if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    } else if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
}

export function adjustWidth(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    } // iphone 5
    else if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    else if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    } else if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
}

export function adjustPadding(size) {
  console.log("pixelRatio=" + pixelRatio);
  console.log("deviceHeight=" + deviceHeight);
  console.log("deviceWidth=" + deviceWidth);
  console.log("size=" + size);
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      console.log("size=" + size * 0.95);
      return size * 0.95;
    } // iphone 5
    else if (deviceHeight < 667) {
      console.log("size=" + size);
      return size;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      console.log("size=" + size * 1.15);
      return size * 1.5;
    }
    // older phablets
    console.log("size=" + size * 1.25);
    return size * 2;
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    else if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    } else if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
}