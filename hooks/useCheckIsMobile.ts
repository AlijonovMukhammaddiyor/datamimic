import { useMediaQuery } from 'react-responsive'

export function useCheckIsMobile() {
  return useMediaQuery({ maxWidth: 1024 }) 
  {/* 768 */}
}