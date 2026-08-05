import './Banner.css'

const base = [
  'App Coming Soon',
  'Store Coming Soon',
  'Begin Your Evolution Arc',
]

const messages = [...base, ...base, ...base, ...base]

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__track">
        {messages.map((msg, i) => (
          <span key={i} className="banner__item">
            {msg}
            <span className="banner__sep" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
