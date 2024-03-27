import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react';
import { v4 } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '../Banner';
import Layout from '../Layout';
import { questions } from '@/constants/faqs';

const Faqs = () => {
  const phoneNumber = '00 123 456 789';

  const renderItemsQuestions = (itemQuestions) =>
    itemQuestions.map((itemQuestion) => (
      <CAccordionItem
        key={itemQuestion.id}
        itemKey={itemQuestion.id}
        className="Faqs-accordion-item"
      >
        <CAccordionHeader className="Faqs-accordion-header">
          {itemQuestion.questionTitle}
        </CAccordionHeader>
        <CAccordionBody className="Faqs-accordion-body">
          {itemQuestion.questionText}
        </CAccordionBody>
      </CAccordionItem>
    ));

  const renderQuestions = () =>
    questions.map((question) => (
      <div className="Faqs-item" key={v4()}>
        <h3 className="Faqs-item-title">{question.text}</h3>

        <CAccordion flush className="Faqs-accordion">
          {renderItemsQuestions(question.questions)}
        </CAccordion>
      </div>
    ));

  return (
    <Layout headPageTitle="Faqs-Foodingly">
      <Banner title="Faqs" page="Faqs" />
      <div className="Food">
        <div className="Food-content">
          <h2 className="Food-title">Frequent answer and question</h2>
          <div className="Faqs-container">
            <div className="Faqs-container-left">{renderQuestions()}</div>
            <div className="Faqs-container-right">
              <div className="Faqs-call">
                <Image
                  width={106}
                  height={106}
                  alt="phone call"
                  className="Faqs-call-image"
                  src="/call.png"
                  quality={100}
                />

                <span className="Faqs-call-text">Contact us</span>
                <Link className="Faqs-call-link" href={`tel:${phoneNumber}`}>
                  +{phoneNumber}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faqs;
