import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import FileUploader from "../../components/formInputs/FileUploader/FileUploader";
import {Field, Form, FormikValues, useFormikContext} from "formik";
import React from "react";
import CustomInput from "../../components/formInputs/CustomInput/CustomInput";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function MintForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitForm(e);
  };
  const {values} = useFormikContext<FormikValues>();
  return (
      <Form>
        <Box position={"relative"}>
          <Container
              as={SimpleGrid}
              maxW={"7xl"}
              columns={{base: 1, md: 2}}
              spacing={{base: 10, lg: 32}}
              py={{base: 10, sm: 20, lg: 32}}
          >
            <Stack spacing={{base: 10, md: 20}}>
              <Heading
                  lineHeight={1.1}
                  fontSize={{base: "3xl", sm: "4xl", md: "5xl", lg: "6xl"}}
              >
                Content creation of the future{" "}
                <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                ></Text>{" "}
              </Heading>
              <Stack direction={"row"} spacing={4} align={"center"}>
                <Text
                    fontFamily={"heading"}
                    fontSize={{base: "4xl", md: "6xl"}}
                >
                  +
                </Text>
                <Flex
                    align={"center"}
                    justify={"center"}
                    fontFamily={"heading"}
                    fontSize={{base: "sm", md: "lg"}}
                    bg={"gray.800"}
                    color={"white"}
                    rounded={"full"}
                    width={useBreakpointValue({base: "104px", md: "150px"})}
                    height={useBreakpointValue({base: "44px", md: "60px"})}
                    position={"relative"}
                    p={10}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, orange.400,yellow.400)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                >
                  Digital Ownership
                </Flex>
              </Stack>
            </Stack>
            <Stack
                bg={"gray.50"}
                rounded={"xl"}
                p={{base: 4, sm: 6, md: 8}}
                spacing={{base: 8}}
                maxW={{lg: "lg"}}
            >
              <Stack spacing={4}>
                <Heading
                    color={"gray.800"}
                    lineHeight={1.1}
                    fontSize={{base: "2xl", sm: "3xl", md: "4xl"}}
                >
                  Enter the future
                  <Text
                      as={"span"}
                      bgGradient="linear(to-r, red.400,pink.400)"
                      bgClip="text"
                  >
                    !
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{base: "sm", sm: "md"}}>
                  A new way to create and share your content.
                </Text>
              </Stack>
              <Box mt={10}>
                <Stack spacing={4}>
                  <Field
                      component={CustomInput}
                      name={"name"}
                      placeholder="Name"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                  />
                  <Field
                      name={"description"}
                      placeholder="Description"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      component={CustomInput}
                  />
                  <Field
                      component={CustomInput}
                      name={"image"}
                      placeholder="Image URL (https://image.site.com/abc)"
                      bg={"gray.100"}
                      border={0}
                      disabled={true}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                  />
                  <FileUploader>
                    <Button
                        w="100%"
                        colorScheme="purple"
                        fontFamily={"heading"}
                        bg={"purple.100"}
                        color={"blackAlpha.800"}
                    >
                      Upload Image
                    </Button>
                  </FileUploader>
                  <Box mb={{base: 8, md: 20}}>
                    <Text fontSize={"xl"} color={"gray.400"}>
                      {values.files &&
                          values.files.map((file, i) => (
                              <>
                                <small>{`File: ${file.name}`} </small>
                                <br/>
                                <small>{`Type: ${file.type}`} </small>
                                <br/>
                                <small>{`Size: ${file.size} bytes`} </small>
                              </>
                          ))}
                    </Text>
                  </Box>
                </Stack>
                <Button
                    fontFamily={"heading"}
                    mt={8}
                    w={"full"}
                    type="submit"
                    bgGradient="linear(to-r, red.400,pink.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, red.400,pink.400)",
                      boxShadow: "xl",
                    }}
                >
                  Create Metadata
                </Button>
              </Box>
            </Stack>
          </Container>
          <Blur
              position={"absolute"}
              top={-10}
              left={-10}
              style={{filter: "blur(70px)"}}
          />
        </Box>
      </Form>
  );
}

export const Blur = (props: IconProps) => {
  return (
      <Icon
          width={useBreakpointValue({base: "100%", md: "40vw", lg: "30vw"})}
          zIndex={useBreakpointValue({base: -1, md: -1, lg: -1})}
          height="560px"
          viewBox="0 0 528 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565"/>
        <circle cx="244" cy="106" r="139" fill="#ED64A6"/>
        <circle cy="291" r="139" fill="#ED64A6"/>
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936"/>
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B"/>
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78"/>
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1"/>
      </Icon>
  );
};
