var pokegoScan = require('pokego-scan');
var _ = require('lodash')
var async = require('async')
var sleep = require('sleep')

// home()
// work()
// harbour()



renfrew()

function home () {
  pokegoScan({latitude: 43.647183937, longitude: -79.391378117}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
    if (err) throw err;
    console.log(pokemon)
  })
}

function work () {
  pokegoScan({latitude: 43.670456583, longitude: -79.379588052}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
    if (err) throw err;
    console.log(pokemon)
  })
}

function harbour () {
  pokegoScan({latitude: 43.670456583, longitude: -79.379588052}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
    if (err) throw err;
    console.log(pokemon)
  })
}

function renfrew () {
  async.series([
    function(callback) {
      pokegoScan({latitude: 45.479211476, longitude: -76.716928482}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.478970749, longitude: -76.697959899}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.470785404, longitude: -76.695814132}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.474456919, longitude: -76.687660217}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.477165260, longitude: -76.680235862}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.469310712, longitude: -76.688647270}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.472651286, longitude: -76.682510375}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.474908318, longitude: -76.674485206}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.462508571, longitude: -76.682081222}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.459588816, longitude: -76.672039031}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.467685496, longitude: -76.666889190}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.475600457, longitude: -76.663198471}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    },
    function(callback) {
      pokegoScan({latitude: 45.479542475, longitude: -76.650581359}, {filter: ['Mewtwo', 'Dragonite', 'Dragonair', 'Dratini', 'Snorlax', 'Lapras', 'Mew', 'Moltres', 'Arcanine', 'Growlithe', 'Eevee', 'Vaporeon', 'Flareon', 'Jolteon', 'Exeggutor', 'Exeggcute','Gyrados', 'Zapdos', 'Muk', 'Grimer', 'Articuno', 'Slowbro', 'Victreebel', 'Machamp', 'Machoke', 'Machop', 'Poliwrath', 'Poliwhirl', 'Poliwag', 'Nidoqueen', 'Nidoking', 'Bulbasaur', 'Venusaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Warturtle', 'Blastoise', 'Pikachu', 'Raichu', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Gloom', 'Vileplume', 'Dugtrio', 'Golduck', 'Abra', 'Kadabra', 'Alakazam', 'Weepinbell', 'Victreebel', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowbro', "Farfetch'd", 'Gengar', 'Marowak', 'Koffing', 'Weezing', 'Rydon', 'Chansey', 'Kangaskhan', 'Scyther', 'Electabuzz', 'Magmar', ' Ditto', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl'], distance: 100000}, function(err, pokemon) {
        if (err) throw err;
        var filtered = _.map(_.uniqBy(_.flatten(pokemon), 'latitude'), function(n) {
          return _.pick(n, ['name', 'map', 'despawns_in_str'])
        })
        if (filtered.length > 0) {
          console.log(filtered)
        }
        callback(null, pokemon)
      })
    }
  ], function(err, results) {
    var filtered = _.map(_.uniqBy(_.flatten(results), 'latitude'), function(n) {
      return _.pick(n, ['name', 'map', 'despawns_in_str'])
    })
    if (filtered.length > 0) {
      console.log(filtered)
    }
  })
}

