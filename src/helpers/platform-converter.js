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

    case "xbox-old":
      platform = 80;
      break;

    /*******Playstation************/
    case "playstation5":
      platform = 187;
      break;

    case "playstation4":
      platform = 18;
      break;

    case "playstation3":
      platform = 16;
      break;

    case "playstation2":
      platform = 15;
      break;

    case "playstation1":
      platform = 27;
      break;

    /*******Nintendo************/
    case "nintendo-switch":
      platform = 7;
      break;

    case "wii":
      platform = 11;
      break;

    case "gamecube":
      platform = 105;
      break;

    case "gameboy-boy":
      platform = 26;
      break;

    case "game-boy-advance":
      platform = 24;
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
