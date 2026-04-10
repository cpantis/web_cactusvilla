
'use client'

import { useState } from 'react'

export default function InquiryForm() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setStatus('')
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('Thanks — your request was received. Please call Anette for the fastest response.')
      event.currentTarget.reset()
    } catch (error) {
      setStatus(error.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-card card">
      <h3>Schedule a Tour</h3>
      <p style={{color:'var(--muted)', lineHeight:1.7, marginTop:-4}}>Send a note below, and Anette will be your direct point of contact.</p>

      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" required />
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" />
      </div>

      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" placeholder="Tell us about your needs, preferred tour time, or any questions." />
      </div>

      <button className="btn btn--primary" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request a Tour'}
      </button>

      {status ? <p className="notice" style={{marginTop:16}}>{status}</p> : null}
    </form>
  )
}
