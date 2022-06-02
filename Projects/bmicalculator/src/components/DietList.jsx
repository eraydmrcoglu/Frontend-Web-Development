import { useContext, useState, useEffect } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import { MainContext } from '../context/MainContextProvider';
import dietLists from '../data/dietLists';
import { InfoText } from '../styles/Buttons'

function DietList() {
  const { bmi } = useContext(MainContext);
  const dietList = dietLists[0];
  const [diet, setDiet] = useState(dietList.underweight);

  const handleDiet = async () => {
    if (bmi < 18.5) {
      setDiet(dietList.underweight)
    } else if (18.5 <= bmi && bmi < 24.9) {
      setDiet(dietList.health)
    } else if (25 < bmi && bmi < 29.9) {
      setDiet(dietList.overweight)
    } else if (bmi > 30) {
      setDiet(dietList.obesity)
    }
  }
  useEffect(() => {
    handleDiet();
  }, [bmi])

  const newBreakfast = diet?.breakfast?.split(",").map((item) => `${item}`);
  const newLunch = diet?.lunch?.split(",").map((item) => `${item}`);
  const newDinner = diet?.dinner?.split(",").map((item) => `${item}`);

  return (
    <Container mt={8} maxW='container.xl'>
      <Box display={{ lg: 'flex' }} alignItems='start' justifyContent="center">
        <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Heading size='md' mb={5}>&#127789; Breakfast &#127789;</Heading>
          {newBreakfast?.map((item, index) => (
            <InfoText align='center' key={index}>&#128313; {item}</InfoText>
          ))}
        </Box>
        <Box w='100%' p={4} mx={{ lg: 4 }} my={{ lg: 0, sm: 8, md: 8 }} display='flex' flexDirection="column" alignItems='center' justifyContent="center" borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Heading size='md' mb={5}>&#127829; Lunch &#127829;</Heading>
          {newLunch?.map((item, index) => (
            <InfoText align='center' key={index}>&#128313; {item}</InfoText>
          ))}
        </Box>
        <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Heading size='md' mb={5}> &#127831; Dinner &#127831;</Heading>
          {newDinner?.map((item, index) => (
            <InfoText align='center' key={index}>&#128313; {item}</InfoText>
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default DietList;