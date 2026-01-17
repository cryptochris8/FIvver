import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about us and our mission.',
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-secondary-900">
            About Us
          </h1>
          <div className="prose prose-lg max-w-none text-secondary-600">
            <p>
              Welcome to our website. We are passionate about building modern,
              fast, and user-friendly web applications.
            </p>
            <p>
              Our team combines creativity with technical expertise to deliver
              solutions that exceed expectations. We believe in clean code,
              beautiful design, and exceptional user experiences.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-secondary-900">
              Our Mission
            </h2>
            <p>
              To empower businesses with cutting-edge web solutions that drive
              growth and success in the digital age.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-secondary-900">
              Our Values
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Quality over quantity</li>
              <li>Transparent communication</li>
              <li>Continuous improvement</li>
              <li>Client satisfaction first</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
