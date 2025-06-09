import ScrollFloat from '@/components/ui/scroll-reveal';

interface FitnessProps {
    bio?: string;
    avatar?: string;
    bname?: string;
    slogan?: string;
    description?: string;
    skills?: string[];
    color?: string;
}

export default function About2({ bio, bname, avatar, skills, slogan, description, color }: FitnessProps) {
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
                <div className="text-sm">
                    <p>
                        When does a man die? When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a poisonous
                        mushroom? No! A man dies when he is forgotten!
                    </p>
                </div>
            </div>
        </div>
    );
}
