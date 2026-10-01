import { animate } from 'animejs'

const TYPE_MS_PER_CHAR = 110
const ERASE_MS_PER_CHAR = 60
const HOLD_MS = 7000
const ALTERNATE_EVERY = 3

interface TypewriterOptions {
  primary: () => string
  alternate: () => string
}

export function useTypewriter({ primary, alternate }: TypewriterOptions) {
  const displayed = ref('')
  const isTyping = ref(false)
  const isAlternate = ref(false)

  let animation: ReturnType<typeof animate> | undefined
  let timer: ReturnType<typeof setTimeout> | undefined
  let release: (() => void) | undefined
  let isStopped = false

  function sleep(ms: number) {
    return new Promise<void>((resolve) => {
      release = resolve
      timer = setTimeout(resolve, ms)
    })
  }

  function play(text: string, from: number, to: number, msPerChar: number) {
    return new Promise<void>((resolve) => {
      release = resolve
      const progress = { chars: from }
      animation = animate(progress, {
        chars: to,
        duration: Math.abs(to - from) * msPerChar,
        ease: 'linear',
        onUpdate: () => {
          displayed.value = text.slice(0, Math.round(progress.chars))
        },
        onComplete: () => resolve(),
      })
    })
  }

  async function typeAndErase(text: string) {
    isTyping.value = true
    await play(text, 0, text.length, TYPE_MS_PER_CHAR)
    isTyping.value = false
    if (isStopped) return

    await sleep(HOLD_MS)
    if (isStopped) return

    isTyping.value = true
    await play(text, text.length, 0, ERASE_MS_PER_CHAR)
    isTyping.value = false
  }

  async function run() {
    let cycle = 0
    while (!isStopped) {
      isAlternate.value = cycle % ALTERNATE_EVERY === ALTERNATE_EVERY - 1
      await typeAndErase(isAlternate.value ? alternate() : primary())
      cycle++
    }
  }

  function stop() {
    isStopped = true
    animation?.cancel()
    clearTimeout(timer)
    release?.()
  }

  onMounted(() => {
    if (prefersReducedMotion()) {
      displayed.value = primary()
      return
    }
    run()
  })
  onBeforeUnmount(stop)

  return { displayed, isTyping, isAlternate }
}
