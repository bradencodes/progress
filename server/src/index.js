const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query: {
        info: () => 'This is the Progress API',
        activities: (root, args, context, info) => context.prisma.activities(),
    },
    Mutation: {
        createActivity: (root, args, context) => {
            return context.prisma.createActivity({
                name: args.name,
                color: args.color,
                progress: {set: args.progress},
                target: {set: args.target},
                start: {set: []},
                end: {set: []},
                repeat: {set: args.repeat},
                adds: args.adds,
                nextReset: args.nextReset
            })
        },
        deleteActivity: (root, args, context) => {
            return context.prisma.deleteActivity({id: args.id});
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
})
server.start(() => console.log(`Server up on http://localhost:4000`))