
import { Inter } from '@next/font/google'
import { Prisma, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import NavBar from './navbar'
import Vendors from './vendors'
import LeftBar from './left-bar'
import PopularList from './popularlist'

const inter = Inter({ subsets: ['latin'] })




async function getServiceIdentifiers(){
  const prisma = new PrismaClient();

  const service_identifiers = await prisma.service_identifiers.findMany();
  //console.log(service_identifiers);
  return JSON.parse(JSON.stringify(service_identifiers));
}

async function getVendors() {
  const prisma = new PrismaClient();

  const vendors = await prisma.vendors.findMany();
  console.log(vendors);
  return JSON.parse(JSON.stringify(vendors));
}

export const getStaticProps: GetStaticProps<{
  service_identifier: Prisma.PromiseReturnType<typeof getServiceIdentifiers>;
  vendors: Prisma.PromiseReturnType<typeof getVendors>;
}> = async () => {
  const service_identifier = await getServiceIdentifiers();
  const vendors = await getVendors();

  return {
      props: {
          service_identifier,
          vendors
      }
  }
}
const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    return (
      <>
      <NavBar />
        <div className='main'>
          
          <LeftBar />
          <Vendors vendors={props.vendors} />
          <PopularList />
        </div>
        </>          
    )
}

export default Home;
