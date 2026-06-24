// =======================
// SEA STICKERS
// =======================
import seashell3 from "../assets/stickers/sea/3seashell.png";
import crab from "../assets/stickers/sea/crab.png";
import dolphin from "../assets/stickers/sea/dolphin.png";
import otter from "../assets/stickers/sea/otter.png";
import seahorse from "../assets/stickers/sea/seahorse.png";
import seashell from "../assets/stickers/sea/seashell.png";
import shark from "../assets/stickers/sea/shark.png";
import starfish from "../assets/stickers/sea/starfish.png";
import turtle from "../assets/stickers/sea/turtle.png";
import whale from "../assets/stickers/sea/whale.png";

// =======================
// GARDEN STICKERS
// =======================
import angry from "../assets/stickers/garden/angry.png";
import daisy from "../assets/stickers/garden/daisy.png";
import farmingNature from "../assets/stickers/garden/farming-and-nature.png";
import flowerPot from "../assets/stickers/garden/flower-pot.png";
import flower from "../assets/stickers/garden/flower.png";
import flowers1 from "../assets/stickers/garden/flowers (1).png";
import flowers2 from "../assets/stickers/garden/flowers (2).png";
import flowers3 from "../assets/stickers/garden/flowers (3).png";
import flowers4 from "../assets/stickers/garden/flowers (4).png";
import flowers from "../assets/stickers/garden/flowers.png";

// =======================
// SAFARI STICKERS
// =======================
import bee from "../assets/stickers/safari/bee.png";
import flamingo from "../assets/stickers/safari/flamingo.png";
import giraffe from "../assets/stickers/safari/giraffe.png";
import leopard from "../assets/stickers/safari/leopard.png";
import panda from "../assets/stickers/safari/panda.png";
import parrot from "../assets/stickers/safari/parrot.png";
import penguinSafari from "../assets/stickers/safari/penguin.png";
import rabbitSafari from "../assets/stickers/safari/rabbit.png";
import sleepingPanda from "../assets/stickers/safari/sleepingpanda.png";
import snake from "../assets/stickers/safari/snake.png";

// =======================
// STAR STICKERS
// =======================
import asteroid from "../assets/stickers/stars/asteroid.png";
import cloudy from "../assets/stickers/stars/cloudy.png";
import creativity from "../assets/stickers/stars/creativity.png";
import goldStar from "../assets/stickers/stars/gold-star.png";
import night from "../assets/stickers/stars/night.png";
import planet from "../assets/stickers/stars/planet.png";
import rabbitStar from "../assets/stickers/stars/rabbit.png";
import saturn from "../assets/stickers/stars/saturn.png";
import sleep from "../assets/stickers/stars/sleep.png";
import weather from "../assets/stickers/stars/weather.png";

// =======================
// SNOW STICKERS
// =======================
import igloo from "../assets/stickers/snow/igloo.png";
import penguinSnow from "../assets/stickers/snow/penguin.png";
import sledge from "../assets/stickers/snow/sledge.png";
import snow from "../assets/stickers/snow/snow.png";
import snowball from "../assets/stickers/snow/snowball.png";
import snowclouds from "../assets/stickers/snow/snowclouds.png";
import snowflake from "../assets/stickers/snow/snowflake.png";
import snowflakes from "../assets/stickers/snow/snowflakes.png";
import snowing from "../assets/stickers/snow/snowing.png";
import snowman from "../assets/stickers/snow/snowman.png";

// Tema
import exsa1 from "../assets/stickers/tema1/exsa1.png";
import exsa2 from "../assets/stickers/tema1/exsa2.png";
import popo1 from "../assets/stickers/tema1/popo1.png";
import popo2 from "../assets/stickers/tema1/popo2.png";

// =======================
// THEMES
// =======================

const BASE = import.meta.env.BASE_URL;
export const themes = [
  {
    id: "sea",
    name: "Sea",
    background: `${BASE}backgrounds/sea.jpg`,
    stickers: [seashell3, crab, dolphin, otter, seahorse, seashell, shark, starfish, turtle, whale, popo1, popo2, exsa1, exsa2],
  },

  {
    id: "garden",
    name: "Garden",
    background: `${BASE}backgrounds/garden.jpg`,
    stickers: [angry, daisy, farmingNature, flowerPot, flower, flowers1, flowers2, flowers3, flowers4, flowers, popo1, popo2, exsa1, exsa2],
  },

  {
    id: "safari",
    name: "Safari",
    background: `${BASE}backgrounds/safari.jpg`,
    stickers: [bee, flamingo, giraffe, leopard, panda, parrot, penguinSafari, rabbitSafari, sleepingPanda, snake, popo1, popo2, exsa1, exsa2],
  },

  {
    id: "stars",
    name: "Starry Sky",
    background: `${BASE}backgrounds/starry-sky.jpg`,
    stickers: [asteroid, cloudy, creativity, goldStar, night, planet, rabbitStar, saturn, sleep, weather, popo1, popo2, exsa1, exsa2],
  },

  {
    id: "snow",
    name: "Snow",
    background: `${BASE}backgrounds/snow.jpg`,
    stickers: [igloo, penguinSnow, sledge, snow, snowball, snowclouds, snowflake, snowflakes, snowing, snowman],
  },
  {
    id: "tema1",
    name: "Expo 1",
    background: `${BASE}backgrounds/tema1.png`,
    stickers: [exsa1, exsa2, popo1, popo2, snowball, creativity, goldStar, penguinSafari, dolphin, sleepingPanda],
  },
  {
    id: "tema2",
    name: "Expo 2",
    background: `${BASE}backgrounds/tema2.png`,
    stickers: [exsa1, exsa2, popo1, popo2, snowball, creativity, goldStar, penguinSafari, dolphin, sleepingPanda],
  },
  {
    id: "tema3",
    name: "Expo 3",
    background: `${BASE}backgrounds/tema3.png`,
    stickers: [exsa1, exsa2, popo1, popo2, snowball, creativity, goldStar, penguinSafari, dolphin, sleepingPanda],
  },
  {
    id: "tema4",
    name: "Expo 4",
    background: `${BASE}backgrounds/tema4.png`,
    stickers: [exsa1, exsa2, popo1, popo2, snowball, creativity, goldStar, penguinSafari, dolphin, sleepingPanda],
  },
];
