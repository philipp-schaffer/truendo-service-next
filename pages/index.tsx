
import { Inter } from '@next/font/google'
import { Prisma, PrismaClient } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

const inter = Inter({ subsets: ['latin'] })




async function getServiceIdentifiers(){
  const prisma = new PrismaClient();
  const service_identifiers = await prisma.service_identifiers.findMany();
  console.log(service_identifiers);
  return JSON.parse(JSON.stringify(service_identifiers));
}

export const getStaticProps: GetStaticProps<{
  service_identifier: Prisma.PromiseReturnType<typeof getServiceIdentifiers>
}> = async () => {
  const service_identifier = await getServiceIdentifiers()
  return {
      props: {
          service_identifier
      }
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  var erg = 12;
    return (
      <>
      <h2>{erg}</h2>
        <div>
           <ul>
            
           {
            props.service_identifier.map((element: { def_service_id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
              <li>
                {element.def_service_id}
              </li>
            ))
           }
            
           </ul>
        </div>
        </>
    )
}

export default Home;
