import React from 'react';
import CircleImageText from './CircleImageText';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <div>
        <CircleImageText 
            imageSrc = "home_images/headshot.jpg"
            imageAlt = "Headshot of Julia Sangster"
            text = {<div>
                    <h1>Hi! I'm Julia Sangster</h1>
                    <p>Welcome to my personal website!</p>
                </div>}
            position ="left"/>
        <Card className="mb-4">
          <Card.Header style={{ backgroundColor: '#007200', color: 'white' }}>
            My Story
          </Card.Header>
          <Card.Body>
            <p>I am originally from London, Ontario, but over the past eight years, I've called Waterloo, Toronto, and now Vancouver home.</p>
            <p>I'm wrapping up my Bachelor of Computer Science at UBC, building on a BSc in Biochemistry from the University of Waterloo. From molecules to machines, I've always loved diving into complex systems—and finding elegant ways to make them work.</p>
            <p>I'm currently looking for a full-time role that's a good fit for a new grad—somewhere I can learn, build, and contribute meaningfully from day one.</p>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header style={{ backgroundColor: '#007200', color: 'white' }}>
            Work Experience
          </Card.Header>
          <Card.Body style={{ textAlign: 'left' }}>
          <CircleImageText 
            imageSrc = "home_images/artium.jpg"
            imageAlt = "Atrial Map"
            text = {<div>
                    <h3> Biomedical Algorithms Engineering Co-op </h3>
                    <h5> Kardium Inc - Jan-Aug 2024</h5>
                    <p> I worked within the Cardiac Mapping team, which is responsible for R&D for the 
                        Globe Pulsed Field System's computer vision algorithms. This medical device is used
                        during heart surgeries to map and correct heart rhythyms with albation. 
                    </p>
                    <ul>
                        <li> Independently developed 3 desktop applications for post-operative review of 3D cardiac mapping data, 
                             enabling system engineers and clinicians to assess performance of computer vision algorithms via real-time cardiac map reconstruction.</li>
                        <li> Improved data pipelines for processing Java log files from surgical instrument controllers, into MATLAB/Python compatible data frames 
                            (e.g. NumPy, pandas), improving data accessibility and speed of conversion.</li>
                        <li>Followed Agile principles with ticketing, code reviews and daily stand-ups, ensuring code quality and consistent velocity</li>
                    </ul>
                </div>}
            position ="left"/>

            <CircleImageText 
                imageSrc = "home_images/crystals.jpg"
                imageAlt = "Protein Crystals"
                text = {<div>
                        <h3> Research Mentee - Department of Biology </h3>
                        <h5> University of Waterloo - May-Dec 2021</h5>
                        <p> I worked within the Dixon Research Group, which studies the immune system of salmonid fish. Their research is mainly funded
                            by the MICCSA grant, which aims to combat climate-change caused issues in salmnoid aquaculture I began in the group 
                            as an honours thesis student, and continued working there for 8 months after my graduation.
                        </p>
                        <ul>
                            <li> Led a research project to study the antioxidant protein peroxiredoxin-6 in rainbow trout. I developed methods to purify recombinant Prdx6, study the regulation
                                of the prdx6 gene via PCR, and induce hypoxic conditions in salmonid cell culture to conduct experiments.
                            </li>
                            <li> I helped to design recombinant proteins and purify said proteins from transfected E.coli. This involved many column-based methods, including
                                IEX, IMAC via His tags, and SEC. These were done for the purpose of protein crystallography</li>
                            <li>Successfully crystalized CIRBP (image to the left), which led to this crystal being sent to Boston for X-Ray crystallography</li>
                        </ul>
                    </div>}
            position ="left"/>

            
            <CircleImageText 
                imageSrc = "home_images/admare_bioinnovations_logo.jpg"
                imageAlt = "AdMare Logo"
                text = {<div>
                        <h3> Biologics Co-op Student </h3>
                        <h5> AdMare Bioinnovations - Jan-Apr 2020</h5>
                        <p> AdMare Bioinnovations is a Canadian pharmaceutical incubator, which helps Canadian academics to convert their 
                            life-sciences research into marketable pharmaceutical products. I worked within the Biologics department, working on antibody-based cancer drugs
                            
                        </p>
                        <ul>
                            <li> Maintained mammalian cell lines; included passaging of cell lines as well as development of SOP to develop spheroids for in vitro testing of therapeutics 
                            </li>
                            <li>Validated antibody properties through various assay, including fluorophore-based internalization (flow cytometry), affinity/epitope binning, specificity, and EC-50 (ELISAs)</li>
                        </ul>
                    </div>}
            position ="left"/>

            <CircleImageText 
                imageSrc = "home_images/sickkids_logo.jpg"
                imageAlt = "SickKids Logo"
                text = {<div>
                        <h3> Genomics Research Student </h3>
                        <h5> Hospital for Sick Children Toronto - Sept 2018 - Aug 2019</h5>
                        <p>Worked in the academic research group of Dr. Stephen Scherer, embedded within The Centre for Applied Genomics (TCAG) at SickKids Toronto. 
                            This group has a major focus on the genetics and genomics of autism spectrum disorder (ASD) and related neurodevelopmental conditions,
                             grounded in previous work on genome-wide copy number variation. 
                        </p>
                        <ul>
                            <li> Validating SNP discoveries made via high-throughput genomics approaches via PCR amplification and Sanger sequencing. Involved designing primers and optimizing PCR conditions.
                            </li>
                            <li>alidating CNV discoveries from whole-genome sequencing data via qPCR TaqMan assays</li>
                            <li> Characterized gene expression of a mouse gene (Ptchd1-as) and validated novel isoforms for Ptchd1-as via ddPCR</li>
                            <li>Exposure to mammalian cell culture and iPSC culture and differentiation</li>
                        </ul>
                    </div>}
            position ="left"/>
          </Card.Body>
          Please see my full resume under Contact!
        </Card>

        
    </div>
  );
}