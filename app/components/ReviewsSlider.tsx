import React, { useCallback, useEffect } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './ReviewSliderButtons'
import Image from 'next/image'
import { useAccessibility } from './ReviewSliderAccessibility'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import Accessiblity from 'embla-carousel-accessibility'
import useEmblaCarousel from 'embla-carousel-react'

interface Review {
  text: string;
  author: string;
}

type PropType = {
  reviews: Review[]
  options?: EmblaOptionsType
}

const ReviewsSlider = (props: PropType) => {
  const { reviews, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({delay: 2500}),
    ClassNames(),
    Accessiblity({
      announceChanges: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement
    })
  ])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.stop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  useAccessibility(emblaApi)

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play()
  }, [emblaApi])

  return (
    <section className="embla pt-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {reviews.map((review, index) => (
            <div className="embla__slide w-full min-w-xs md:min-w-sm lg:min-w-xl pr-3 md:pr-6" key={index}>
              <div className="bg-card rounded-3xl relative h-full w-full p-8 md:p-10 ">
                <div className="absolute -left-1.5 -top-4 w-17.25 h-15">
                  <Image
                    src="/images/quotemark.svg"
                    alt=""
                    className="rotate-[-10deg] w-full"
                    width={17.25}
                    height={15}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col pt-8 h-full">
                  <p className="font-serif text-2xl md:text-3xl tracking-tight grow mb-8">
                    {review.text}
                  </p>
                  <span className="bg-tertiary rounded-full px-3 py-1 grow-0 inline-flex self-start tracking-tight text-sm lg:text-base">
                    {review.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls w-full max-w-6xl mx-auto mt-8">
        <div className="embla__buttons flex justify-between items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__live-region" />
    </section>
  )
}

export default ReviewsSlider;