export const platformNameConverter = (platform) => {
  switch (platform) {
    case "pc":
      platform = "PC";
      break;

    /*******Xbox************/
    case "xbox-one":
      platform = "Xbox One";
      break;

    case "xbox-360":
      platform = "Xbox-360";
      break;

    case "xbox-old":
      platform = "Xbox";
      break;

    /*******Playstation************/
    case "playstation5":
      platform = "Playstation 5";
      break;

    case "playstation4":
      platform = "Playstation 4";
      break;

    case "playstation3":
      platform = "Playstation 3";
      break;

    case "playstation2":
      platform = "Playstation 2";
      break;

    case "playstation1":
      platform = "Playstation 1";
      break;

    /*******Nintendo************/
    case "nintendo-switch":
      platform = "Nintendo-Switch";
      break;

    case "wii":
      platform = "Nintendo Wii";
      break;

    case "gamecube":
      platform = "Nintendo GameCube";
      break;

    case "gameboy-boy":
      platform = "GameBoy";
      break;

    case "game-boy-advance":
      platform = "GameBoy Advance";
      break;

    case "nintendo-3ds":
      platform = "Nintendo 3DS";
      break;

    case "nintendo-64":
      platform = "Nintendo 64";
      break;

    default:
      break;
  }
  return platform;
};
