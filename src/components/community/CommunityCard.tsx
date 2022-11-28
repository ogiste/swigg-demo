import {
  Avatar,
  Badge,
  Box,
  Center,
  chakra,
  Circle,
  Flex,
  Icon,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {useState} from "react";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Jua Kali Classic DAO",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({rating, numReviews}: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{marginLeft: "1"}}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{marginLeft: "1"}}/>;
          }
          return <BsStar key={i} style={{marginLeft: "1"}}/>;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export function ProductSimple({w, h, ...props}: { w: number, h: number }) {
  const [toggleDetails, setToggleDetails] = useState<boolean>(false);
  const height = h ? h : 300;
  const width = w ? w : 217;
  const rounded = "1.056rem";

  const handleMouseEnter = () => {
    setToggleDetails(true);
  };
  const handleMouseLeave = () => {
    setToggleDetails(false);
  };
  return (
    <Center p={12}>
      <Box
        borderRadius={rounded}
        // mt={-12}
        pos={"relative"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        height={height}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 0,
          left: 0,
          backgroundImage: `url(${IMAGE})`,
          filter: "blur(10px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(40px)",
          },
        }}
      >
        <Image
          borderRadius={rounded}
          height={height}
          width={width}
          objectFit={"cover"}
          src={IMAGE}
        />
        <Box
          borderRadius={"3rem"}
          display={"flex"}
          alignItems={"center"}
          p={1}
          bg={toggleDetails ? "white" : "transparent"}
          minWidth={"11rem"}
          position={"absolute"}
          left={"1.375rem"}
          bottom={"1.062rem"}
        >
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba"/>
          <Box display={toggleDetails ? "flex" : "none"} flexDirection={'column'}>
            <Text p={'0.3em'} fontSize={"0.7rem"} color={"purple"}>
              BoiBlacc
            </Text>
            <Box display={"flex"}>
              <Text p={1} fontSize={"0.6rem"} color={"purple"}>
                The Blacc Circle
              </Text>
              <Text pt={'0.3rem'} fontSize={"0.5rem"} color={"purple"}>
                2021
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}

export default function CommunityCard() {
  return (
    <Flex p={4} maxW="xs" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="xs"
        borderWidth="1px"
        rounded="lg"
        shadow="md"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />
        <Box p="2">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="lg" fontWeight="semibold" as="h4" lineHeight="tight">
              {data.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2rem"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"}/>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews}/>
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                £
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
