const mongoose = require('mongoose');
const Question = require('./models/questions'); // Asegúrate de que la ruta sea correcta según tu estructura

mongoose.connect('mongodb://localhost/testDB', {
});

const db = mongoose.connection;
db.once('open', async () => {
  try {
    await Question.deleteMany({}); // Limpiar la colección existente antes de agregar nuevas preguntas

    const questions = [
      {
        question: "¿En qué año se lanzó el primer videojuego de la serie 'The Legend of Zelda'?",
        options: ["1986", "1990", "1992", "1984"],
        correctAnswer: "1986"
      },
      {
        question: "¿Cuál es el nombre del personaje principal de la serie de videojuegos 'Uncharted'?",
        options: ["Nathan Drake", "Marcus Fenix", "Master Chief", "Solid Snake"],
        correctAnswer: "Nathan Drake"
      },
      {
        question: "¿Quién es el desarrollador del juego 'Fortnite'?",
        options: ["Epic Games", "Blizzard Entertainment", "Valve Corporation", "Rockstar Games"],
        correctAnswer: "Epic Games"
      },
      {
        question: "¿Cuál de estos no es un personaje jugable en el juego 'Super Smash Bros. Ultimate'?",
        options: ["Mario", "Sonic the Hedgehog", "Kratos", "Pikachu"],
        correctAnswer: "Kratos"
      },
      {
        question: "¿Cuál es el juego más vendido de todos los tiempos?",
        options: ["Minecraft", "Grand Theft Auto V", "Tetris", "Wii Sports"],
        correctAnswer: "Minecraft"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Grand Theft Auto'?",
        options: ["1997", "2001", "1993", "1995"],
        correctAnswer: "1997"
      },
      {
        question: "¿Qué compañía desarrolló el juego 'The Witcher 3: Wild Hunt'?",
        options: ["CD Projekt Red", "BioWare", "Naughty Dog", "Ubisoft"],
        correctAnswer: "CD Projekt Red"
      },
      {
        question: "¿Cuál es el nombre del protagonista en el juego 'Cyberpunk 2077'?",
        options: ["V", "Adam Jensen", "Marcus Holloway", "Alexios"],
        correctAnswer: "V"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Assassin's Creed'?",
        options: ["2007", "2005", "2009", "2003"],
        correctAnswer: "2007"
      },
      {
        question: "¿Cuál es el juego que popularizó el género de battle royale?",
        options: ["PlayerUnknown's Battlegrounds (PUBG)", "Apex Legends", "Call of Duty: Warzone", "Fortnite"],
        correctAnswer: "PlayerUnknown's Battlegrounds (PUBG)"
      },
      {
        question: "¿Quién es el creador del juego 'Minecraft'?",
        options: ["Markus Persson (Notch)", "Gabe Newell", "Tim Sweeney", "Shigeru Miyamoto"],
        correctAnswer: "Markus Persson (Notch)"
      },
      {
        question: "¿Cuál es el nombre del mundo en el que se desarrolla la mayoría de los juegos de la serie 'Final Fantasy'?",
        options: ["Gaia", "Spira", "Hyrule", "Midgar"],
        correctAnswer: "Hyrule"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Metal Gear Solid'?",
        options: ["1987", "1990", "1998", "1984"],
        correctAnswer: "1987"
      },
      {
        question: "¿Qué juego popularizó el género de los juegos de simulación de vida?",
        options: ["The Sims", "Stardew Valley", "Animal Crossing", "Harvest Moon"],
        correctAnswer: "The Sims"
      },
      {
        question: "¿Cuál de estos no es un personaje jugable en la serie de juegos 'Mario Kart'?",
        options: ["Luigi", "Bowser", "Princess Zelda", "Donkey Kong"],
        correctAnswer: "Princess Zelda"
      },
      {
        question: "¿En qué año se lanzó el juego 'Halo: Combat Evolved'?",
        options: ["2001", "2004", "1999", "2007"],
        correctAnswer: "2001"
      },
      {
        question: "¿Qué estudio desarrolló el juego 'The Elder Scrolls V: Skyrim'?",
        options: ["Bethesda Game Studios", "Square Enix", "Capcom", "Bioware"],
        correctAnswer: "Bethesda Game Studios"
      },
      {
        question: "¿Cuál de estos juegos fue desarrollado por Naughty Dog?",
        options: ["Uncharted", "The Last of Us", "Gears of War", "Call of Duty"],
        correctAnswer: "The Last of Us"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'BioShock'?",
        options: ["2007", "2003", "2004", "2010"],
        correctAnswer: "2007"
      },
      {
        question: "¿Cuál de estos juegos es conocido por su mundo abierto y elementos de supervivencia?",
        options: ["DayZ", "League of Legends", "Counter-Strike: Global Offensive", "Overwatch"],
        correctAnswer: "DayZ"
      },
      {
        question: "¿Qué juego popularizó el género de los MOBA (Multiplayer Online Battle Arena)?",
        options: ["League of Legends", "Dota 2", "Heroes of the Storm", "Smite"],
        correctAnswer: "League of Legends"
      },
      {
        question: "¿Quién es el desarrollador del juego 'God of War' (2018)?",
        options: ["Santa Monica Studio", "Ubisoft Montreal", "Bungie", "Rocksteady Studios"],
        correctAnswer: "Santa Monica Studio"
      },
      {
        question: "¿Cuál es el nombre del personaje principal en la serie de juegos 'Half-Life'?",
        options: ["Gordon Freeman", "Alyx Vance", "Adrian Shephard", "Chell"],
        correctAnswer: "Gordon Freeman"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Dark Souls'?",
        options: ["2011", "2009", "2008", "2013"],
        correctAnswer: "2011"
      },
      {
        question: "¿Qué juego es conocido por su sistema de construcción y batallas PvP?",
        options: ["Minecraft", "Roblox", "Terraria", "Fortnite"],
        correctAnswer: "Minecraft"
      },
      {
        question: "¿Quién es el creador del juego 'Celeste'?",
        options: ["Maddy Thorson", "Toby Fox", "Derek Yu", "Jonathan Blow"],
        correctAnswer: "Maddy Thorson"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Kingdom Hearts'?",
        options: ["2001", "2004", "2002", "2006"],
        correctAnswer: "2002"
      },
      {
        question: "¿Qué juego popularizó el género de los survival horror?",
        options: ["Resident Evil", "Dead Space", "Silent Hill", "Fatal Frame"],
        correctAnswer: "Resident Evil"
      },
      {
        question: "¿Cuál es el nombre del protagonista en el juego 'The Last of Us'?",
        options: ["Joel", "Ellie", "Nathan Drake", "Kratos"],
        correctAnswer: "Joel"
      },
      {
        question: "¿En qué año se lanzó el primer juego de la serie 'Call of Duty'?",
        options: ["2003", "2005", "2001", "2007"],
        correctAnswer: "2003"
      },
    ];

    await Question.insertMany(questions);
    console.log('Preguntas insertadas correctamente');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});