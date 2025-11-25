# 📅 React Calendar with Event Scheduler

A modern, interactive calendar application built with React that allows users to schedule and manage events on specific dates.

<img width="1010" height="851" alt="image" src="https://github.com/user-attachments/assets/cd3a9e4c-ce18-468e-9528-14ddcee64a94" />

## Live-Demo
https://event-calender-29da5b.netlify.app/


## ✨ Features

- **Monthly Calendar View** - Navigate through months with intuitive prev/next buttons
- **Event Scheduling** - Add custom events to any date with a simple click
- **Date Selection** - Click on any date to select it and add an event
- **Event Display** - View events directly on the calendar for quick reference
- **Today Highlighting** - Current date is automatically highlighted
- **Event Persists** - Event data persists along 

## 🛠️ Built With

- **React** - Frontend library with Hooks (useState, useEffect)
- **date-fns** - Modern JavaScript date utility library
- **CSS3** - Custom styling with flexbox layout

## 📖 Usage

### Viewing the Calendar
- The current month and year are displayed at the top
- Today's date is highlighted automatically
- Use `<` and `>` buttons to navigate between months

### Adding Events
1. **Click on any date** in the calendar
2. An event form will appear below the calendar
3. **Type your event** in the input field
4. **Click "Add event"** button to save
5. The event will appear on the selected date

### Managing Events
- Events are displayed directly on the calendar dates
- Currently supports one event per date
- Events persist during your current session

## 🎯 What I Learned

- Managing complex state in React with multiple useState hooks
- Working with JavaScript Date objects and date-fns library
- Implementing conditional rendering with React
- Using spread operators to update object state immutably
- Creating responsive layouts with CSS flexbox
- Handling form submissions and user input in React
- Use of localStorage to store data between refreshes
