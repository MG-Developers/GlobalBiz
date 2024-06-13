import { Container } from "../Container/Container";
import { FadeIn } from "../FadeIn/FadeIn";

export const Usps = () => {
  return (
    <Container className="relative z-10 w-full space-y-12 py-36 text-4xl text-center font-normal text-white md:text-5xl">
      <FadeIn>
        <div className="flex justify-center">
          <p className="mb-20 w-8/12">
            We help you earn lots and save up your taxes with our strategies.
          </p>
        </div>

        <div className="flex justify-center">
          <p className="text-xl w-11/12">
            Our team specializes in delivering top-tier financial consultation
            and turnkey business setup solutions tailored for clients worldwide.
            Whether you're an ambitious entrepreneur seeking strategic guidance
            or a thriving enterprise eyeing international growth, trust us to
            navigate the complexities and unlock your path to prosperity every
            step of the journey.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex justify-center">
          <p className="mb-20 w-8/12">
            Don’t know HOW to expand? Need answer to all the Ws?
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-xl w-11/12">
            Our expert team specializes in assisting clients from all corners of
            the globe, providing comprehensive support to navigate tax
            regulations, optimize financial structures, and streamline business
            operations. From strategic planning to practical implementation,
            we'll help you minimize your tax burden legally and ethically,
            ensuring compliance while maximizing savings.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex justify-center">
          <p className="mb-20 w-8/12">
            But we don’t stop there ! COMPOUND YOUR MONEY We guide you where to
            invest next.
          </p>
        </div>
        
        <div className="flex justify-center">
          <p className="text-xl w-11/12">
            At GlobalBizHQ, we understand that saving on taxes is just the
            beginning. We'll also empower you to reinvest those saved funds
            wisely, guiding you towards opportunities that promise better
            returns than the taxes you're currently forfeiting. Our goal is not
            just to minimize your tax liability but to help you build a stronger
            financial future.
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};
