function activities(parent, args, context, info) {
    return context.prisma.activities()
}

module.exports = {
    activities,
}