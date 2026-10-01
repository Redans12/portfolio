import { animate } from 'animejs'

const MS_PER_CHAR = 110

export function useTypewriter(source: () => string) {
  const displayed = ref('')
  const isTyping = ref(false)
  let animation: ReturnType<typeof animate> | undefined

  function stop() {
    animation?.cancel()
    animation = undefined
  }

  function start(text: string) {
    stop()

    if (prefersReducedMotion()) {
      displayed.value = text
      return
    }

    const progress = { chars: 0 }
    isTyping.value = true
    animation = animate(progress, {
      chars: text.length,
      duration: text.length * MS_PER_CHAR,
      ease: 'linear',
      onUpdate: () => {
        displayed.value = text.slice(0, Math.round(progress.chars))
      },
      onComplete: () => {
        isTyping.value = false
      },
    })
  }

  onMounted(() => {
    watch(source, start, { immediate: true })
  })
  onBeforeUnmount(stop)

  return { displayed, isTyping }
}
