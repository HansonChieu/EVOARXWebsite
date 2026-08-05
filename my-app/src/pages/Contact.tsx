import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import './Contact.css'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve((reader.result as string).split(',')[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const MAX_SIZE = 50 * 1024
  const [fileSizeError, setFileSizeError] = useState(false)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null
    if (selected && selected.size > MAX_SIZE) {
      setFileSizeError(true)
      setFile(null)
      setFileName(null)
      e.target.value = ''
    } else {
      setFileSizeError(false)
      setFile(selected)
      setFileName(selected?.name ?? null)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      const data = new FormData(formRef.current)
      const params: Record<string, string> = {
        from_name: data.get('from_name') as string,
        reply_to:  data.get('reply_to') as string,
        subject:   data.get('subject') as string,
        message:   data.get('message') as string,
      }

      if (file) {
        const base64 = await fileToBase64(file)
        params.attachment     = base64
        params.attachment_name = file.name
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setFileName(null)
      setFile(null)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <Banner />
      <Navbar theme="page" />

      <div className="contact-content">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have a question or feedback? We'd love to hear from you.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="from_name">Name</label>
              <input id="from_name" name="from_name" type="text" placeholder="Your name" required />
            </div>
            <div className="contact-form__field">
              <label htmlFor="reply_to">Email</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} placeholder="Your message..." required />
          </div>

          <div className="contact-form__field">
            <label>Attachment <span className="contact-form__optional">(optional)</span></label>
            <label className="contact-form__file-label">
              <input type="file" onChange={handleFileChange} className="contact-form__file-input" />
              <span className="contact-form__file-btn">Choose File</span>
              <span className="contact-form__file-name">{fileName ?? 'No file chosen'}</span>
            </label>
            <span className={`contact-form__file-limit ${fileSizeError ? 'contact-form__file-limit--error' : ''}`}>
              {fileSizeError ? 'File exceeds the 50KB limit. Please choose a smaller file.' : 'Max file size: 50KB'}
            </span>
          </div>

          <button type="submit" className="contact-form__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact-form__feedback contact-form__feedback--success">
              Message sent! We'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__feedback contact-form__feedback--error">
              Something went wrong. Please try again or email us directly at evoarx@gmail.com
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  )
}
