export function sendWhatsAppMessage(phone: string, message: string) {
  // Cleans non-numeric values
  const formattedPhone = phone.replace(/\D/g, "");
  // Appends country code for India (91) if not present
  const targetNumber = formattedPhone.startsWith("91") ? formattedPhone : `91${formattedPhone}`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}