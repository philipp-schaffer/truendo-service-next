import { PrismaClient } from "@prisma/client";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();
  const vendors = await prisma.vendors.findMany();

  const paths = vendors.map((vendor) => ({
    params: { id: vendor.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prisma = new PrismaClient();
  const vendor = await prisma.vendors.findUnique({
    where: { id: String(params?.id) },
  });
  const services = await prisma.services.findMany({
    where: { def_vendor_id: String(params?.id) },
  });
  console.log("Services", services);
  return {
    props: { vendor: vendor, services: services },
  };
};

const VendorPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  vendor,
  services,
}) => {
  return (
    <div>
      <h1>{vendor.company_name}</h1>
      <p>{vendor.company_address}</p>
      <p>{vendor.website}</p>
      <a target="_blank" href={vendor.policy_link}>
        {vendor.policy_link}
      </a>
      <h2>Services</h2>
      <ul>
        {services.map((service: any) => (
          <li>
            <a href="">{service.id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorPage;
