const testimonials = [
  {
    quote: "My daughter went from picky to adventurous overnight. The Sweet Potato Sunshine is her absolute favourite!",
    author: "Sarah M.",
    role: "Mum of 8-month-old Emma",
    rating: 5,
    avatar: "SM",
  },
  {
    quote: "The meal plans took all the guesswork out of weaning. I finally feel confident about what I'm feeding my son.",
    author: "Michael T.",
    role: "Dad of 11-month-old James",
    rating: 5,
    avatar: "MT",
  },
  {
    quote: "Having a curated plan delivered to my door has been a game-changer. The quality is amazing and my twins love it.",
    author: "Jessica L.",
    role: "Mum of twins, 7 months",
    rating: 5,
    avatar: "JL",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">
            Parents Love Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of families nourishing happy, healthy little ones with Tiny Tummies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
