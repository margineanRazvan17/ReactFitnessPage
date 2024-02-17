import React from 'react';
import { Link } from 'react-router-dom';
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon 
} from "@heroicons/react/24/solid"

// Definirea imaginii pentru fundal
//const backgroundImage = "bjj.jpg";

const About = () => {
    const benefits = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "State of the Art facilities",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "100 facilities",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert and Pro Trainers",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ];

    return (
        <div className='bg-purple-100 bg-opacity-70 font-mono font-bold' >
            <section className=' mx-auto min-h-full w-5/6 py-20 ' >
                <div className="md:my-5 md:w-3/5">
                    <h1 className="font-montserrat text-3xl font-bold gap-16 py-4">
                        MORE THAN JUST
                        <span className="text-purple-500"> SPORT</span>
                    </h1>
                    <p className="my-4 text-sm">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div id="elemente" className=' items-center justify-between gap-8 md:flex'>
                    {/* Afișează beneficiile în interiorul div-ului */}
                    {benefits.map((benefit, index) => (
                        <div key={index} className='mt-5 rounded-md border-2 border-gray-900 px-5 py-16 text-center shadow-2xl'>
                            <div className='mb-4 flex justify-center rounded-full border-2 border-gray-900 bg-primary-100 p-4 shadow-2xl'>
                                {benefit.icon}
                            </div>
                        
                            <h4 className='font-bold text-purple-900'>{benefit.title}</h4>
                            <p className='my-3'>{benefit.description}</p>
                            <Link to="/antrenamente" className='text-sm font-bold text-purple-900 underline hover:text-red-300'>Learn More</Link>  {/*editat css-u*/}           
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;



//<h2 className='mt-16 my-5 py-2 text-sm '>Adauga OurClasses si Benefits</h2>
//<Link to='/login'  className="rounded-md bg-purple-600 px-10 py-2 hover:bg-purple-300 hover:text-white">Back Home</Link>  