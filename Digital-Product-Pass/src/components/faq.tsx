import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Ist die Flasche recycelbar?</AccordionTrigger>
        <AccordionContent>
          Ja, Ihre Flasche ist recyclebar, achten Sie auf das Recycling-Symbol
          und die Nummer auf der Flasche, um die richtigen Recyclingverfahren zu
          bestimmen.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Wie sollte die Flasche entsorgt werden?
        </AccordionTrigger>
        <AccordionContent>
          Bitte spülen Sie die Flasche aus und entfernen Sie alle nicht
          recycelbaren Elemente wie Etiketten oder Deckel, bevor Sie sie in die
          dafür vorgesehenen Recyclingbehälter werfen.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Warum ist Flaschenrecycling umweltfreundlicher als Wegwerfen?
        </AccordionTrigger>
        <AccordionContent>
          Flaschenrecycling spart Energie und Rohstoffe und reduziert
          Umweltbelastungen.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
