function createdBy(parent, args, context) {
    return context.prisma.activity({ id: parent.id }).createdBy()
}

module.exports = {
    createdBy,
}