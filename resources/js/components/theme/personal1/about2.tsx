import AnimatedList from '@/components/ui/animated-list';
import PixelTransition from '@/components/ui/pixel-image';
import ScrollFloat from '@/components/ui/scroll-reveal';
import ShinyText from '@/components/ui/shiny-text';

interface FitnessProps {
    bio?: string;
    avatar?: string;
    bname?: string;
    description?: string;
    skills?: string[];
}

export default function About2({ bio, bname, avatar, skills, description }: FitnessProps) {
    return (
        <div className="bg-black">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center bg-black px-6 py-12 text-white">
                <div className="text-sm">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                    >
                        {` About ${bname}`}
                    </ScrollFloat>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                    <PixelTransition
                        firstContent={
                            <img src={avatar || '/storage/avatars/avatar.png'} alt={bname || 'My Image'} className="h-full w-full object-cover" />
                        }
                        secondContent={
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'grid',
                                    placeItems: 'center',
                                    backgroundColor: '#111',
                                }}
                            >
                                <p style={{ fontWeight: 900, fontSize: '3rem', color: '#ffffff' }}>{bname} </p>
                            </div>
                        }
                        gridSize={12}
                        pixelColor="#ffffff"
                        animationStepDuration={0.4}
                        className="custom-pixel-card flex-1/2"
                    />
                    <ShinyText
                        text={
                            description ||
                            'I am a passionate creator dedicated to building meaningful connections through innovative design and storytelling. My mission is to transform ideas into engaging experiences that resonate with people.'
                        }
                        disabled={false}
                        speed={3}
                        className="custom-class flex-1/2 text-2xl font-bold"
                    />
                </div>

                <div className="my-15 text-sm">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                    >
                        {` My Skills`}
                    </ScrollFloat>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex-1/2">
                        <ShinyText
                            text={
                                bio ||
                                'I am a passionate creator dedicated to building meaningful connections through innovative design and storytelling. My mission is to transform ideas into engaging experiences that resonate with people.'
                            }
                            disabled={false}
                            speed={3}
                            className="custom-class text-2xl font-bold"
                        />
                    </div>
                    <div className="flex-1/2">
                        <AnimatedList
                            items={skills}
                            onItemSelect={(skill, index) => console.log(skill, index)}
                            showGradients={true}
                            enableArrowNavigation={true}
                            displayScrollbar={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
