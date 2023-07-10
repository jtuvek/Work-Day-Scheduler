# Work Day Scheduler

A simple calendar application that allows users to schedule events for each hour of a typical working day. The application provides a visual representation of the day's schedule and allows users to save and persist their events.

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Features](#features)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Description

The Work Day Scheduler is a web-based application that helps users manage their daily schedule effectively. It provides a clean and intuitive interface where users can input their events for each hour of the workday. The application dynamically updates the HTML and applies different colors to indicate past, present, and future events. The events are stored in the browser's local storage, ensuring that the saved events persist even after the page is refreshed.

## User Story

As an employee with a busy schedule, I want to add important events to a daily planner so that I can manage my time effectively.

## Features

- Display of the current day at the top of the calendar
- Timeblocks for standard business hours (9am to 5pm)
- Color-coded timeblocks to indicate past, present, and future events
- Ability to enter events by clicking into a timeblock
- Event saving functionality using local storage
- Persistence of saved events even after page refresh

## Usage

To use the Work Day Scheduler, follow these steps:

1. Open the application in a web browser.
2. The current day will be displayed at the top of the calendar.
3. Scroll down to view the timeblocks for the standard business hours (9am to 5pm).
4. Each timeblock will be color-coded to indicate whether it is in the past, present, or future.
5. To add an event, click into the desired timeblock and enter the event details.
6. Click the save button for the corresponding timeblock to save the event.
7. The event text will be saved in local storage.
8. If you refresh the page, the saved events will persist and be displayed in the respective timeblocks.

## Technologies

The Work Day Scheduler is built with the following technologies:

- HTML
- CSS
- JavaScript
- jQuery
- Day.js

## License

The Work Day Scheduler is licensed under the [MIT License](LICENSE).
