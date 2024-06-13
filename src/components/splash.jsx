import { motion } from 'framer-motion';
const Splash = ()=> {
  return (
    <div id="home" className=" items-center h-full p-10 m-5 justify-center text-center  gap-1 flex flex-col sm:flex-row overflow-hidden  ">
  
 
   
        <motion.div
          initial={{ scale: 4, opacity: 0, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            ease: 'easeInOut',
            type: 'spring',
            duration: 2.2,
            delay: 1.5,
          }}
          className="flex h-full w-full items-center justify-center "
        >
          <img src="/7.png" alt="" className=" w-[650px]" />
        </motion.div>
 
      <div className=" h-full w-full">
        
        <div className="flex flex-col h-full items-center justify-center ">
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-6xl mb-6 font-black italic tracking-widest text-t"
          >
           Hi I'm <span className='text-t text-7xl '>Maryem</span> ,
          </motion.div>
        
       
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-4xl font-black italic ml-[70px] tracking-widest text-white"
          >
           Welcome To My Portfolio
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 1.5,
            }}
            className=" text-sm  italic mt-7  ml-11  text-white"
          >
            
My favorite hobby is drawing and that's why I decided to learn web design. I love looking and digging into trees and the sky and analysis system ,programming too, 
At the end ...just dream and try and go there with all your possibilities
         
          </motion.div>
      
        </div>

      </div>
      
     </div>

  );
}

export default Splash;