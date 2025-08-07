import { trackEvent } from './analytics/ga4.js'

function App() {

  return (
    <h1 className="text-3xl font-bold">
      {/* GA4 기본 연동 */}
      <button onClick={() =>
          trackEvent({
            category: 'CTA',
            action: 'Click Get Started',
            label: 'Landing Hero',
          })
         }
        >
          GA4 테스트
        </button>
    </h1>
  )
}

export default App
