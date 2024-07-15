import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { ClassType } from '@/shared/types';
import Class from './Class';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';

const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description: "Our weight training classes focus on building strength, increasing muscle tone, and improving overall fitness. Led by experienced instructors, these sessions cater to all fitness levels, offering personalized guidance and support. ",
      image: image1,
    },
    {
      name: "Yoga Classes",
      description: "We offer a serene environment to enhance flexibility, strength, and mental clarity. Suitable for all levels, these sessions combine breathing techniques with poses to promote relaxation, reduce stress, and improve overall well-being. Join us to rejuvenate mind and body.",
      image: image2,
    },
    {
      name: "Ab Core Classes",
      description: "Focused on strengthening and toning your midsection. These high-energy sessions target abdominal muscles through a variety of exercises designed to improve core stability and endurance. Suitable for all levels, you'll build a strong, sculpted core and enhance overall fitness. ",
      image: image3,
    },
    {
      name: "Adventure Classes",
      description: "Our Adventure Classes offer dynamic workouts that blend fitness with fun. Experience outdoor activities, obstacle courses, and team challenges designed to boost endurance, strength, and camaraderie. Suitable for all fitness levels.",
      image: image4,
    },
    {
      name: "Fitness Classes",
      description: "Our fitness classes provide diverse workouts to enhance strength, flexibility, and endurance. Led by expert instructors, they cater to all levels, ensuring effective and enjoyable sessions.",
      image: image5,
    },
    {
      name: "Training Classes",
      description: "Our training classes offer a variety of workouts designed to improve strength, flexibility, and endurance. Led by professional trainers, these sessions are tailored for all fitness levels, ensuring personalized guidance and support for optimal results and enjoyment.",
      image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} >
                <motion.div className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }} >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                    />
                    ))}
                </ul>
                </div>
      </motion.div>
    </section>
  )
}

export default OurClasses