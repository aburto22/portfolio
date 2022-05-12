import React from 'react';
import Image from 'next/image';
import SubHeading from '../sub_heading';
import Text from '../text';
import BackHomeArrow from '../back_home_arrow';
import styles from './styles.module.scss';

export default function About() {
  return (
    <div className="dark:bg-gray-dark-bg flex min-h-full-nav-footer mt-20 justify-center">
      <main className="relative px-4 pt-4 flex flex-col pb-40 md:ml-side-nav-w">
        <div className="max-w-screen-md mx-auto pt-4">
          <BackHomeArrow />
          <h1 className="text-3xl text-center mt-8 mb-8">
            A little bit more about me
          </h1>
          <div className="mx-auto flex flex-col justify-center sm:flex-row p-4">
            <div className="max-w-screen-sm shadow dark:shadow-dark mb-6 w-full relative">
              <Image
                src="/images/about-me.jpg"
                alt="Myself standing in a look-out point with our touring bikes and with mountains behind"
                layout="fill"
              />
            </div>
          </div>
          <div className="mb-8">
            <Text>
              Thanks for wanting to know a little bit about me! In here, I will
              give an overview of my studies and professional experience, and
              how I ended up being a full-stack web-developer.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>Studies</SubHeading>
            <span id="studies" className="absolute -top-24 w-0 h-0" />
            <Text>
              Born in Chile, I completed a bachelor in Civil Engineering and a
              master (Professional Degree) of Project Management and Structural
              Engineering at Universidad de Chile, in Santiago. During my
              studies, I had the chance to participate in a Dual Degree Program
              at Ecole Centrale de Nantes, in France, where I obtained a master
              of engineering.
            </Text>
            <Text>
              During my studies, I gained a bit of exposure to coding,
              particularly C and Java. Apart from technical knowledge, I learned
              logical thinking and analytical problem-solving skills, which I
              have successfully applied in various projects to resolve
              challenging problems and find suitable solutions.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>Work experience</SubHeading>
            <span id="work" className="absolute -top-24 w-0 h-0" />
            <Text>
              I started my professional career working in Client-Side Project
              Management at CBRE, Australia. During my time with CBRE, I started
              assisting two senior project managers in delivering a wide range
              of projects.
            </Text>
            <Text>
              With time, I started getting more comfortable and gaining more
              exposure, which allowed me to grow immensely. I honed my time
              management skills and understood the importance of constantly
              identifying priorities in order to keep all projects progressing
              at the same time. I also learned and believe in effective
              communication and trust as the base for successful team work.
            </Text>
            <Text>
              I managed projects and lead project teams through the whole life
              cycle of a project, and delivered projects using different
              delivery strategies. I assessed each project requirements to
              ensure the right decisions were made in order to meet all client
              requirements.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>Some time off</SubHeading>
            <span id="time-off" className="absolute -top-24 w-0 h-0" />
            <Text>
              During 2020 and 2021, I decided to take some time off and explore
              new places. Being out of work gave me time to think about myself,
              and what I wanted to do in the future. I remembered how much I
              liked coding at university, and decided to look more into that
              once our trip ended. The more and more I thought about it, the
              more I started to realize that coding responded best to my
              personality and interests.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>My coding journey</SubHeading>
            <span id="coding" className="absolute -top-24 w-0 h-0" />
            <Text>
              After a lot of research about coding and web development, I
              realized I needed a plan. I needed to find a place to learn, and
              just dive straight into it. At one point, I found out about
              freeCodeCamp, which looked like the place I was looking for, so I
              decided to commit to it. I complete their curriculum, which gave
              me the foundation to become a Full Stack Developer working with a
              MERN (Mongo, Express, React and Node) stack.
            </Text>
            <Text>
              As this was a more practical cursus, I decided to complemented it
              with in-depth information and tutorials from MDN and w3schools.
              This gave me a good technical foundation and taught me how to set
              up my working environment with Visual Studio Code and Git-Hub,
              which I have been using since then. I have also completed
              Introduction to Computer Science by Harvard X.
            </Text>
            <Text>
              Later, I was selected to attend a bootcamp by &lt;Salt/&gt;, which
              I completed in Apr 2022. There, I studied and worked for three
              months in mobs, which means only one keyboard and screen per
              group! This allowed me to improve my team work skills, how to
              communicate my ideas clearly, and taugh me how to program and
              develop app as a group.
            </Text>
            <Text>
              What I really love about code is its approach. How a complex and
              challenging project can be tackled by putting them apart and then
              solving each individual piece. I think this is an approach worth
              applying to every aspect of our lives.
            </Text>
            <Text>
              I also admire perfect and clever code. How everything has to be
              right for a program to work, but there is still enough flexibility
              to solve a problem in different ways. Finally, I enjoy how many
              different things can created by coding, and that imagination and
              creativity is the only limit.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>What about now?</SubHeading>
            <span id="now" className="absolute -top-24 w-0 h-0" />
            <Text>
              Right now, as always, I keep learning! I still build apps in
              JavaScript, and I am trying the latest and newest out there. I
              have also started experimenting with Python, and how to integrate
              together with a JavaScript app.
            </Text>
          </div>
          <div className="mb-8 relative">
            <SubHeading>Apart from coding</SubHeading>
            <span id="apart" className="absolute -top-24 w-0 h-0" />
            <Text>
              When I am not coding, I am usually in the nature somewhere. I
              really love a walk in the forest, where I can find silence and
              peace, everything I need to gain perspective and focus. I also
              enjoy photography, so every time I go out in the woods, I never
              forget to bring my camera along with me.
            </Text>
            <Text>
              I also enjoy cycling and running. I try to run a couple of times
              each week, and go for a good ride on weekends. I also love
              cyclo-touring, which is where I can combine nature, photography
              and cycling, all together! In 2020 and 2021, my wife and I did two
              amazing trips in Canada, where we discovered the provinces of
              Quebec, Alberta and British Columbia, all by bike!
            </Text>
          </div>
          <div className="my-12">
            <BackHomeArrow />
          </div>
        </div>
      </main>
    </div>
  );
}
