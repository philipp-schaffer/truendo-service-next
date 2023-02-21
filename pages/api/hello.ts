// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Pool from 'pg-pool';
import { GetStaticProps } from 'next';
import { Prisma, PrismaClient } from '@prisma/client';

async function getServiceIdentifiers(){
  const prisma = new PrismaClient();
  const service_identifiers = await prisma.service_identifiers.findMany();
  console.log(service_identifiers);
  return JSON.parse(JSON.stringify(service_identifiers));
}

export const getStaticProps:GetStaticProps<{
  service_identifier: Prisma.PromiseReturnType<typeof getServiceIdentifiers>
}> = async () => {
  const service_identifier = await getServiceIdentifiers()
  return {
      props: {
          service_identifier
      }
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>) {
    const prisma = new PrismaClient();
    const service_identifiers = await prisma.service_identifiers.findMany();
    if(req.method === "GET"){
      try {
        res.status(200);
        res.json(service_identifiers);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
      }
    }
}




