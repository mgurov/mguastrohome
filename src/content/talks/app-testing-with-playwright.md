---
title: "Isolate It! – holistic functional testing"
date: 2025-02-16T19:45:16+01:00
summary: "Why good unit and e2e tests are often not enough, and how to compliment - or replace - them with system tests in isolation. Playwright examples included."
weight: 200
---

Building a test suite that is efficient, valuable and dependable is not easy. Way too often, teams end up with gazillions of tests that don’t provide much confidence but rather slow down the delivery rate, or simply get chronically ignored.

The goal of this session is to demonstrate, how to refocus tests from the unit or e2e to the middle layer - holistic system tests in isolation. And how these "app" tests can combine the best of both worlds: the control and predictability of the unit tests, and the holistic perspective of the E2E test. This makes it into a powerful technique that allows us to build test suites that are resilient to changes and yield more return on investment over time instead of burning it.

This strategy has been successfully used for back-end and front-end projects. It allowed the teams to break the dependency on manual verification of releases, and increase the pace of delivery from weeks to hours.

I will use [Playwright](https://playwright.dev/) browser testing framework to demonstrate the key concepts of this technique for the front-end development. 

Ktor will be used to demonstrate this technique for a Spring Boot backend application (kotlin-jvm).

### External References

https://engineering.atspotify.com/2018/01/testing-of-microservices

#### Past

May 2025 [Testnet voorjaarsevenement 2025](https://www.testnet.org/evenement/entry/25926/) – [code](https://github.com/mgurov/remix-router-tutorial-playwright/tree/talks/testnet_2025_05_14) – [slides](https://www.slideshare.net/slideshow/20250514-isolate-it-hermetic-testing-with-playwright-pdf/279293706) In collaboration with [@Joost van Wollingen](https://www.linkedin.com/in/joostvanwollingen/) 



January 2025 [ViennaJS Meetup](https://viennajs.org/en/meetup/viennajs-january-meetup) - a prototype delivery

---
