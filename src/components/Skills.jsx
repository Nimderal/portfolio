import { FaHtml5 } from "react-icons/fa6";
import { FaCss3, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Heres a list of technologies Ive worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center '>
                  <p className='my-2'><FaHtml5 className="text-5xl"/>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'><FaCss3 className="text-5xl"/>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'><IoLogoJavascript className="text-5xl" />JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'> <SiTypescript className="text-5xl"/>TYPESCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'><FaReact className="text-5xl"/>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'><FaGithub className="text-5xl"/> GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
                  <p className='my-4'><RiTailwindCssFill className="text-5xl"/> TAILWIND</p>
              </div>


              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center justify-center'>
    <p className='my-4'><FaWordpress className="text-5xl"/> WORDPRESS</p>
</div>
          </div>
      </div>
    </div>
  );
};
export default Skills;