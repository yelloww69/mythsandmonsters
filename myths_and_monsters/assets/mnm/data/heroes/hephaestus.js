function init(hero) {
    hero.setName("Hephaestus");
    hero.setTier(10);
     
    hero.setChestplate("Mark");
    
    hero.addPowers("mnm:hephaestus", "mnm:god");

    hero.addAttribute("PUNCH_DAMAGE", 13.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 1.5, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);

    hero.setHasProperty(hasProperty);
    
}

function hasProperty(entity, property) {
    return property == "BREATHE_SPACE";
}
