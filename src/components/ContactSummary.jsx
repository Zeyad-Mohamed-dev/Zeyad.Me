import Marquee from './Marquee'

function ContactSummary() {

  return (
    <section 
    className='flex flex-col min-h-screen items-center justify-between mt-12'>
        <div className='text-center overflow-hidden w-full font-light contact-text-responsive'>
          <div className='w-full mb-4'>
            <Marquee items={["Scalable Architecture", "Clean Code", "Dry Principle", "TDD", "Responsive Design", "Optimization", "Refactoring", "Agile Methodology"]}/>
          </div>
          <p className='text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight text-center tracking-tight max-w-3xl mx-auto text-gray-600 pb-3'>
            "Lets build<br/>
            something great <span className='text-indigo-400 font-medium'>&</span> inspiring together."
          </p>
          
          
        </div>
    </section>
  )
}

export default ContactSummary