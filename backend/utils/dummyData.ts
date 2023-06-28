import { IStreamer } from "../types/types";

const dummyStreamerData: IStreamer[] = [
  {
    name: "CyberWarrior",
    description:
      "I'm a fearless streamer who dives headfirst into the virtual realm. Join me on thrilling gaming adventures filled with heart-pounding action, epic battles, and jaw-dropping moments. Together, we'll conquer every virtual challenge that comes our way!",
    platform: "twitch",
    avatar: "user-1",
    background: "bg-1",
    votes: 14,
  },
  {
    name: "GamingGuru",
    description:
      "Welcome to the realm of gaming excellence! As a seasoned streamer, I'm here to share my gaming expertise, provide insightful commentary, and create an inclusive community where gamers of all skill levels can learn, improve, and have a blast together!",
    platform: "youtube",
    avatar: "user-2",
    background: "bg-2",
    votes: 23,
  },
  {
    name: "TikTokTornado",
    description:
      "Get ready to be blown away by a whirlwind of gaming excitement! Join my TikTok stream for lightning-fast highlights, hilarious gaming skits, and a unique blend of entertainment that will keep you on the edge of your seat. Let's ride the storm of gaming fun!",
    platform: "tiktok",
    avatar: "user-3",
    background: "bg-3",
    votes: 41,
  },
  {
    name: "KickMaster",
    description:
      "Kickstart your gaming journey with the KickMaster! As a passionate streamer, I bring high-energy gameplay, engaging challenges, and a positive vibe that will inspire you to reach new gaming heights. Get your game face on and let's kick boredom out the door!",
    platform: "kick",
    avatar: "user-4",
    background: "bg-4",
    votes: 5,
  },
  {
    name: "RumbleRocker",
    description:
      "Prepare for an earth-shaking experience with RumbleRocker! Join my electrifying streams as we explore a diverse range of games, dive into captivating narratives, and rock the gaming world together. Let's make some noise and create gaming memories that will resonate!",
    platform: "rumble",
    avatar: "user-5",
    background: "bg-5",
    votes: 65,
  },
  {
    name: "PixelPirate",
    description:
      "Ahoy, matey! Embark on a pixelated adventure with the PixelPirate. Join me on thrilling quests, discover hidden treasures in retro games, and experience the nostalgia of gaming's golden age. Together, we'll sail the seas of pixels and create legendary gaming tales!",
    platform: "twitch",
    avatar: "user-6",
    background: "bg-6",
    votes: -2,
  },
  {
    name: "VloggingVortex",
    description:
      "Step into the VloggingVortex, where gaming meets storytelling! Join me on a visual journey as I capture the essence of gaming through vlogs, behind-the-scenes footage, and heartfelt narratives. Let's dive deep into the gaming world and unravel its captivating secrets!",
    platform: "youtube",
    avatar: "user-7",
    background: "bg-7",
    votes: 45,
  },
  {
    name: "TikTokThriller",
    description:
      "Prepare for a thrilling ride through the gaming universe! On my TikTok stream, I'll keep you on the edge of your seat with mind-bending gameplay, unexpected plot twists, and nail-biting challenges. Get ready to experience gaming like never before!",
    platform: "tiktok",
    avatar: "user-8",
    background: "bg-8",
    votes: 89,
  },
  {
    name: "KickinItWithKara",
    description:
      "Join me, Kara, in the ultimate gaming chill zone! Kick back, relax, and let's enjoy some laid-back gaming sessions together. Whether it's exploring tranquil virtual worlds or engaging in cozy multiplayer fun, we'll create a space where gaming and relaxation intertwine!",
    platform: "kick",
    avatar: "user-9",
    background: "bg-9",
    votes: 48,
  },
  {
    name: "RumbleRacer",
    description:
      "Rev your engines and prepare for adrenaline-fueled races with RumbleRacer! Join me on high-speed tracks, master hairpin turns, and embrace the thrill of intense racing games. Together, we'll leave our opponents in the dust and chase victory at full throttle!",
    platform: "rumble",
    avatar: "user-10",
    background: "bg-10",
    votes: 27,
  },
  {
    name: "TechMaestro",
    description:
      "Welcome to the realm of technology and gaming mastery! Join me as I delve into the latest gadgets, explore cutting-edge gaming experiences, and provide insightful reviews and tutorials. Let's navigate the digital world together and unlock its full potential!",
    platform: "twitch",
    avatar: "user-11",
    background: "bg-11",
    votes: 39,
  },
  {
    name: "ArtisticAce",
    description:
      "Unleash your creative spirit with ArtisticAce! Join me for mesmerizing art streams where we'll explore various mediums, experiment with different techniques, and embrace the joy of self-expression. Together, we'll paint the canvas of imagination!",
    platform: "youtube",
    avatar: "user-12",
    background: "bg-12",
    votes: 73,
  },
  {
    name: "ComedyConqueror",
    description:
      "Prepare for non-stop laughter and entertainment with ComedyConqueror! Join me for hilarious gaming sessions, comedic skits, and interactive comedy shows that will tickle your funny bone. Get ready to LOL and be part of the laughter revolution!",
    platform: "twitch",
    avatar: "user-1",
    background: "bg-6",
    votes: 48,
  },
  {
    name: "FitnessFrenzy",
    description:
      "Join me, FitnessFrenzy, on a journey towards a healthier and fitter lifestyle! Through interactive workout sessions, fitness challenges, and valuable health tips, we'll embark on a transformative fitness adventure. Let's sweat, achieve our goals, and unlock our full potential!",
    platform: "kick",
    avatar: "user-2",
    background: "bg-7",
    votes: 52,
  },
  {
    name: "MusicMaestro",
    description:
      "Enter the enchanting world of MusicMaestro! Join me for mesmerizing music streams, electrifying performances, and immersive jam sessions. From classic melodies to contemporary beats, let's harmonize, groove, and create unforgettable musical experiences!",
    platform: "twitch",
    avatar: "user-3",
    background: "bg-8",
    votes: 8,
  },
  {
    name: "FoodieFanatic",
    description:
      "Indulge your taste buds with FoodieFanatic! Join me for mouth-watering cooking streams, culinary adventures, and delicious recipes that will satisfy your cravings. From exotic flavors to comfort food favorites, let's embark on a gastronomic journey!",
    platform: "youtube",
    avatar: "user-4",
    background: "bg-9",
    votes: 3,
  },
  {
    name: "MindfulnessMaven",
    description:
      "Embrace the power of mindfulness and self-care with MindfulnessMaven! Join me for calming streams, guided meditations, and insightful discussions on well-being. Let's cultivate inner peace, find balance in our lives, and thrive together!",
    platform: "tiktok",
    avatar: "user-5",
    background: "bg-10",
    votes: 18,
  },
  {
    name: "FashionistaFlair",
    description:
      "Step into the world of style and fashion with FashionistaFlair! Join me for fashion-forward content, styling tips, and glamorous outfit inspirations. Let's unleash our creativity, celebrate our unique fashion sense, and slay the fashion game!",
    platform: "kick",
    avatar: "user-6",
    background: "bg-11",
    votes: 3,
  },
  {
    name: "PetPals",
    description:
      "Calling all animal lovers! Join PetPals for heartwarming streams dedicated to our furry friends. From adorable pet interactions to informative pet care advice, let's create a loving community and celebrate the joy of having pets in our lives!",
    platform: "youtube",
    avatar: "user-7",
    background: "bg-12",
    votes: 7,
  },
  {
    name: "AdventureAddict",
    description:
      "Embark on thrilling adventures with AdventureAddict! Join me for epic gaming quests, adrenaline-pumping challenges, and immersive virtual worlds. Let's conquer the unknown, unleash our inner heroes, and create unforgettable gaming memories!",
    platform: "rumble",
    avatar: "user-8",
    background: "bg-4",
    votes: 72,
  },
];

export default dummyStreamerData;
