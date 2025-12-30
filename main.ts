let smallerRadius = 0
let width = 0
let smallerWidth = 0
let height = 0
let smallerHeight = 0
player.onChat("radiusGreenPale", function (radius) {
    radius = Math.abs(radius)
    if (radius < 37) {
        radius = 37
    }
    smallerRadius = radius / 37
    smallerRadius = smallerRadius * 15
    width = radius / 37
    width = width * 7
    smallerWidth = radius / 37
    smallerWidth = smallerWidth * 16
    height = radius / 37
    height = height * 5
    smallerHeight = radius / 37
    smallerHeight = smallerHeight * 6
    player.say("radius")
    player.say(radius)
    player.say("smallerRadius")
    player.say(smallerRadius)
    player.say("width")
    player.say(width)
    player.say("smallerWidth")
    player.say(smallerWidth)
    player.say("height")
    player.say(height)
    player.say("smallerHeight")
    player.say(smallerHeight)
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, height + 1 + smallerHeight, 0)
    ), agent.getOrientation())
    player.say(agent.getPosition().toString())
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, -1 * (height + 1), 0)
    ), agent.getOrientation())
    player.say(agent.getPosition().toString())
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, -1 * smallerHeight, 0)
    ), agent.getOrientation())
    player.say(agent.getPosition().toString())
})
player.onChat("location", function () {
    agent.teleportToPlayer()
})
