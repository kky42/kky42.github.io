/* This is a script to create a new post markdown file with front-matter */

import fs from "fs"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename> [--folder]`)
  process.exit(1) // Terminate the script and return error code 1
}

let postName = args[0]
const useFolder = args.includes('--folder')

const targetDir = "./src/content/posts/"

let fullPath, filePath

if (useFolder) {
  // Create folder structure with index.md
  fullPath = path.join(targetDir, postName)
  filePath = path.join(fullPath, "index.md")
  
  if (fs.existsSync(fullPath)) {
    console.error(`Error: Directory ${fullPath} already exists`)
    process.exit(1)
  }
  
  // Create the directory
  fs.mkdirSync(fullPath, { recursive: true })
} else {
  // Create single markdown file
  let fileName = postName
  
  // Add .md extension if not present
  const fileExtensionRegex = /\.(md|mdx)$/i
  if (!fileExtensionRegex.test(fileName)) {
    fileName += ".md"
  }
  
  fullPath = path.join(targetDir, fileName)
  filePath = fullPath
  
  if (fs.existsSync(fullPath)) {
    console.error(`Error: File ${fullPath} already exists`)
    process.exit(1)
  }
  
  // recursive mode creates multi-level directories
  const dirPath = path.dirname(fullPath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

const content = `---
title: ${postName}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
lang: ''
---
`

fs.writeFileSync(filePath, content)

if (useFolder) {
  console.log(`Post folder ${fullPath} created with index.md`)
} else {
  console.log(`Post ${fullPath} created`)
}
