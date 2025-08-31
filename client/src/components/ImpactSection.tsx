import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    quote: "Thanks to Focus on the Hopeless Foundation, I can now attend school and dream of becoming a teacher. Their education program didn't just give me books – it gave me hope for the future.",
    name: "Maria Santos, Age 12",
    location: "Education Program Beneficiary, Guatemala",
    id: "maria"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    quote: "The sustainable development program helped our entire village. We now have clean water, and I've started a small business that supports my family and neighbors.",
    name: "James Nkomo",
    location: "Community Leader, Kenya",
    id: "james"
  },
  {
    image: "https://images.unsplash.com/photo-1594824020308-3c3c3c20a1ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    quote: "The healthcare program saved my baby's life. Now I volunteer to help other mothers in our community access the care they need.",
    name: "Sarah Mitchell",
    location: "Healthcare Program Beneficiary, Philippines",
    id: "sarah"
  }
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Stories of Hope</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed through your support and our programs.
          </p>
        </motion.div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 bg-card border border-border p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} testimonial`}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                        data-testid={`img-testimonial-${testimonial.id}`}
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <blockquote className="text-lg md:text-xl text-card-foreground mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-accent font-semibold">- {testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Carousel Controls */}
            <button 
              onClick={previousSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-3 rounded-full shadow-lg transition-all duration-300"
              data-testid="button-carousel-prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-primary p-3 rounded-full shadow-lg transition-all duration-300"
              data-testid="button-carousel-next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent' : 'bg-border'
                }`}
                data-testid={`button-carousel-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
