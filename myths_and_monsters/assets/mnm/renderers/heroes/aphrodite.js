extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "mnm:gods/aphrodite",
});

var utils = implement("fiskheroes:external/utils");

function init(renderer) {
    parent.init(renderer);

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("CHESTPLATE");
}

function initEffects(renderer) {
    
}

function initAnimations(renderer) {

}

function render(entity, renderLayer, isFirstPersonArm) {
    
}
