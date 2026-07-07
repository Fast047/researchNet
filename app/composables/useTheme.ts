// composables/useTheme.ts
export const useTheme = () => {
  const colorMode = useCookie<'light' | 'dark'>('rs-theme', {
    default: () => 'light'
  })

  // Force cookie to 'light'
  if (colorMode.value !== 'light') {
    colorMode.value = 'light'
  }

  // ✅ Force light mode
  const isLight = computed({
    get: () => true,
    set: () => {
      colorMode.value = 'light'
    }
  })

  const toggleTheme = () => {
    // Locked to light theme
  }

  const setLight = () => {
    colorMode.value = 'light'
  }

  const setDark = () => {
    colorMode.value = 'light'
  }

  // จัดการการเพิ่ม/ลด class 'dark' บน html element เมื่อค่าเปลี่ยน
  if (import.meta.client) {
    watch(isLight, () => {
      document.documentElement.classList.toggle('dark', false)
    }, { immediate: true })
  }

  return {
    isLight,
    setDark,
    setLight,
    toggleTheme
  }
}