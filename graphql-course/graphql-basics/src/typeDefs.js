import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './modules/**/*.graphql'));
const typeDefs = mergeTypes(typesArray);

export default typeDefs;
