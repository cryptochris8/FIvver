import { Check } from 'lucide-react';
import { Button } from './Button';
import type { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-xl ${
        service.popular
          ? 'border-2 border-primary-500 shadow-lg'
          : 'border border-secondary-200'
      }`}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
          {service.title}
        </h3>
        <p className="text-secondary-600">{service.description}</p>
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-secondary-900">
          {service.startingPrice}
        </span>
        <span className="text-secondary-500 ml-1">starting</span>
        <p className="text-sm text-secondary-500 mt-1">
          Delivery: {service.deliveryTime}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
            <span className="text-secondary-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={service.popular ? 'primary' : 'outline'}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
