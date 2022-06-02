import { Container, Heading, Text, Image, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { InfoText } from '../../styles/Buttons'
import bmi from '../../assets/bmi.jpg'

function About() {
  return (
    <Container maxW='container.xl' my={10}>
      <Heading size='lg' mb={5}>What is the body mass index (BMI)?</Heading>
      <Box display={{ lg: 'flex' }} alignItems='center' justifyContent="center">
        <Image src={bmi} alt='' mr={{ lg: 5 }} />
        <Box>
          <InfoText>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</InfoText>
          <InfoText>The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.</InfoText>
        </Box>
      </Box>
      <Heading size='md' my={5}>BMI ranges</Heading>
      <InfoText>For most adults, an ideal BMI is in the 18.5 to 24.9 range.</InfoText>
      <InfoText>For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.</InfoText>
      <InfoText>If your BMI is:</InfoText>
      <Table variant='striped' p={5} my={5} colorScheme='gray' borderWidth='1px' borderRadius='lg'>
        <TableCaption>
          Weight statuses by bmi range</TableCaption>
        <Thead>
          <Tr>
            <Th>BMI</Th>
            <Th>Weight Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Below 18.5</Td>
            <Td>Underweight</Td>
          </Tr>
          <Tr>
            <Td>18.5 – 24.9</Td>
            <Td>Healthy Weight</Td>
          </Tr>
          <Tr>
            <Td>25.0 – 29.9</Td>
            <Td>Overweight</Td>
          </Tr>
          <Tr>
            <Td>30.0 and Above</Td>
            <Td>Obesity</Td>
          </Tr>
        </Tbody>
      </Table>
      <InfoText>If you want to calculate your BMI, click &#128073; <Link to='/'><Text as='u' color='lightseagreen'>BMI Calculate</Text></Link> </InfoText>

    </Container>
  )
}

export default About;