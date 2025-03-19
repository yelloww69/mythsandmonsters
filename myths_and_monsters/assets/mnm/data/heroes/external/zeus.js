function init(hero) {
    hero.setName("Zeus");
    hero.setTier(10);
     
    hero.setChestplate("Toga");
    
    hero.addPowers("mnm:zeus", "mnm:god");

    hero.addKeyBind("SUMMON_STORM", "Summon Lightning Storm", 1);
    hero.addKeyBind("SHAPESHIFT", "Shapeshift", 2);
    hero.addKeyBind("Teleport", "Teleport", 3);
    
}