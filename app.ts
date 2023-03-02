import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import rootResolver from './graphql/resolvers/hello';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true, // enable the GraphiQL UI
}));

app.listen(4000, () => {
    console.log('GraphQL server running at http://localhost:4000/graphql');
});