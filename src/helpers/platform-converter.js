export const platformConverter = (platform) => {
  switch (platform) {
    case "pc":
      platform = 4;
      break;

    /*******Xbox************/
    case "xbox-one":
      platform = 1;
      break;

    case "xbox-360":
      platform = 14;
      break;

    case "xbox":
      platform = 80;
      break;

    /*******Playstation************/
    case "playstation-5":
      platform = 187;
      break;

    case "playstation-4":
      platform = 18;
      break;

    case "playstation-3":
      platform = 16;
      break;

    case "playstation-2":
      platform = 15;
      break;

    case "playstation-1":
      platform = 15;
      break;

    /*******Nintendo************/
    case "nintendo-switch":
      platform = 7;
      break;

    case "nintendo-wii":
      platform = 10;
      break;

    case "nintendo-gamecube":
      platform = 105;
      break;

    case "nintendo-gameboy-advance":
      platform = 26;
      break;

    case "nintendo-3ds":
      platform = 8;
      break;

    case "nintendo-64":
      platform = 83;
      break;

    default:
      break;
  }
  return platform;
};
