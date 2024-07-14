---
date: 2024-06-30T08:00:00-04:00
slug: what-is-a-template
title: What is a template?
abstract: It's more complicated than you might think.
---

There is a vast amount of software in the world that needs to take in-memory and turn it into HTML.

In templating engines, a common type of software used to generate HTML from structured data, a "template file" is a document written in a templating language, used by a templating engine to turn structured data into html files.

#2 In Eleventy, as with many other software projects, a "template" is also used to refer to a subset of all template files. Some

A template represents the main part of the page; a layout is used to wrap the main part with headers, footers, and other parts that repeat across multiple pages; a component is a chunk of functionality that can be embedded in any page. All of these are technically templates by virtue of #1, but in an eleventy context, it often applies only a subset of all tempaltes in your app.

#3 An EleventyTemplate is an in-memory representation of a future HTML page, usually initially derived from a template (#2) T all data and content needed to generate an html file to OUPUT. In general, if a file has a permalink, whether it is from the file's frontmatter, from a lay from .11ty.js, from some other programmitic intervention

What is a collection? An array of EleventyTemplates? If so
