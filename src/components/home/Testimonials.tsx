import React from 'react';

// Star icon component
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote: "\"Wearing a Shaaman haaram on my wedding day made me feel like royalty. Every detail sparkled with tradition and love – it's not just jewelry, it's a legacy.\"",
    author: "Divya Menon, Kochi"
  },
  {
    id: 2,
    quote: "\"Wearing a Shaaman haaram on my wedding day made me feel like royalty. Every detail sparkled with tradition and love – it's not just jewelry, it's a legacy.\"",
    author: "Divya Menon, Kochi"
  },
  {
    id: 3,
    quote: "\"Wearing a Shaaman haaram on my wedding day made me feel like royalty. Every detail sparkled with tradition and love – it's not just jewelry, it's a legacy.\"",
    author: "Divya Menon, Kochi"
  },
  {
    id: 4,
    quote: "\"Wearing a Shaaman haaram on my wedding day made me feel like royalty. Every detail sparkled with tradition and love – it's not just jewelry, it's a legacy.\"",
    author: "Divya Menon, Kochi"
  },
  {
    id: 5,
    quote: "\"Wearing a Shaaman haaram on my wedding day made me feel like royalty. Every detail sparkled with tradition and love – it's not just jewelry, it's a legacy.\"",
    author: "Divya Menon, Kochi"
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 pt-12 md:pt-24 pb-56">
      <h2 className="text-3xl md:text-[48px] nanum-myeongjo-regular mb-12 tracking-[-4px]" >
        Testimonials
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {testimonials.slice(0, 5).map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`
              bg-white rounded-[10px] px-10 py-16 shadow-sm 
              ${index === 0 || index === 2 || index === 4 
                ? 'lg:translate-y-0' 
                : 'lg:translate-y-16'}
            `}
          >
            {/* Star Rating */}
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {testimonial.quote}
            </p>

            {/* Author */}
            <p className="text-gray-500 text-sm mt-12 font-medium">
              -{testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;