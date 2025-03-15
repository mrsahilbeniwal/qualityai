"use client"

import type React from "react"

import { PlaceholdersAndVanishInput } from "components/ui/inputui"

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What is Actinic Keratosis?",
    "Who is the best Doctor for my Medical Condition?",
    "How to avoid those wierd Derma Momemts?",
    "How do I Glow Up?",
    "Is there anything unusual about my Test Reports?",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask QAI Anything
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  )
}

