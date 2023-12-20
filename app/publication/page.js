import React from 'react'

const content = [
  {
    year: '2023',
    publications: [
      {
        index: 14,
        journal:
          'ST Rocha, DD Shah, Q Zhu, A Shrivastava. The prevalence of motility within the human oral microbiota. bioRxiv, 2023.07. 17.549387'
      },
      {
        index: 13,
        journal:
          'NK Ratheesh, AM Zdimal, CA Calderon, A Shrivastava. Bacterial swarm-mediated phage transportation disrupts a biofilm inherently protected from phage penetration. Microbiology Spectrum, e00937-23'
      }
    ]
  },
  {
    year: '2022',
    publications: [
      {
        index: 12,
        journal:
          'Trivedi A., Gosai J., Nakane D., Shrivastava A. Design principles of the rotary type 9 secretion system. Frontiers in Microbiology. DOI: 10.3389/fmicb.2022.845563'
      }
    ]
  },
  {
    year: '2020',
    publications: [
      {
        index: 11,
        journal:
          'Shrivastava A. and Berg H. C. A molecular rack and pinion actuates a cell-surface adhesin and enables bacterial gliding motility. Science Advances, 2020, 6 (10) eaay6616.'
      }
    ]
  },
  {
    year: '2018-2019',
    publications: [
      {
        index: 10,
        journal:
          'Shrivastava A**., Patel V., Tang Y., Yost S.C., Dewhirst F.E., and Berg H.C**. Cargo transport shapes the spatial organization of a microbial community. Proc Natl Acad Sci, 2018. August 115(34) 8633-8638. Featured by NIH-NIDCR News & Harvard MCB News. ** Corresponding Authors.'
      },
      {
        index: 9,
        journal:
          'Johnston J.J.*, Shrivastava A.*, and McBride M.J. Untangling Flavobacterium johnsoniae gliding motility and protein secretion.   Journal of Bacteriology. 2018 January 200, no.2 e00362-17.    * Equal Contribution.'
      }
    ]
  },
  {
    year: '2016-2017',
    publications: [
      {
        index: 8,
        journal:
          'Shrivastava A.**, Roland T., Berg H. C.** The screw-like movement of a gliding bacterium is powered by spiral motion of a cell-surface adhesin.   Biophysical Journal. 2016 September, 111(5): 1008-13.  Featured on the Cover of Biophysical Journal. Featured by: Microbial Sciences Initiative (MSI) News. ** Corresponding Authors.'
      },
      {
        index: 7,
        journal:
          'Lele P. P., Roland T., Shrivastava A., Chen Y and Berg H. C. The flagellar motor of Caulobacter crescentusgenerates more torque when a cell swims backwards.   Nature Physics. 2016 February; 12(2): 175-178.'
      }
    ]
  },
  {
    year: '2014-2015',
    publications: [
      {
        index: 6,
        journal:
          'Shrivastava A., and Berg H. C. Towards a model for Flavobacterium gliding.  Current Opinions in Microbiology. 2015 October, 28: 93-97.'
      },
      {
        index: 5,
        journal:
          'Lele P. P., Shrivastava A., Roland T and Berg H. C. Response thresholds in bacterial chemotaxis. Science Advances. 2015 October; 1(9) e1500299.'
      },
      {
        index: 4,
        journal:
          'Shrivastava A., Lele P. P. and Berg H. C. A rotary motor drives Flavobacterium gliding.  Current Biology, 2015 February; 25(3): 338-341. Featured by: Harvard Gazette.'
      }
    ]
  },
  {
    year: '2010-2013',
    publications: [
      {
        index: 3,
        journal:
          'Shrivastava A., Johnston J. J., van Baaren J. M. and McBride M. J. Flavobacterium johnsoniae GldK, GldL, GldM, and SprA are required for secretion of the cell-surface gliding motility adhesins SprB and RemA.  Journal of Bacteriology, 2013 July; 195(14): 3201-3212'
      },
      {
        index: 2,
        journal:
          'Shrivastava A., Rhodes R. G., Nakane D, Pochiraju S and McBride M. J. Flavobacterium johnsoniae RemA is a mobile cell surface lectin involved in gliding. Journal of Bacteriology, 2012 Jul; 194(14):3678-88.'
      },
      {
        index: 1,
        journal:
          'Rhodes R.G., Samarasan M.N., Shrivastava A., van Barren J. M., Pochiraju S, Bolampalli S and McBride M. J. Flavobacterium johnsoniae gldN and gldO are partially redundant genes required for gliding motility and surface localization of SprB. Journal of Bacteriology, 2010 Mar; 192(5):1201-11'
      }
    ]
  }
]

function PublicationComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-publication-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center relative hero'>
      <h1 className='text-7xl font-serif text-white'>Publications</h1>
    </div>
  )

  const renderContent = () => (
    <div className='px-80 py-10 font-serif'>
      <p className='text-xl text-custom-red my-5'>
        Google Scholar{' '}
        <a href='https://scholar.google.com/citations?user=0nHQjzwAAAAJ&hl=en' className='underline font-bold'>
          link
        </a>
      </p>
      {content.map((item, index) => (
        <div key={index}>
          <h1 className='text-xl font-sans text-custom-red'>{item.year}</h1>
          <div className='pl-16 py-4'>
            {item.publications.map((publication, index) => (
              <div key={index} className='py-4'>
                <h1 className='text-base font-serif'>
                  {publication.index}.&ensp;{publication.journal}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default PublicationComponent
