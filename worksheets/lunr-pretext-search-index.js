var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "sec-section-name-4",
  "level": "1",
  "url": "sec-section-name-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 330 ODE Review",
  "body": " Math 330 ODE Review     See how much ODE material we remember.    See if we can apply our knowledge of ODEs in new ways.      Before we begin the study of partial differential equations (PDEs), we need to make sure we have a strong command of ordinary differential equations (ODEs) and multivariable Calculus. These topics must be understood both from a procedural point of view and conceptually. In this worksheet you'll test your understanding and procedural proficiency with ODEs, on Wednesday we'll do multivariable Calculus. The goal right now is to find out where we stand with background material.    Terminology Questions  Here are some questions of terminology. Answer each of them in the context of the differential equations class you previously took.    What is a differential equation ?      What does it mean to solve a differential equation ?      Given two functions and , what is the convolution , , and what is it good for?      What is the  -function and what is it good for?     Solving Exercises   For each of these questions, and all that you answer from now on, you need to explain your reasoning as you go. At the end of the question, if possible, try to conclude with a statement saying why the answer you obtained makes sense from a practical point of view.     A brine solution containing kg of salt per liter of water flows into a L mixing vat at a rate of L\/min. A well-stirred mixture leaves at a rate of L\/min. If the vat is initially full of fresh water, find a formula for the quantity of salt in the tank as a function of time.      A damped oscillator is governed by the 2nd order ODE when no external force is applied to it. Its initial position is and has a velocity of . At , an external force of is applied. Show that, in the long run, is approximately a periodic function. What is the period and amplitude of this function?      Consider the second order ODE Suppose is a non-negative integer. By guessing a power series solution, show that this equation has a polynomial solution for some initial conditions. Does it have polynomial solutions for all initial conditions?      "
},
{
  "id": "sec-section-name-4-2",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "   See how much ODE material we remember.    See if we can apply our knowledge of ODEs in new ways.    "
},
{
  "id": "sec-section-name-4-3-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "both "
},
{
  "id": "sec-section-name-4-4-1",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Terminology Questions.",
  "body": "Terminology Questions  Here are some questions of terminology. Answer each of them in the context of the differential equations class you previously took.    What is a differential equation ?      What does it mean to solve a differential equation ?      Given two functions and , what is the convolution , , and what is it good for?      What is the  -function and what is it good for?    "
},
{
  "id": "sec-section-name-4-4-2",
  "level": "2",
  "url": "sec-section-name-4.html#sec-section-name-4-4-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Solving Exercises.",
  "body": "Solving Exercises   For each of these questions, and all that you answer from now on, you need to explain your reasoning as you go. At the end of the question, if possible, try to conclude with a statement saying why the answer you obtained makes sense from a practical point of view.     A brine solution containing kg of salt per liter of water flows into a L mixing vat at a rate of L\/min. A well-stirred mixture leaves at a rate of L\/min. If the vat is initially full of fresh water, find a formula for the quantity of salt in the tank as a function of time.      A damped oscillator is governed by the 2nd order ODE when no external force is applied to it. Its initial position is and has a velocity of . At , an external force of is applied. Show that, in the long run, is approximately a periodic function. What is the period and amplitude of this function?      Consider the second order ODE Suppose is a non-negative integer. By guessing a power series solution, show that this equation has a polynomial solution for some initial conditions. Does it have polynomial solutions for all initial conditions?    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
