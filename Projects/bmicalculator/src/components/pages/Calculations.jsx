import { useContext, useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, } from '@chakra-ui/react';
import { MainContext } from '../../context/MainContextProvider';
import { InfoText } from '../../styles/Buttons'

function Calculations() {
  const { localData } = useContext(MainContext);
  const [userData, setUserData] = useState(localData);
  // console.log("userData:::::::", userData)

  useEffect(() => {
    setUserData(localData);
  }, [localData])

  return (
    <Container maxW='container.xl' my={10}>
      <Table variant='striped' colorScheme='gray' borderWidth='1px' borderRadius='lg'>
        <TableCaption>Name and BMI information</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>BMI</Th>
          </Tr>
        </Thead>
        <Tbody>
          {(Array.isArray(userData) && !userData.length) ?
            <Tr><Td>No one yet...</Td><Td></Td></Tr> :
            userData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item?.name}</Td>
                <Td>{item?.bmi}</Td>
              </Tr>
            ))}

        </Tbody>
      </Table>
    </Container>
  )
}

export default Calculations;