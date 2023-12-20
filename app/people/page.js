import React from 'react'
import Image from 'next/image'
import Abhishek_sh from '../../public/images/Abhishek Shrivastava.png'
import Jitendra from '../../public/images/Jitendra Gosai.png'
import Abhishek from '../../public/images/Abhishek Trivedi.png'
import Amanda from '../../public/images/Amanda Zdimal.png'
import Emma from '../../public/images/Emma Henderson.png'
import Samyabrata from '../../public/images/Samyabrata Sen.png'
import Sofia from '../../public/images/Sofia Rocha.png'
import Pavani from '../../public/images/Pavani Dadi.png'
import Aishwarya from '../../public/images/Aishwarya Patel.png'
import Arad from '../../public/images/Arad Arasteh.png'
import Taryn from '../../public/images/Taryn Collins.png'
import Riya from '../../public/images/Riya Garg.png'
import Maxim from '../../public/images/Maxim Averbukh.png'
import Kaxandra from '../../public/images/Kaxandra Nessie.png'
import Madeleine from '../../public/images/Madeleine Zheng.png'
import Claudia from '../../public/images/Claudia Brouwer.png'


const content = {
  about: [
    'I develop experimental & computational approaches to solve questions related to the microbiome, biofilms, collective motion, chemotaxis, molecular motors, and protein secretion. During my Postdoctoral training, I became interested in figuring out the factors that shape spatial structure of the human microbiota. We found that motile microbes of the phylum Bacteroidetes that are abundant in the human oral microbiome carry other non-motile bacteria as cargo and shape developing biofilms. Alongside, we also found a molecular rack and pinion machinery that couples with a bacterial Type 9 Secretion System (T9SS) and enables surface navigation.',
    'My lab at Arizona State University combines biology, physics, and computer science to answer curiosity-driven questions that are mostly related to the Microbiome and Microbial systems biology. Many recent reports show that changes in the human microbiome correlate with the occurrence of periodontal disease, oral and colorectal cancers, obesity, diabetes and inflammatory bowel disease (IBD). We aim to find why and how the microbiome correlates with the above diseases and how we can use this information to design therapeutic strategies. On the Microbial Systems Biology front, we are interested in finding the nuts and bolts of a molecular rack and pinion machinery, driven by the T9SS. Please check the research section of this website for detailed information.',
    'In spring, I teach a course titled Programming for Biologists. This course imparts a functional knowledge of Python. In fall, I teach a course titled Biology of microorganisms. Outside the lab, I enjoy tennis, cricket, volleyball, and random walks.'
  ],
  students: {
    'Postdoctoral Fellows': [
      {
        name: 'Jitendra Gosai, PhD',
        about:
          'I am passionate about understanding how bacteria regulate complex physiological traits, especially ones that determine association with hosts. My current research includes understanding the regulation and biophysics of T9SS-mediated gliding motility. I use tools from ranging from bacterial genetics, protein biochemistry, microscopy and computational biology. Outside the lab, I like capturing stories on CMOS sensors.',
        photo: Jitendra
      },
      {
        name: 'Abhishek Trivedi, PhD',
        about:
          'I am interested in learning more about the fundamentals of bacterial locomotion and deciphering the mechanism by which the type 9 secretion system controls gliding. I have a PhD in microbiology, and I am currently broadening my expertise by learning biophysics and computational biology. I am interested in doing fundamental microbiology research in future and I plan to stay in academics. Beside academics, I am interested reading literature, playing table tennis, running and cricket. ',
        photo: Abhishek
      },
      {
        name: 'Amanda Zdimal, PhD',
        about:
          'I am curious about the interactions between bacterial cells, their products, and the underlying mechanisms that influence human health. I aim to characterize spatial and temporal development of polymicrobial communities present in human mouth and gut. Since the oral and gut microbiomes have been implicated in numerous diseases, information regarding the microbial profile and development of community structure may provide new insights into the mechanisms which dictate healthy and disease states in humans.',
        photo: Amanda
      }
    ],
    'PhD students': [
      {
        name: 'Emma Henderson',
        about:'The wide array of microbial communities and the level of complexity to which such small organisms can achieve has always been a fascinating topic to me. During my undergraduate research career at Illinois State University, I focused on the metabolism taking place within Staphylococcal species. I have now transitioned into studying bacterial secretion system machinery, specifically the type  9 secretion system, that certain species utilize in order to carry out functions, like gliding motility. In my free time I enjoy doing puzzles, golfing, and enjoying the Arizona sun!',
        photo: Emma
      },
      {
        name: 'Samyabrata Sen',
        about:'I am deeply intrigued by the mysteries of the microbiome. My expertise spans microbiology, biophysics, biochemistry, molecular biology, and coding. My current focus is on decoding the intricate motion of Flavobacterium johnsoniae. This investigation not only unveils microbial behavior but also offers insights for broader research endeavors. However, in the not-so-distant future, I plan to delve into the T9SS of Bacteroidetes, aiming to comprehend its role within the microbiome and its potential implications for health.',
        photo: Samyabrata
      },
      {
        name: 'Sofia Rocha',
        about:'I am a 2nd year PhD student in Microbiology. For my undergraduate, I studied at ASU with a major in Microbiology with a minor in Spanish. I joined the Shrivastava lab as an undergraduate researcher focusing on the role of motility within the human oral microbiome. My current research focuses on the Type 9 Secretion System and the human microbiome and how they influence each other. I am fascinated by the unseen world and love to look at the world at the microscopic level. My hobbies include hiking and traveling with my dogs and family.',
        photo: Sofia
      },
      {
        name: 'Pavani Dadi',
        about:"I am a second-year Ph.D. student in Dr. Shrivastava's and Dr. Shah's labs, researching gut microbial enzymes and their metabolites influence on human physiology. Currently, we're focused on in-vitro characterization of enzymes from gut Bacteroides. In the future, I plan to explore the genetic manipulation of Bacteroides to study their potential links to neurodegenerative diseases. Outside of research, I enjoy cooking, painting, and drawing.",
        photo: Pavani
      },
      {
        name: 'Aishwarya Patel',
        about:"I am a first-year PhD student working with Dr. Shrivastava and Dr. Shah. I am deeply interested in studying the human gut microbiota and observing their role in the gut-brain axis of the host. Outside the lab, I enjoy reading, hiking, and painting.",
        photo: Aishwarya
      }
    ],
    'Undergraduate Researchers':[
      {
        name: 'Arad Arasteh',
        about:"I am currently a Senior majoring in Biological Sciences (Genetics, Cell, and Developmental Biology). I plan to further my education and pursue a career in medicine. My interests are learning more about and further understanding biofilm formation and human microbiomes. I enjoy watching TV shows and playing soccer during my downtime.",
        photo: Arad
      },
      {
        name: 'Taryn Collins',
        about:"I am studying Molecular Biosciences and Biotechnology. I want to understand life at a molecular level and explain natural phenomena with their molecular functions. I am interested in the genetic role in bacterial motility, especially as seen in biofilms. Outside of school, I enjoy reading, swimming (not at the same time), and playing with my cats.",
        photo: Taryn
      },
      {
        name: 'Riya Garg',
        about:"I am studying Biomedical Sciences with a minor in Spanish. I am interested in learning about how microbial cells influence the overall health of humans. In the future, I hope to become a doctor and explore different parts of the world. In my free time, I enjoy hiking, dancing, spending time with friends and family, and listening to music.",
        photo: Riya
      },
    ],
    'Lab alumni':[
      {
        name: 'Maxim Averbukh',
        about: '',
        photo: Maxim
      },
      {
        name: 'Kaxandra Nessie',
        about: '',
        photo: Kaxandra
      },
      {
        name: 'Madeleine Zheng',
        about: '',
        photo: Madeleine
      },
      {
        name: 'Claudia Brouwer',
        about: '',
        photo: Claudia
      }
    ]
  }
}
function PeopleComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-people-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center relative hero'>
      <h1 className='text-7xl font-serif text-black'>People</h1>
    </div>
  )

  const renderStudentData = (studentType = 'Postdoctoral Fellows') => (
    <div className='mt-10'>
      <p className='text-red-800 font-bold text-xl py-5 underline'>{studentType}</p>
      <div className='flex flex-row items-base justify-normal flex-wrap'>
        {content.students[studentType].map((student, index) => (
          <section key={index} className='basis-1/3 p-5'>
            <Image src={student.photo} alt={student.name} className='w-96 h-96 py-5' />
            <p className='text-red-800 text-lg py-2'>{student.name}</p>
            <p className='px-1'>{student.about}</p>
          </section>
        ))}
      </div>
    </div>
  )

  const renderContent = () => (
    <div className='px-72 py-10 font-serif text-center '>
      <div className='flex flex-row items-center justify-between'>
        <section className='basis-1/3'>
          <Image src={Abhishek_sh} alt='Abhishek sh' className='w-full py-5' />
          <p className='text-red-800 font-bold text-lg py-2'>Abhishek Shrivastava, PhD</p>
          <p className='px-4'>Assistant Professor, Arizona State University (2019 - current)</p>
          <p className='px-4'>Postdoctoral Fellow, Harvard University (2013 - 2019)</p>
        </section>
        <section className='basis-2/3'>
          <div className='px-12'>
            {content.about.map((paragraph, index) => (
              <p key={index} className='py-2'>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </div>
      {renderStudentData('Postdoctoral Fellows')}
      {renderStudentData('PhD students')}
      {renderStudentData('Undergraduate Researchers')}
      {renderStudentData('Lab alumni')}
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default PeopleComponent
