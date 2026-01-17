import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-secondary-200 relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-secondary-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-secondary-700 mb-6 relative z-10">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-secondary-900">{testimonial.name}</p>
          <p className="text-sm text-secondary-500">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
