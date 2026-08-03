import { MessageCircle } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/travelData';

export default function WhatsAppWidget() {
  const handleWidgetClick = () => {
    sendWhatsAppMessage(
      BUSINESS_INFO.whatsappNumbers[0], 
      "Hello Sayali Tours, I'd like to ask some questions about car rentals."
    );
  };

  return (
    <button
      onClick={handleWidgetClick}
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-sm whitespace-nowrap">
        Chat with Us
      </span>
    </button>
  );
}