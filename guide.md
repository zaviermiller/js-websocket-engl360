# How Social Media Websites Use WebSockets to Build Real-Time Applications

## Introduction

A big part of social media websites like Instagram and Twitter is being able to see who is interacting with your post. For a long time, statistics such as like and comment counts were rendered once when the application loaded and then didn’t change until the application was reloaded.

This all changed with the advent of a technology called “WebSockets”. Normally, when a website is loaded the browser makes a request for a certain page or resource, the server returns it, and then the connection is closed. With WebSockets, the server is able to keep a connection open and send data at any time.

This is crucial to real-time applications, like the aforementioned social media websites and websites where it’s important that the data is displayed as soon as it comes. For example, at my job, we build POS and management software for resale franchises. As a part of this, we have an interface that shows text messages between the store and its customers. It’s important that these messages update in real time so that employees can respond quickly.

## Guide

To get started, I have built a sample Twitter-like application that communicates with a server to show users the likes a specific “tweet” has. Building an entire application from scratch is a bit out of the scope of this guide since the focus is on implementing WebSockets to add real-time functionality to the application. You can find the source code for the starting point here [link to repo]. To implement the backend I am using ExpressJS, a commonly used library for building web servers.

This is a very small web application to highlight the power of WebSockets, so it is not very complicated. Let’s take a quick look at how it works.

As you can see, we have one “tweet” and a like count that persists. I can like the tweet each time I load the page by clicking the “Like” button.

But what happens if I have two instances of the app loaded and I like the tweet?
It looks like I can see the updated like count on the page I clicked the button on, but it doesn’t get updated on the other page.

Let’s go ahead and fix this using WebSockets.

### Getting Started

To build out this functionality, we're going to use a library built for JavaScript called `ws`. You can install it by running the following in the project directory using a terminal:

```bash
$ npm install ws
```

As you can see, when I “like” another user's post, the count gets updated on my end but remains unchanged on the other user's end until I refresh the page.
Conclusion
Show some performance stats, and images of
