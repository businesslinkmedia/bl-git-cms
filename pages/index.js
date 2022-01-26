import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from "classnames";

import carouselProps from "/public/c1.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="/">
            Next.js!
          </a>
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
        <Carousel className='w-1/2 border-8 rounded-3xl' 
          autoPlay={true} 
          infiniteLoop={true}
          stopOnHover={true} 
          showThumbs={false} 
          showStatus={false} 
          interval={5000}
          transitionTime={1000}
        >
          { carouselProps.carouselItems.map((currentItem, index) =>{
            return (
            <a 
              href="https://en.wikipedia.org/wiki/Special:Random" 
              target="_blank"
              key={index}>
              <div 
              className={classNames(
                // Common classes
                "flex flex-col justify-start md:justify-between md:items-center gap-10",
                {
                  "lg:flex-row": index % 2 === 0,
                  "lg:flex-row-reverse": index % 2 === 1,
                }
              )}
              >
                <div className='rounded-xl w-full'>
                  <img className='rounded-xl cover'
                    src={currentItem.imageUrl}
                  >
                  </img>
                  <p className='legend'>
                    Some text here 
                    maybe serveral lines
                    this is third
                  </p>
                </div>
              </div>
            </a>
            )

          })}

        </Carousel>
      </main>
    </div>
  )
}
