import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MYAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Coded Design</AccordionTrigger>
        <AccordionContent>
          I like to code designs.
          code
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Figma Design</AccordionTrigger>
        <AccordionContent>
          Full courese on Figma design. 
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
