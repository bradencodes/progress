function activities(parent, args, context) {
    return context.prisma.user({ id: parent.id }).activities()
}

module.exports = {
    activities,
}