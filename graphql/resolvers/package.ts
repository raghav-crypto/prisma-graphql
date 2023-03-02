// import prisma from "../../prisma/prisma";
import { Package } from '@prisma/client'
import prisma from '../../prisma/prisma';

interface CreatePackageArgs {
    data: Omit<Package, 'id'>;
}

const createPackage = async ({ data }: CreatePackageArgs) => {
    try {
        return prisma.package.create({ data });
    } catch (error) {
        console.log(error)
    }
}
const packages = async (): Promise<Package[]> => {
    const packages = await prisma.package.findMany();
    return packages;
}
const _ = {
    createPackage,
    packages
}

export default _;