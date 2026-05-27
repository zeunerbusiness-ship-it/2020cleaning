import { MessageSquare } from "lucide-react";

export function StickyCall() {
  return (
    <a
      href="sms:+13215002020"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 btn-cta flex items-center justify-center gap-2 rounded-full py-4 text-base font-semibold shadow-lg"
    >
      <MessageSquare className="h-5 w-5" /> Text Us — (321) 500-2020
    </a>
  );
}
