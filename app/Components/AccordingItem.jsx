import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import React from 'react'


const AccordingItem = () => {

    return (
        <>


<Accordion type="single" collapsible className="w-full text-white text-right">
      <div className="item1 mb-4 rounded-2xl overflow-hidden border">
      <AccordionItem value="item-1">
        <AccordionTrigger>دورة التحليل الفني الكلاسيكي</AccordionTrigger>
        <AccordionContent>
        الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية. الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.
        </AccordionContent>
      </AccordionItem>
      </div>
      <div className="item1 mb-4 rounded-2xl overflow-hidden border">
      <AccordionItem value="item-2">
        <AccordionTrigger>دورة التحليل الفني الكلاسيكي</AccordionTrigger>
        <AccordionContent>
        الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية. الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.
        </AccordionContent>
      </AccordionItem>
      </div>
      <div className="item1 mb-4 rounded-2xl overflow-hidden border">
      <AccordionItem value="item-3">
        <AccordionTrigger>دورة التحليل الفني الكلاسيكي</AccordionTrigger>
        <AccordionContent>
        الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية. الدورة تستهدف المبتدئين والباحثين عن الإحتراف في مجال التحليل الفنى وجميع المهتمين بأسواق المال العربية والأجنبية.
        </AccordionContent>
      </AccordionItem>
      </div>
    </Accordion>
        </>
      );
}

export default AccordingItem