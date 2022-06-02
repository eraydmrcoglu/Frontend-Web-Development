import { useContext, useState } from "react";
// chakra
import { Center, Input, Image, InputGroup, InputLeftElement, Box, FormControl, Radio, Stack, RadioGroup, } from "@chakra-ui/react";
import { BiBody } from "react-icons/bi";
import { GiBodyHeight } from "react-icons/gi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MainContext } from "../context/MainContextProvider";
import { CalcButton } from "../styles/Buttons";
import male from "../assets/male.jpg";
import female from "../assets/female.png";

function BmiCalculator() {
  const { setName, setWeight, setHeight, calculate } = useContext(MainContext);
  const [value, setValue] = useState("1");

  const imgPath = value === "1" ? male : female;

  return (
    <Center display="flex" alignItems="center">
      <Box
        p="6"
        width={{ lg: "80%", md: "80%" }}
        display={{ lg: "flex" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image height={{ lg: "600px" }} src={imgPath} alt="" />
        <FormControl
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          isRequired
          size="lg"
        >
          <InputGroup mb="5">
            <InputLeftElement
              pointerEvents="none"
              children={<MdDriveFileRenameOutline color="gray" size={30} />}
            />
            <Input
              type="text"
              variant="outline"
              placeholder="Your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup mb="5">
            <InputLeftElement
              pointerEvents="none"
              children={<BiBody color="gray" size={30} />}
            />
            <Input
              type="text"
              variant="outline"
              placeholder="Weight, etc 60kg"
              onChange={(e) => setWeight(e.target.value)}
            />
          </InputGroup>
          <InputGroup mb="5">
            <InputLeftElement
              pointerEvents="none"
              children={<GiBodyHeight color="gray" size={30} />}
            />
            <Input
              type="text"
              variant="outline"
              placeholder="Height, etc 160cm"
              onChange={(e) => setHeight(e.target.value / 100)}
            />
          </InputGroup>
          <RadioGroup defaultValue="2" mb="5" value={value}>
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="blue"
                value="1"
                onChange={(e) => setValue(e.target.value)}
              >
                Male
              </Radio>
              <Radio
                colorScheme="pink"
                value="2"
                onChange={(e) => setValue(e.target.value)}
              >
                Female
              </Radio>
            </Stack>
          </RadioGroup>
          <CalcButton
            type="button"
            color={value}
            to="/results"
            onClick={calculate}
          >
            Calculate
          </CalcButton>
        </FormControl>
      </Box>
    </Center>
  );
}

export default BmiCalculator;
