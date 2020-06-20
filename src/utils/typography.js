import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.baseFontSize = '18px'
fairyGatesTheme.overrideThemeStyles = (
  { adjustFontSizeTo, rhythm },
  options,
  styles
) => ({
  a: {
    color: '#222',
    backgroundImage:
      'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #222 1px, #222 2px, rgba(0, 0, 0, 0) 2px)',
  },
})
const typography = new Typography(fairyGatesTheme)
export default typography
