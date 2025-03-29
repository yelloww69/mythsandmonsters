function init(hero) {
    hero.setName("Poseidon");
    hero.setTier(10);
     
    hero.setChestplate("Mark");
    
    hero.addPowers("mnm:poseidon", "mnm:god");

    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

    hero.addKeyBind("EARTHQUAKE", "Create Earthquake", 1);
    hero.addKeyBind("SUMMON_STORM", "Summon Ocean Storm", 2); //In Water
    hero.addKeyBind("TIDAL_WAVE", "Summon Tidal Wave", 3);
    hero.addKeyBind("WATER_BEAM", "Water Blast", 4); //With Trident
    hero.addKeyBind("TELEPORT", "Teleport", 5);

    hero.setHasProperty(hasProperty);
    
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
