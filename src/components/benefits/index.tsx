import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import { BenefitType } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Advanced equipment, luxurious locker rooms, wellness technology, dedicated training zones, recovery areas, and eco-friendly, sustainable design.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Yoga to HIIT, tailored classes for all fitness levels and interests, ensuring variety and engagement.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Certified trainers offer personalized guidance, innovative techniques, and motivational support for optimal fitness results.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSlectedPage: ( value: SelectedPage ) => void;
}

const Benefits = ({setSlectedPage}: Props) => {
  return (
      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
          <motion.div onViewportEnter={() => setSlectedPage(SelectedPage.Benefits)}>
              
              {/* HEADER */}
              <motion.div  className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                  <HText>MORE THAN JUST A GYM.</HText>
                  <p>We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                  </p>
              </motion.div>

              {/* BENEFITS */}
              <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={container}>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                          key={benefit.title}
                          icon={benefit.icon}
                          title={benefit.title}
                          description={benefit.description}
                          setSelectedPage={setSlectedPage}
                        />
                    ))}
              </motion.div>

              {/* GRAPHICS AND DESCRIPTION */}
              <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                  <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>

                  {/* DESCRIPTION */}
                  <div>
                      {/* TITLE */}
                      <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                            }}>
                              <HText>
                                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                  <span className="text-primary-500">FIT</span>
                              </HText>
                          </motion.div>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                          }}>
                            <p className="my-5">
                                Getting fit involves a balanced mix of regular exercise, proper nutrition, and adequate rest. It boosts energy, 
                                improves mental health, and enhances overall well-being. Commit to a consistent routine, set realistic goals, and stay 
                                motivated. Enjoy the journey towards a healthier, stronger, and more vibrant you.
                            </p>
                            <p className="mb-5">
                                Fitness isn't just about physical transformation; it's a lifestyle that fosters discipline and resilience. 
                                By prioritizing self-care through exercise, nutritious eating, and sufficient rest, you cultivate habits that sustain long-term health. 
                                Embrace the process as a journey of self-discovery and empowerment, celebrating each milestone along the way.
                            </p>
                        </motion.div>
                    
                    {/* BUTTON */}
                    <div className="relative mt-16">
                      <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSlectedPage}>
                          Join Now
                        </ActionButton>
                      </div>
                    </div>

                  </div>
              </div>
          </motion.div>
      </section>
  )
}

export default Benefits;