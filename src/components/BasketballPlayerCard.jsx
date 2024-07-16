/* eslint-disable react/prop-types */
import { Box, Image } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
const BasketballPlayerCard = (props) => {
  const property = {
    name: `${props.name}`,
    imageUrl: `${props.imageUrl}` ,
    position: `${props.position}`,
    stats: {
      pointsPerGame: `${props.stat1}`,
      assistsPerGame: `${props.stat2}`,
      reboundsPerGame: `${props.stat3}`,
    },
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      className="w-fit"
      p="10"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        className="h-[200px] w-[250px] "
      />
      <Box p="6">
        <Box display="flex" alignItems="center" className="flex gap-2 border-2 rounded-lg uppercase font-semibold text-sm">
          <Badge
            borderRadius="full"
            px="6"
            className="bg-blue-300 rounded-lg text-zinc-50 py-1 "
          >
            {property.name}
          </Badge>
          <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={0}
        >
          {property.position}
        </Box>
        </Box>
       
        <Box className="text-sm text-left flex gap-1S flex-col p-2 font-roboto">

          <p>Points per Game: <span className="font-bold">{property.stats.pointsPerGame}</span> </p>
          <p>Assists per Game: <span className="font-bold">{property.stats.assistsPerGame}</span></p>
          <p>Rebounds per Game: <span className="font-bold">{property.stats.reboundsPerGame}</span> </p>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketballPlayerCard;
