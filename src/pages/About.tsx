import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { textConfig } from '../config/text';
import { Helmet } from 'react-helmet-async';

const FAQItem = ({ question, answer }: { question: string | React.ReactNode; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className={`flex justify-between items-center w-full py-4 text-left ${textConfig.text.base} text-blue-900 dark:text-gray-300 ${textConfig.text.size}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium pr-8">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className={`${textConfig.text.base} ${textConfig.text.color} ${textConfig.text.size}`}>{answer}</p>
        </div>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden flex flex-col">
      <Helmet>
        <title>About Me | Nidaa Mungloo</title>
        <meta name="description" content="Software developer from Mauritius, currently based in Berlin. Read about my journey from tropical sunshine to cold U-Bahn mornings." />
      </Helmet>
      <Header />

      <main className="flex-1 pt-32 bg-gradient-to-br from-gray-50 via-gray-100/30 to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white relative">
        {/* Gradient background elements positioned to not interfere with image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-blue-100/10 to-blue-200/20 dark:from-pink-900/20 dark:via-blue-900/30 dark:to-purple-900/20 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-[200px] sm:w-[250px] md:w-[300px] aspect-square bg-gradient-to-r from-cyan-200/15 to-blue-300/15 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[150px] sm:w-[200px] md:w-[250px] aspect-square bg-gradient-to-r from-blue-300/15 to-blue-400/15 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h1 className={`${textConfig.title.base} ${textConfig.title.size} ${textConfig.title.color} mb-5 md:mb-8`}>
              My Story
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/60 dark:via-white/30 to-transparent mx-auto mb-6 md:mb-8"></div>
            <p className={`${textConfig.subtitle.base} hidden md:block text-[1.625rem] text-blue-900 dark:text-gray-300 md:max-w-4xl lg:max-w-5xl mx-auto whitespace-normal md:whitespace-nowrap`}>
              From tropical sunshine to cold U-Bahn mornings – and everything in between.
            </p>
          </div>

          {/* Newspaper-style layout */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-4 md:mt-20">
            <div className="relative">
              {/* Profile Photo Section - Floating left */}
              <div className="float-left mr-6 sm:mr-12 mb-6 md:mb-8 relative z-20">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-gray-200/20 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-800">
                  <img
                    src={`${import.meta.env.BASE_URL}nidaa-new.jpeg`}
                    alt="Nidaa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Short version - Single sentence next to image */}
              <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none">
                <h2 className={`${textConfig.aboutSubtitle.base} ${textConfig.aboutSubtitle.size} ${textConfig.aboutSubtitle.color} mb-3 md:mb-4`}>
                  The Short Version
                </h2>
                <p className={`${textConfig.text.base} text-xl md:text-2xl ${textConfig.text.color} mb-6 md:mb-8`}>
                  I'm a software developer –  originally from <a href="https://mauritiusnow.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Mauritius</a>, I studied and worked in the U.S. for a few years before moving to Berlin, where I'm currently based. I care deeply about blending the law with responsible AI to empower communities.
                </p>
              </div>

              {/* Long Version Section - starts after image */}
              <div className="clear-both mt-8">
                <h2 className={`${textConfig.aboutSubtitle.base} ${textConfig.aboutSubtitle.size} ${textConfig.aboutSubtitle.color} mb-4`}>
                  The Longer Version
                </h2>

                <div className={`${textConfig.text.base} ${textConfig.text.size} text-black dark:text-white space-y-6 leading-relaxed text-left md:text-justify`}>
                  <p>
                    I was born and raised on the beautiful island of Mauritius, where I completed my secondary schooling. I studied the sciences, math, and sociology –  the latter being my favorite subject and still one of my core interests.
                  </p>
                  <p>
                    While preparing for my daunting Cambridge A-Levels, I randomly took the SATs with my best friend. I had no idea where to apply, knew nothing about American geography, and ended up submitting applications to a handful of U.S. colleges. I'd always been drawn to the humanities and once dreamed of becoming an activist lawyer. I was even accepted into an LLB program in the UK –  and very nearly went –  but at the last minute, my life took a surprising plot twist.
                  </p>
                  <p>
                    I was amazed to receive an acceptance and a scholarship to Creighton University:  one of the U.S. colleges I'd applied to on a whim. I'd never heard of Omaha – or Nebraska for that matter – but with my family's encouragement, I took a leap of faith. I was drawn to the liberal arts model, the freedom to explore and change majors, and the post-graduation OPT work option offered to international students in the U.S. So, in late August 2014, I packed my bags and took a three-flight, 36-hour journey to the heart of the Midwest.
                  </p>

                  {/* Second Image - Floating Right */}
                  <div className="float-right ml-6 sm:ml-12 mb-6 md:mb-8 relative z-20">
                    <div className="w-48 sm:w-64 md:w-80 rounded-3xl overflow-hidden border-2 border-gray-200/20 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-800">
                      <a
                        href="https://www.youtube.com/watch?v=nA87sLDH5IU&ab_channel=CityGeek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}omaha.jpg`}
                          alt="Omaha, Nebraska"
                          className="w-full hover:opacity-90 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>

                  <p>
                    Despite the initial culture shock –  and the literal shock of my first freezing Midwestern winter –  I was met with an incredible amount of warmth. Friends, professors, even strangers went out of their way to make me feel at home. At every stage, there were people who had my back, looked out for me, and helped me navigate the maze that is American life. Omaha surprised me –  not just with how cold it got, but also with how kind people could be.
                  </p>
                  <p>
                    I started out dabbling in journalism, but an internship quickly showed me it wasn't the right path for me. Creighton's Journalism <a href="https://www.creighton.edu/arts-sciences/computersciencedesignjournalism" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">department</a> happened to also host the Graphic Design and CS programs, which led me to take a web design class during my sophomore year. I wrote my very first line of code at 20 – and found programming both challenging and invigorating. Around that time, the tech industry was booming – so my eventual decision to double major in Computer Science and Graphic Design, while driven by curiosity, was also partly strategic.
                  </p>
                  <p>
                    In 2017, I was incredibly lucky –  and privileged –  to land my first job before graduation, something I remain endlessly grateful for. That's when I really started learning what it means to be a developer –  something far more scattered and collaborative than the academic version of programming I'd known up to that point.
                  </p>
                  <p>
                    In my next role, I had the opportunity to relocate to Berlin in 2021. What was meant to be a one-year experiment turned into something much more –  I fell in love with the city and decided to stay. It's now been four years and counting.
                  </p>
                  {/* Third Image - Floating Left */}
                  <div className="float-left mr-6 sm:mr-12 mb-6 md:mb-8 relative z-20">
                    <div className="w-48 sm:w-64 md:w-80 rounded-3xl overflow-hidden border-2 border-gray-200/20 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-800">
                      <img
                        src={`${import.meta.env.BASE_URL}cats.jpeg`}
                        alt="Riche & Osi"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <p>Today, I live in Charlotten<wbr />burg with my two very solemn cats –  Richie and Osi –  who are father and son. I enjoy baking, reading (mostly nonfiction but some fiction too), and I have a longstanding daily ritual of watching one TV show episode while having lunch. From time to time, I explore the city through cafés, pâtisseries, and parks. I sometimes attend meetups that interest me, and I'm a regular at the Berlin Zoo; the <a href="https://www.zootier-lexikon.org/saeugetiere-mammalia/spitzhoernchen-halbaffen-und-affen/gibbons-und-menschenaffen-hominoidea/siamang#zoo" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Siamang</a> pair in the monkey enclosure have my heart. Watching them swing feels like a spiritual experience to me.</p>
                  <p>While my career path shifted toward tech, I never really stopped caring about the law. Over the years I've watched courtroom dramas, legal thrillers, and procedural shows (feel free to send your favorites!) – perhaps as a way to stay connected to the part of me who really wanted to be involved in the legal field. And in 2025, things came full circle when I discovered the University of London's part-time <a href="https://www.london.ac.uk/study/courses/undergraduate/llb-bachelor-laws" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">LLB program</a>, and I enrolled. I don't know how exactly it fits into the bigger picture; I don't have a five-year plan for it. I just knew the longing hadn't gone away –  and sometimes, that's enough of a reason to begin. </p>

                  <p>
                    If you've made it all the way here – thank you for reading! ☺️ <br />
                    If there's anything that perhaps resonated with you or sparked your interest, I'd love to hear from you.</p>
                </div>

              </div>

              {/* FAQ Section */}
              <div className="mt-10 mb-20">
                <h2 className={`${textConfig.aboutSubtitle.base} ${textConfig.aboutSubtitle.size} ${textConfig.aboutSubtitle.color} mb-2`}>
                  FAQs
                </h2>
                <p className={`${textConfig.subtitle.base} ${textConfig.text.size} text-blue-900 dark:text-gray-200 mb-6`}>
                  After sharing my story, I am almost always asked the same questions so I've preemptively compiled and answered them here.
                </p>
                <div className="space-y-4">
                  <FAQItem
                    question={<>Why <i>Omaha</i> of all places? How was your experience?</>}
                    answer={<>I just closed my eyes and pointed at a random state on a U.S. map 😜
                      <br />I've been hearing this question ever since I went to the U.S. Embassy in Mauritius for my student visa back in 2014, when the consular officer looked at me with concern and asked, <i>"Are you sure? Why <b>Omaha</b>?"</i><br />

                      Honestly? I didn't have a good answer then – and I still don't. I took the SATs, applied to a handful of random colleges without knowing where they were, and one of them said yes. That's it ¯\_(ツ)_/¯<br /> <br />As for how it was, well, nothing could've prepared me for my first Midwestern winter: subzero temperatures, grey skies, homesickness, and a perpetual feeling of being lost. <br /> But I was also incredibly lucky to meet friends – and their families – who welcomed me with open arms, went out of their way to make my life more comfortable, and helped me build a sense of home in a place that was as far from Mauritius as you could possibly get. <a href="https://furthestcity.com/city/LINCOLN_NE_UNITED_STATES_OF_AMERICA" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">No, really.</a> <br />
                      It couldn't have been a more unexpected – or better – landing spot. And despite the initial adjustment, I look back on my years in the U.S. with deep gratitude. Omaha and Lincoln will always hold a special place in my heart 🫶</>}
                  />
                  <FAQItem
                    question="Why leave the U.S.? Why Germany? Which one is better?"
                    answer={<>I didn't really "leave" the U.S. so much as I followed a(nother) whim. I'd always wanted to live in Europe – having almost studied in the U.K. – so when I joined a company that happened to have a branch in Berlin, I took it as a chance to explore. <br />
                      I made this decision in 2020 – right in the middle of COVID, at a time when lots of people were making drastic life choices anyway 😄 <br />As for which country is "better" – I really don't think there's a universal answer. Both countries have their own pros and cons, and the right place depends on your values, priorities, and where you are in life. I'm incredibly grateful for everything I gained in the U.S., and I haven't entirely ruled out going back someday. <br />But for now, Berlin makes the most sense for me.

                      No single place can be perfect, of course. "Better" is personal, and it changes over time. Sorry if that's not a clean, satisfying answer – but it's the honest one.

                    </>}
                  />
                  <FAQItem
                    question={<>Wait – you're from an island that's <a href="https://www.goodreads.com/quotes/9241672-mauritius-was-made-first-and-then-heaven-and-heaven-was" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">literally called paradise</a>. What on earth are you doing here in cold, grey Berlin???</>}
                    answer={<>Yup. Trust me, I know. <br />But as Rebecca Bunch from my all-time favorite show <i><a href="https://www.youtube.com/watch?v=qzY3EaJTuJk&ab_channel=racheldoesstuff" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Crazy Ex-Girlfriend</a></i> would say... the situation's a lot more nuanced than that.<br /> Like many Mauritians, I went abroad for university, partly because higher education options back home are limited – although now this is rapidly changing – and partly because there's real value in stepping outside a small island to explore the world, learn from other cultures, and grow in ways you simply can't by staying in one place your whole life. <br />That said, returning isn't always simple. The job market in Mauritius is limited, and many of us end up building our lives elsewhere, not out of rejection of home, but because opportunity often lives somewhere else. <br />Still, even after a decade, being away from home is bittersweet. I miss my large extended family, but also the food, the sea, the pace of life, and the sense of belonging that can only come from your origins – even when I've adjusted to life elsewhere. I don't have fixed long-term plans, but one thing that I do know for sure: staying connected to Mauritius – and being able to visit easily and often – will always be a priority for me. <img src="https://flagcdn.com/w40/mu.png" alt="Mauritius Flag" className="inline-block align-middle ml-1" style={{ height: '1em' }} /></>}
                  />

                </div>
                <p className={`${textConfig.subtitle.base} ${textConfig.text.size} text-blue-900 dark:text-gray-200 mt-10`}>
                  Got a question I didn't cover? Let's connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
