// кнопки с номером и GET A QUOTE
import Image from "next/image";

export default function QuoteButtons() {
    return (
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center w-198 h-42">
            <Image
              src="/images/icons/phone-for-button.svg" 
              alt="Phone Icon"
              width={18}  // Ширина иконки
              height={18} // Высота иконки
              className="mr-2"
            />
            (855) 566-5340
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full w-198 h-42">
            GET A QUOTE
          </button>
        </div>
      );
  }