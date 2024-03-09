import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";

  interface Country{
    capital:string[],
    name?:{
        official:string,
        common:string,
    },
    img:string,
    title:string,
    flags:{
        png:string,
    },
    population:number,
    region:string,
  }
  
  function TeamCard({ img, name, title ,region,flags,capital,population}: Country) {
    
    return (
      <Card className="rounded-lg bg-[#FAFAFA]" shadow={false} placeholder="aa">
        <CardBody className="text-center" placeholder="aa">
          <Avatar
            src={flags?.png}
            alt={name?.common}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
            placeholder="aa"
          />
          <Typography variant="h5" color="blue-gray" className="!font-medium text-lg" placeholder="aa">
            {name?.common}
          </Typography>

          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600" placeholder="aa"
          >
            Population: {population}
          </Typography>

          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600" placeholder="aa"
          >
            Region: {region}
          </Typography>

          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600" placeholder="aa"
          >
            Capital: {capital && capital[0]}
          </Typography>
      
        </CardBody>
      </Card>
    );
  }
  

  export function TeamSection12({content}:{content:Country[]}) {
    return (
      <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default TeamSection12;