'use client';

import Image from 'next/image';
import Link from 'next/link';

import { faCalendarCheck, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ParallaxEffect from '../layout/ParallaxEffect';
import ScrollAnimation from '../layout/ScrollAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
        }}
      />
      <div className="z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <ScrollAnimation
            variant="fadeLeft"
            delay={0.2}
            className="mb-10 text-center md:mb-0 md:w-1/2 md:text-left"
          >
            <h1
              className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Thanh Huyền Beauty Spa
            </h1>
            <p className="mb-8 max-w-lg text-xl text-gray-700">
              Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh
              nghiệm
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <ScrollAnimation variant="fadeUp" delay={0.4}>
                <Link
                  href="#booking"
                  className="btn-primary rounded-full px-8 py-3 font-medium transition duration-300"
                >
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" /> Đặt lịch ngay
                </Link>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeUp" delay={0.6}>
                <Link
                  href="#contact"
                  className="btn-secondary rounded-full px-8 py-3 font-medium transition duration-300"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Liên hệ
                </Link>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ParallaxEffect direction="down" offset={30} className="flex justify-center md:w-1/2">
            <ScrollAnimation variant="fadeRight" delay={0.4}>
              <div className="animate-float relative h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Spa treatment"
                  className="rounded-full w-full h-full border-8 border-white object-cover shadow-xl"
                  width={320}
                  height={320}
                />
              </div>
            </ScrollAnimation>
          </ParallaxEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;
