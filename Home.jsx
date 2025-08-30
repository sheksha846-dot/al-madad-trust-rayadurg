import React from 'react'

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-2xl font-bold">Welcome to Al Madad Trust — Rayadurg</h2>
        <p className="mt-3 text-sm text-gray-600">We support education, food relief and health camps for underprivileged families in Rayadurg.</p>
        <div className="mt-4 flex gap-3">
          <a href="#donate" className="px-4 py-2 bg-emerald-600 text-white rounded">Donate</a>
          <a href="#projects" className="px-4 py-2 border rounded">Our Projects</a>
        </div>
      </section>

      <section id="about" className="mt-6">
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="mt-2 text-sm text-gray-600">Al Madad Trust Rayadurg is dedicated to uplift the community through education, health awareness and relief programs.</p>
      </section>

      <section id="projects" className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded p-4 shadow">
          <h4 className="font-semibold">Education Support</h4>
          <p className="text-sm text-gray-600 mt-2">Scholarships, school supplies and tutoring.</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h4 className="font-semibold">Food & Relief</h4>
          <p className="text-sm text-gray-600 mt-2">Distribution drives and emergency help.</p>
        </div>
        <div className="bg-white rounded p-4 shadow">
          <h4 className="font-semibold">Health Camps</h4>
          <p className="text-sm text-gray-600 mt-2">Medical check-ups and awareness camps.</p>
        </div>
      </section>

      <section id="gallery" className="mt-6">
        <h3 className="text-lg font-semibold">Gallery</h3>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="h-28 bg-gray-200 rounded" />
          <div className="h-28 bg-gray-200 rounded" />
          <div className="h-28 bg-gray-200 rounded" />
          <div className="h-28 bg-gray-200 rounded" />
        </div>
      </section>

      <section id="contact" className="mt-6">
        <h3 className="text-lg font-semibold">Contact</h3>
        <div className="mt-2 bg-white p-4 rounded shadow text-sm">
          <div><strong>Address:</strong> Rayadurg, Andhra Pradesh</div>
          <div className="mt-1"><strong>Email:</strong> info@almadadtrust.org</div>
          <div className="mt-1"><strong>Phone:</strong> +91-XXXXXXXXXX</div>
        </div>
      </section>

      <section id="donate" className="mt-6">
        <h3 className="text-lg font-semibold">Donate</h3>
        <div className="mt-2 bg-white p-4 rounded shadow text-sm">
          <p>Please replace bank and payment placeholders with real details before going live.</p>
          <div className="mt-2"><strong>Bank:</strong> Your Bank • <strong>Acc:</strong> XXXXXXXXX</div>
        </div>
      </section>
    </div>
  )
}
