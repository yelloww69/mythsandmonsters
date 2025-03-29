function init(hero) {
    hero.setName("Zeus");
    hero.setTier(10);
     
    hero.setChestplate("Mark");
    
    hero.addPowers("mnm:zeus", "mnm:god");

    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

    hero.addKeyBind("SUMMON_STORM", "Summon Lightning Storm", 1);
    hero.addKeyBind("SHAPESHIFT", "Shapeshift", 2);
    hero.addKeyBind("TELEPORT", "Teleport", 3);

    hero.setHasProperty(hasProperty);
    
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
