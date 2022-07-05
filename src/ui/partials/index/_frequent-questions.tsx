import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  AccordionStyled,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  Wave,
} from './_frequent-questions.styled';

const questionsList = [
  {
    question: 'Dúvida 1',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur, neque tempore perspiciatis beatae totam suscipit at debitis molestias dolorum, sed doloremque fugiat illo reiciendis eaque debitis molestias dolorum, sed doloremque fugiat  reiciendis eaque debitis molestias dolorum, sed doloremque fugia illo reiciendis eaque ipsam voluptatum? Labore, maiores.',
  },
  {
    question: 'Dúvida 2',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur, neque tempore perspiciatis beatae totam suscipit at debitis molestias dolorum, sed doloremque fugiat illo reiciendis eaque debitis molestias dolorum, sed doloremque fugiat  reiciendis eaque debitis molestias dolorum, sed doloremque fugia illo reiciendis eaque ipsam voluptatum? Labore, maiores.',
  },
  {
    question: 'Dúvida 3',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur, neque tempore perspiciatis beatae totam suscipit at debitis molestias dolorum, sed doloremque fugiat illo reiciendis eaque debitis molestias dolorum, sed doloremque fugiat  reiciendis eaque debitis molestias dolorum, sed doloremque fugia illo reiciendis eaque ipsam voluptatum? Labore, maiores.',
  },
  {
    question: 'Dúvida 4',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur, neque tempore perspiciatis beatae totam suscipit at debitis molestias dolorum, sed doloremque fugiat illo reiciendis eaque debitis molestias dolorum, sed doloremque fugiat  reiciendis eaque debitis molestias dolorum, sed doloremque fugia illo reiciendis eaque ipsam voluptatum? Labore, maiores.',
  },
];

const FrequentQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpen(accordionNumber: number): boolean {
    return activeAccordion === accordionNumber;
  }

  function changeOpenAccordion(accordionNumber: number) {
    if (isOpen(accordionNumber)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionNumber);
    }
  }

  function getIcon(accordionNumber: number): string {
    return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus';
  }
  return (
    <SectionContainer>
      <Wave src={'/img/home/waves.svg'} />
      <Container>
        <SectionTitle>Ainda está com dúvidas?</SectionTitle>
        <SectionSubTitle>veja abaixo as perguntas frequentes</SectionSubTitle>
        {questionsList.map((item, index) => (
          <AccordionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={'primary'}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{item.answer}</AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestions;
