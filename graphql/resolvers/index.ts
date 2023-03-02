import packageResolvers from "./package";
import helloResolver from "./hello";

const rootResolver = {
    ...packageResolvers,
    helloResolver
}

export default rootResolver;