import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faq from "@/data/faq";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";

export default function FAQ() {
  return (
    <Section>
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Here are answers to some common questions about our treatments."
        />

        <div className="mx-auto max-w-4xl">
          <Accordion
            type="single"
            collapsible
          >
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={String(index)}
              >
                <AccordionTrigger>
                  {item.question}
                </AccordionTrigger>

                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}