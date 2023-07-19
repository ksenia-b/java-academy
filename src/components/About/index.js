import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Image
} from "@chakra-ui/react";
import listItem from "../../assets/i/listItem.svg";
import plusSign from "../../assets/i/plus.svg";
import minusSign from "../../assets/i/minus.svg";
import summarySign from "../../assets/i/summary.svg";
import author from "../../assets/i/author.png"

function About() {
  return (
    <Box id={"about"}>
      <Heading
        m={"112px 0px 0px 67px"}
        fontSize={"60px"}
        fontWeight={"500"}
        gap={"20px"}
      >Об обучении</Heading>
      <Box display={"flex"} flexDirection={"column"} gap={"30px"}>

        <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Box>
                <Text fontWeight={"bold"} >Перед тобой онлайн платформа посвященная java разработĸе.</Text>
                <Text>Курс состоит из частей, или по другому — модулей.</Text>
                <Text>Каждый модуль состоит из видео-лекций, теста и глобального проекта.</Text>
          </Box>

          <Box display={"flex"} flexDirection={"row"} marginTop={"50px"}> 
          
            <Box display={"flex"} >
              <Text fontWeight={"bold"} >Проект</Text> 
              <Text>- это большая задача, которую ты делаешь сам и отправляешь
              свой код на проверку куратора. Ведь невозможно стать программистом,
              не практикуясь! </Text>
            </Box>

            <Box >
              <Text>Куратор дает тебе обратную связь по твоему решению.</Text>
              <Text>Такой подход дает тебе, с одной стороны самостоятельную практику, с другойстороны помогает тебе улучшить твой код. </Text>
            </Box>
          </Box>

        </Box>

        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"}>Твоя задача:</Text> 
          <Text>
            посмотреть видео-лекции, пройти итоговый тест и написать свое
            решение проекта.
          </Text>
        </Box>

        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"}>Теперь у тебя есть все инструменты для становления разработчиком в будущем! </Text>
              <Text fontSize={"50px"} textTransform={"uppercase"} m={"0px"}>
                <Text color={"#302D3D"} m={"0px"} >Пройдешь все модули </Text>
                <Text color={"#D0082C"} m={"0px"}>и вперед на собеседования!</Text>
            </Text>
        </Box>

        <Box>
          <Text fontWeight={"bold"} p={"20px"}>Твои действия</Text>
          <Box display={"flex"} justifyContent={"center"} >
            <UnorderedList styleType={"none"} display={"flex"} color={"#FFFFFF"}  >
              <ListItem><Box display={"flex"} justifyContent={"space-between"}><Image /><Text bg={"#4B6FCB"} borderRadius={"20px"}  p={"46px 110px"} w={"100px"} h={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>смотришь леĸции</Text></Box></ListItem>
              <ListItem><Box display={"flex"} justifyContent={"space-between"}><Image src={listItem}/><Text bg={"#4B6FCB"} borderRadius={"20px"} p={"46px 110px"} w={"150px"} h={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>решаешь задачу</Text></Box></ListItem>
              <ListItem><Box display={"flex"} justifyContent={"space-between"}><Image src={listItem}/><Text bg={"#4B6FCB"} borderRadius={"20px"} p={"46px 110px"} w={"150px"} h={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>делаешь проект</Text></Box></ListItem>
              <ListItem><Box display={"flex"} justifyContent={"space-between"}><Image src={listItem}/><Text bg={"#4B6FCB"} borderRadius={"20px"} p={"46px 110px"} w={"150px"} h={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>отправляешь куратору</Text></Box></ListItem>
              <ListItem><Box display={"flex"} justifyContent={"space-between"}><Image src={listItem}/><Text bg={"#4B6FCB"} borderRadius={"20px"} p={"46px 110px"} w={"150px"} h={"30px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>получаешь обратную связь</Text></Box></ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} p={"20px"}>Ты получишь:</Text>
          <UnorderedList styleType={"none"} display={"flex"} flexDirection={"column"} gap={"10px"}>
            <ListItem display={"flex"} flexDirection={"row"} gap={"10px"}><Image src={plusSign} marginTop={"10px"}/><Text m={"0px"}>пожизненный доступ ĸ видеоуроĸам </Text></ListItem>
            <ListItem display={"flex"} flexDirection={"row"} gap={"10px"}><Image src={plusSign}  marginTop={"10px"}/><Text m={"0px"}>чат для учениĸов</Text></ListItem>
            <ListItem ><Text m={"0px 0px 0px 23px"}>бесценная праĸтиĸа на реальных задачах</Text></ListItem>
            
            <ListItem display={"flex"} flexDirection={"column"} gap={"10px"}><Image src={summarySign} w={"35%"}/></ListItem>
            <ListItem display={"flex"} flexDirection={"row"} gap={"10px"}><Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"} gap={"4px"}><Image src={minusSign}/><Image src={minusSign}/></Box><Text m={"0px"}>все необходимое для трудоустройства</Text></ListItem>
          </UnorderedList>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} flexDirection={"row"}>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"} w={"60%"} >
              <Text fontSize={"60px"} textAlign={"center"} marginTop={"100px"}>Кто создал Академию?</Text>
              <Text marginLeft={"100px"} w={"600px"}>     
                Юрий Молодыко — действующий java разработчик в Банке "ВТБ". Опыт
                работы в IT индустрии 9 лет.
              </Text>
              <Text marginLeft={"100px"} w={"600px"}>
                За свою карьеру работал в крупнейших финансовых организациях:
                Сбербанк, Россгострах, Финансовая корпорация Открытие. Начинал с
                должности экономиста, поэтому не понаслышке знает о всех
                трудностях перехода из одной профессии в другую.
              </Text>
            </Box>
          {/* </Box> */}

          <Box>
            <Image src={author}/>
          </Box>
         
          </Box>

          <Box textTransform={"uppercase"} fontSize={"50px"} color={"#302D3D"} display={"flex"} flexDirection={"column"} alignItems={"center"} lineHeight={"50px"}  gap={"20px"}>
            <Text m={"0px"}>При создании АКадемии учтены</Text>
            <Text color={"#D0082C"} m={"0px"}>все теКущие требования</Text>
            <Text m={"0px"}>работодателей</Text>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default About;
