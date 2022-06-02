import { useContext, useEffect, useState } from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { MainContext } from '../../context/MainContextProvider';
import bmiResults from '../../data/bmiData'
import DietList from '../DietList'
import { DietButton, BmiTypeBox, BmiDesc, InfoText } from '../../styles/Buttons';
import gif from '../../assets/weight.gif'

function Results() {
  const { bmi, name } = useContext(MainContext);
  const [results, setResults] = useState(bmiResults[0])
  const [toggle, setToggle] = useState(false);


  const handleResult = async () => {
    if (bmi < 18.5) {
      setResults(bmiResults[0])
    } else if (18.5 <= bmi && bmi < 24.9) {
      setResults(bmiResults[1])
    } else if (25 < bmi && bmi < 29.9) {
      setResults(bmiResults[2])
    } else if (bmi > 30) {
      setResults(bmiResults[3])
    }
  }

  useEffect(() => {
    handleResult();
  }, [bmi])

  return (
    <Container maxW='container.xl'>
      <Box w='100%' p={4} display='flex' alignItems='center' justifyContent="center" >
        <Image src={gif} alt='' />
      </Box>
      <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" >
        <Heading size='lg'>{name}'s BMI Results : {bmi}  </Heading>
        <BmiTypeBox color={results.color} bgColor={results.bgColor}>{results.bmiType}</BmiTypeBox>
        <BmiDesc>{results.bmiDesc}</BmiDesc>
      </Box>

      <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" >
        <InfoText>Check out the list below for a diet that is right for you. &#128071;</InfoText>
        <DietButton type="button" onClick={() => setToggle(!toggle)}>Diet List &#128220;</DietButton>
        {toggle && <DietList />}
      </Box>
    </Container>
  )
}

export default Results;