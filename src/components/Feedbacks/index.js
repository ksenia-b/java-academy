import { Box, Text, Image } from "@chakra-ui/react";
import feedbackExample from "../../assets/i/feedback.png";
import telegram from "../../assets/i/telegram.svg";
import arrowLeft from "../../assets/i/arrowLeft.svg";

function Feedbacks() {
  return (
    <Box id={"feedbacks"} display={"flex"} flexDirection={"row"} gap={"20px"}>
      <Text
        m={"0px 0px 0px 67px"}
        fontSize={"60px"}
        fontWeight={"500"}
        letterSpacing={"-0.06em"}
      >
        Отзывы
      </Text>

      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"30px"}
        fontSize={"18px"}
      >
        <Box>
          <Image src={feedbackExample} maxWidth={"500px"}></Image>
          <Box display={"flex"} flexDirection={"row"} gap={"30px"}>
            <Box>
              <Text>Иван Иванов</Text>
              <Text>25 лет</Text>
            </Box>
            <Image src={telegram} />
          </Box>
        </Box>

        <Box>
          <Text fontSize={"18px"}>
            Хотел поблагодарить Юрия и курсы программирования JavaByAblazzing,
            который дал прекрасный старт помогающий освоить мир Java разработки.
            Хочу ометить высокую профессиональную подготовку лектора, и крайнюю
            заинтересованность в своих учениках. Очень понравилось что на все
            интресующие вопросы и возникшие трудности, тебе обязательно ответят
            и дадут развернутый ответ. Так же хочу отметить интересные
            практические задания, дающие в полной мере реализовать теоритические
            знания. Ну и конечно же ламповый чат с другими учениками курса, в
            котором можно обсудить насущные проблемы и завести отличных коллег и
            товарищей. Могу точно сказать что благодаря данным курсам я получил
            много недостающих знаний и закрыл пробелы в уже имеющихся.
          </Text>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={"90px"}
          >
            <Image src={arrowLeft} />
            <Image transform={"rotate(180deg)"} src={arrowLeft} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Feedbacks;
