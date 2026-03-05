import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon
} from "@phosphor-icons/react"
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.goToPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.goToNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canGoToPrev())
    setNextBtnDisabled(!emblaApi.canGoToNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // Don't call onSelect directly - let the event handlers do it
    emblaApi.on('reinit', onSelect).on('select', onSelect).on('select', onSelect)

    return () => {
      emblaApi.off('reinit', onSelect).off('select', onSelect).off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton = (props: PropType) => {
  const { children, disabled, ...restProps } = props

  return (
    <button
      className={disabled ? 'embla__button--disabled' : ''}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <ArrowLeftIcon size={32}/>
      {children}
    </button>
  )
}

export const NextButton = (props: PropType) => {
  const { children, disabled, ...restProps } = props

  return (
    <button
      className={`embla__button embla__button--next${disabled ? ' embla__button--disabled' : ''}`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <ArrowRightIcon size={32}/>
      {children}
    </button>
  )
}