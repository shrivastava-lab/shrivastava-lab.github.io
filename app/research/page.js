import React from 'react'

const content = {
  main_headline:
    'The research in our lab ranges from exploring bacterial cell biology to investigating how oral and gut microbiomes influence human health',
  projects: [
    {
      headline: 'Project 1. Unraveling the hidden role of T9SS secretome towards health',
      content: [
        'We are performing  in-vitro and animal experiments to understand how the secretome of a recently discovered biological machinery known as the Type 9 Secretion System (T9SS) impacts host health.',
        'T9SS is responsible for secreting over 200,000 distinct bacterial proteins and powering Bacteroidetes gliding motility. The function most of these proteins remains unknown. T9SS is the secretion system of bacteria belonging to the Bacteroidetes phylum, many of which are found in diverse environments like the human gut and oral microbiomes, plant rhizosphere, and aquatic settings. T9SS has known roles in improving bacterial colonization and biofilm formation. But the role of most T9SS-secreted proteins is still unknown.',
        'While there is a lot that still needs to be learnt, some examples  where T9SS is known to influence human health are below.',
        "Dominy et al. (%%0%%)  demonstrated that in the human oral microbiome, T9SS enables secretion of proteases that break down human tissue and enhance Periodontitis. These proteases of bacterial origin are found in the post-mortem brain of Alzheimer's patients and they are thought to increase the progession of nuerodegenerative diseases.",
        'Li et al. (%%1%%) showed that a protein produced by T9SS of a human gut microbe sequesters Trypsin and initiates its autodegradation. This in turn, increases IgA, boosts host immunity, and provides protection from pathogen infection. Specifically, this was associated with reduced severity of diarrhoea in Covid-19 patients.'
      ],
      links: [
        {
          text: 'Science Advances, 2019',
          link: 'https://advances.sciencemag.org/content/5/1/eaau3333'
        },
        {
          text: 'Nature, 2022',
          link: 'https://www.nature.com/articles/s41586-021-04364-1'
        }
      ]
    },
    {
      headline: 'Project 2. What controls the directionality of T9SS rotation?',
      content: [
        'Bacteria that swim are driven forward by helical filaments that rotate like propellers. The number and location of filaments vary among different bacteria, yet the core mechanism remains the same. In contrast, motile but non-swimming bacteria do not have propellers, yet they achieve efficient self- propulsion over surfaces. Such movement is divided into two categories: (i) twitching and (ii) gliding. Twitching involves the extension and retraction of type IV pili and gliding involves movement of cell-surface adhesins along the length of a cell.',
        'Bacteria of the phyla Bacteroidetes are found in the human oral and gut microbiome, lakes, oceans, and the plant rhizosphere. Some human-associated Bacteroidetes have the ability to glide. We found that gliding bacteria have a novel rotary motor that generates high torque (Shrivastava et al. Curr. Biol. 2015). Tethered cells pinwheel around a fixed axis (Movie 3). This work expanded the catalog of biological rotary motors, which now includes three motors: the Fo ATP synthase, the bacterial flagellar motor, and the gliding motor.',
        'We are actively investigating the molecular mechanism by which the direction of  T9SS is controlled. Our lab takes a biophysical, genetic, and biochemical approach which is supported by Molecular Dynamics simulations from the Singharoy lab at ASU and Cryo-ET by the Kaplan group at University of Chicago.'
      ]
    },
    {
      headline: 'Project 3. The controllers of biofilm formation by Bacteroidetes',
      content: [
        "How a rod-shaped bacterial cell moves over and colonize a surface is a question that has fascinated biologists and physicists for a long time. Bacteria live in the low Reynolds number regime hence they must encounter negligible inertia. In order to move in a particular direction, gliding bacterial cell must generate force. Gliding bacteria have a cell-surface adhesin SprB, which is known to move along the length of a cell. We cross-linked a gold nanoparticle to SprB, imaged it's motion in 3D space and found that SprB moves in a spiral fashion. Using experimental and theoretical tools, we found that a gliding bacterium works as a self-propelled screw, with a cell-surface adhesin moving along its external threads (Shrivastava et al., Biophysical J., 2016).",
        'Current projects are aimed at finding sensory transuction proteins and chemical triggers that cause  bacteria to shift from motile to biofilm forming state.'
      ]
    },
    {
      headline: 'Project 4. Design principles of the microbiome',
      content: [
        'The human microbiome is an assemblage of diverse bacteria that interact with one another to design a community. Rapid availability of nutrition and protection from antibiotics are some advantages of a specific spatial niche within a microbial community. The mechanisms that drive microbial interactions and guide the architecture of microbial communities are unclear. ',
        'To learn more about collective behavior, we investigated the swarm properties of gliding bacteria from the human oral microbiome and their relevance on the spatial organization of polymicrobial communities. We found that cells of non-motile bacterial species from the human oral microbiome attached to gliding bacteria. The non-motile bacteria were  propelled as cargo along the length of a gliding cell. The cargo looped from one pole to the other of the motile gliding cell. A lectin domain containing motile cell-surface adhesin SprB keeps the cargo attached to the transporter.',
        'Multi-color fluorescent spectral imaging of cells of seven different live but non-motile bacterial species that are abundant in the human oral microbiome revealed their long-range transport in a polymicrobial community by a swarm of gliding bacteria. The swarms moved in a circular fashion in the 2D plane and are layered on top of one other in 3D space. We found that the synchronized public transportation of non-motile cargo bacteria helps shape a microbial community (Shrivastava et al PNAS, 2018).'
      ]
    },
    {
      headline: 'Project 5. How does the microbiome influence host behavior and cancer progression?',
      content: [
        'We have couple collaborative projects with the Shah lab at ASU where we investigate the enzymes and metabolites produced by gut microbes and their role on cognition. Some of these are known to cause neurodegenerative diseases as well. Pavani and Aishwarya are the two joint PhD students currently spearheading the projects.',
        'In another collaboration with the Khashayarsha lab at Mayo Clinic, we are investigating how and why some oral microbes attach to polyps formed in murine models of colorectal cancer.'
      ]
    }
  ],
  funding: ['We are funded by an NIH-NIGMS MIRA award, an NIH-NIDCR R00 award, and Scialog awards from RCSA.']
}

function ResearchComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-research-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='text-7xl font-serif text-white'>Research</h1>
    </div>
  )

  const renderLinksInParagraph = (paragraph, project_index) => {
    if (!paragraph.includes('%%')) return paragraph

    const splitParagraph = paragraph.split('%%')
    return splitParagraph.map((para_text, index) => {
      if (index % 2 == 0) return para_text

      const link_index = parseInt(para_text)
      const { text = 'NA', link = 'NA' } = content.projects[project_index].links[link_index]
      return (
        <a key='link' href={link} className='text-red-800 underline'>
          {text}
        </a>
      )
    })
  }

  const renderFunding = () => (
    <>
      <p className='text-xl text-red-800 font-bold'>Funding</p>
      <div className='py-5'>
        {content.funding.map((paragraph, index) => (
          <p key={index} className='py-2'>
            {paragraph}
          </p>
        ))}
      </div>
    </>
  )

  const renderContent = () => (
    <div className='px-80 py-10 font-serif text-center'>
      <p className='text-xl text-red-800 font-bold'>{content.main_headline}</p>
      {content.projects.map((project, project_index) => (
        <div key={project_index} className='py-10'>
          <p className='text-base font-bold text-red-800'>{project.headline}</p>
          <div className='py-5'>
            {project.content.map((paragraph, index) => (
              <p key={index} className='py-2'>
                {renderLinksInParagraph(paragraph, project_index)}
              </p>
            ))}
          </div>
          <hr className='w-72 h-1 mx-auto my-4 bg-gray-200 border-0 rounded border-dashed' />
        </div>
      ))}
      {renderFunding()}
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default ResearchComponent
