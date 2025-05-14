import Price from '../index/price';

const Pricing = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-x-0 bottom-60 h-[60%] overflow-hidden lg:h-120">
                <img src="/storage/home/price-bg.png" alt="Background pattern" className="h-full w-full object-cover object-top" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-primary my-8 text-xl font-bold md:text-4xl lg:my-12">
                    Plans for <span className="text-accent">everyone</span> <span className="inline-block text-green-500">💚</span>
                </h2>
                <p className="text-text mx-auto mb-12 max-w-4xl">
                    We've designed pricing plans to cater to different needs and preferences. Choose the plan that aligns with your requirements and
                    enjoy a seamless experience in creating, sharing, and managing your business cards and digital profiles.
                </p>

                <Price />
            </div>
        </div>
    );
};

export default Pricing;
