function init(hero) {
    hero.setName("Hermes");
    hero.setTier(10);
     
    hero.setChestplate("Mark");
    
    hero.addPowers("mnm:hermes", "mnm:god");

    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

    hero.addKeyBind("SUPER_SPEED", "Super Speed", 1);
    hero.addKeyBind("HEAL", "Heal", 2);
    hero.addKeyBind("SPELL_BOOK", "Duplication Spell", 3);
    hero.addKeyBind("TELEPORT", "Teleport", 4);

    hero.setHasProperty(hasProperty);
    
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}

/*
Super Speed (Teleport to moon at max speed)
Flight
Self-heal with caduceus staff
Heal others with caduceus staff
Duplication spell
Teleport
*/