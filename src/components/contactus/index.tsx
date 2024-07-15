import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm, Form } from "react-hook-form";
import HText from "@/shared/HText";
import ContactUsGraphic from '@/assets/ContactUsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

interface FormInputs {
    name: string;
    email: string;
    message: string;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const { register, reset, trigger, control, formState: { errors }} = useForm<FormInputs>();
    const formAction = import.meta.env.VITE_FORM_ACTION;
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300
        px-5 py-3 placeholder-white`;
    const errorStyle = ' text-primary-500';

    const onSubmit = async(e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
        alert('Thank you for your message. We will get back to you shortly.')
        setTimeout(() => {
            reset()
        }, 1000)
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>    
                {/* HEADER */}
                <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }} >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Transform your fitness journey with us! Our state-of-the-art facilities, expert trainers, and diverse class 
                        offerings provide everything you need to reach your goals. Take the first step towards a healthier, stronger you and become part of our supportive community today.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }} > 
                        <Form onSubmit={onSubmit} method="post" action={formAction} control={control}
                        onError={() => alert('Sending your message failed. Please try again.')}>
                            <input className={`${inputStyles} -mt-5`} type="text" placeholder="NAME" {...register('name', {required: true, maxLength: 100})} />
                                {errors.name && (
                                    <p className={errorStyle}>
                                        {errors.name.type === 'required' && 'This field is required.'}
                                        {errors.name.type === 'maxLength' && 'This field should not exceed 100 characters.'}
                                    </p>
                                )}

                            <input className={inputStyles} type="email" placeholder="EMAIL"
                            {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} /> 
                                { errors.email && (
                                    <p className={errorStyle}>
                                        {errors.email.type === 'required' && 'This field is required.'}
                                        {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )}
                            
                            <textarea className={inputStyles} placeholder="MESSAGE" rows={2} cols={50} 
                            {...register('message', { required: true, maxLength: 2000})} />
                                {errors.message && (
                                    <p className={errorStyle}>
                                        {errors.message.type === 'required' && 'This field is required.'}
                                        {errors.message.type === 'maxLength' && 'This field has a maximum of 2000 characters.'}
                                    </p>
                                )}
                            
                            <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
                        </Form>
                    </motion.div>


                <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
                }}>     
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                        <img className="w-full" alt="contact-us-page-graphic" src={ContactUsGraphic} />
                    </div>     
                </motion.div>

                </div>     

            </motion.div>
        </section>
    )
}

export default ContactUs