"use client";
import React, { useState } from 'react';
import HoverBorderGradient from '../ui/gradientBorder';
import Link from 'next/link';
import VideoGrid from './VideoGrid';
import CompareBy from '../CampareBy';

const Section1: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <section className="mx-auto flex w-[100vw] max-w-screen-xl px-4 my-2 sm:mt-28 sm:h-[38rem]">
                <div className="flex-[4]">
                    <div className="flex flex-col gap-10">
                        <h1 className="col-start-1 row-start-2 max-w-[32rem] text-start text-6xl font-extrabold tracking-tight md:text-left md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[43.5rem] xl:text-8xl text-primary">
                            Custom <br /> <span className='text-secondary'>WEBSITE</span> for <br /> your business
                        </h1>
                        <p className="col-start-1 row-start-3 max-w-xl text-start text-zinc-900 md:text-left md:text-lg md:leading-6 md:tracking-normal">
                            Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.
                        </p>
                        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-6">
                            <div className="flex w-fit flex-col place-items-center items-center justify-center">
                                <HoverBorderGradient>
                                    Build your Website
                                </HoverBorderGradient>
                                <p className="mt-1 h-0 text-center text-sm text-zinc-500">No credit card required</p>
                            </div>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="flex flex-col items-center"
                            >
                                <Link className="flex flex-row items-center gap-2 text-lg font-semibold" href="#Video">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6 text-primary">
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Watch Video
                                </Link>
                                {isHovered && (
                                    <video
                                        className="mt-2 w-[300px] h-[200px]  shadow-lg absolute rounded-2xl overflow-hidden"
                                        src="https://videos.pexels.com/video-files/3252145/3252145-uhd_2560_1440_25fps.mp4" // Replace with your video path
                                        autoPlay
                                        loop
                                        muted
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <VideoGrid /> */}
                <div className="hidden flex-[3] justify-center sm:flex">
                    <div className="relative ml-10 h-full w-full select-none">
                        <figure className="absolute -left-12 top-[6.4rem] z-10 flex h-[38rem] w-[20rem] scale-75 flex-col justify-between rounded-[1.5rem] border-2 border-zinc-400 border-opacity-30 bg-white p-3 shadow-2xl">
                            <div>
                                <div className="flex w-full flex-row items-center justify-between py-2">
                                    <header className="flex flex-row items-center justify-center gap-2">
                                        <img alt="studio-ai-logo" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="aspect-square rounded-full" style={{ 'color': 'transparent' }} srcSet="https://www.chatbase.co/_next/image?url=%2Fimages%2Fstudio-ai-logo.png&w=32&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ 1x, https://www.chatbase.co/_next/image?url=%2Fimages%2Fstudio-ai-logo.png&w=32&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ 2x" src="https://www.chatbase.co/_next/image?url=%2Fimages%2Fstudio-ai-logo.png&w=32&q=75&dpl=dpl_AuGk7k9urXD6BBidWwWUFP11isRJ" />
                                        <figcaption className="text-md font-bold text-zinc-800">Studio AI</figcaption>
                                    </header>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 text-zinc-800">
                                        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div className="h-0.5 rounded-3xl bg-zinc-200 opacity-30"></div>
                                <section className="mt-3 flex flex-col justify-between gap-2">
                                    <div className="ml-8 flex justify-end">
                                        <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ 'backgroundColor': '#8b5cf6', 'color': 'white' }} >
                                            <div className="flex flex-col items-start gap-4 break-words dark">
                                                <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                    <p>Where can I find examples of previous Work?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mr-8 flex justify-start">
                                        <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ 'backgroundColor': '#f1f1f0', 'color': 'black' }} >
                                            <div className="flex flex-col items-start gap-4 break-words">
                                                <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                    <p><a href="https://www.chatbase.co/" rel="nofollow" target="_blank">Here's a link</a> to our portfolio showcasing various projects we've completed.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-8 flex justify-end">
                                        <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ 'backgroundColor': '#8b5cf6', 'color': 'white' }}>
                                            <div className="flex flex-col items-start gap-4 break-words dark">
                                                <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                    <p>Perfect! I am intreseted, what are the next steps?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mr-8 flex justify-start"><div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ 'backgroundColor': '#f1f1f0', 'color': 'black' }}>
                                        <div className="flex flex-col items-start gap-4 break-words">
                                            <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                <p>Please leave your email and we will get back to you shortly.</p>
                                                <label className="mb-1 block text-xs font-medium">Email:</label>
                                                <div className="flex w-full rounded " style={{ 'background': 'white' }} >
                                                    <div className="focus:ring-none  h-9 w-full min-w-0 flex-auto rounded  bg-inherit px-3 focus:outline-none sm:text-sm " style={{ 'border': '1px solid #cfcfce' }} >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                            </div>
                            <section className="flex flex-col gap-2">
                                <ul className="flex list-none flex-row gap-4 text-xs font-medium">
                                    <li className="rounded-md bg-zinc-100  p-2">Prices</li>
                                    <li className="rounded-md bg-zinc-100  p-2">Services</li>
                                    <li className="rounded-md bg-zinc-100  p-2">Case studies</li>
                                </ul>
                                <div className="flex flex-row items-center justify-between rounded-lg border  border-black border-opacity-20 bg-white p-2 align-middle">
                                    <span className="ml-1 text-xs"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path></svg>
                                </div>
                            </section>
                        </figure>
                        <figure className="absolute -left-12 -top-32 -z-10 flex h-[40rem] w-[60rem] scale-75 flex-col justify-start overflow-hidden rounded-3xl border border-black/10 bg-zinc-50/5 shadow-md">
                            <header className="w-full rounded-t-3xl border-b-2 bg-zinc-400/5">
                                <header className="flex flex-row items-center justify-between p-5">
                                    <div className="flex flex-row items-center gap-1">
                                        <img alt="Chatbase" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" className="aspect-square rounded-lg" style={{ 'color': 'transparent' }} src="https://www.chatbase.co/images/chatbase-logo.svg" />
                                        <span className="text-sm font-bold text-zinc-800">Chatbase</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-1">
                                        <span className="font-bold">Studio AI</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-zinc-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                    </div>
                                    <div className="flex list-none flex-row gap-7 text-sm font-medium">
                                        <li>Help</li>
                                        <li>Account</li>
                                    </div>
                                </header>
                                <ul className="flex list-none flex-row justify-center gap-7 p-1 text-sm font-medium ">
                                    <li className="opacity-60">Chatbot</li>
                                    <li className="opacity-60">Settings</li>
                                    <li className="relative opacity-100">Dashboard<div className="absolute top-6 h-[0.1rem] w-full rounded-3xl bg-violet-500"></div></li>
                                    <li className="opacity-60">Sources</li>
                                    <li className="opacity-60">Integrations</li>
                                    <li className="opacity-60">Embed on Site</li>
                                    <li className="opacity-60">Share</li>
                                </ul>
                            </header>
                            <div className="mt-2 flex flex-col gap-4 p-4">
                                <span className="text-3xl font-bold ">Dashboard</span>
                                <div className="flex flex-row gap-4 text-clip py-2">
                                    <div className="flex h-fit w-[22rem] flex-col rounded-md bg-white ">
                                        <div className="flex w-full flex-row items-center gap-2 rounded-md p-3 bg-zinc-100 [&amp;>*]:text-violet-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-zinc-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"></path></svg><span className="text-xs font-medium">Chat Logs</span></div><div className="flex w-full flex-row items-center gap-2 rounded-md p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-zinc-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg><span className="text-xs font-medium">Leads</span></div><div className="flex w-full flex-row items-center gap-2 rounded-md p-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-zinc-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path></svg><span className="text-xs font-medium">Analytics</span></div></div><div className="flex flex-col gap-2 rounded-md border bg-white "><span className="text-md w-full border-b p-3 font-semibold">Chat Logs</span><div className="flex flex-col gap-3 rounded-md bg-white p-2">
                                                        <div className="grid h-[22rem] grid-cols-3 pr-2"><div className="flex flex-col overflow-y-scroll"><div className="flex flex-col justify-between gap-2 rounded p-4 bg-zinc-100">
                                                            <div className="flex flex-row justify-between align-middle text-xs font-medium opacity-50">
                                                                <span className="w-4/6">Hi, what is the delivery time?</span><span className="text-[0.6rem]">5 Hours ago</span>
                                                            </div><span className="text-xs">Depending on the destination, the typical delivery time is between 2-5 business days working days. I...</span>
                                                        </div>
                                                            <div className="flex flex-col justify-between gap-2 rounded p-4">
                                                                <div className="flex flex-row justify-between align-middle text-xs font-medium opacity-50">
                                                                    <span className="w-4/6">Do you accept payment plans?</span><span className="text-[0.6rem]">10 Hours ago</span>
                                                                </div><span className="text-xs">Unfortunately no! We only accept full payments.</span>
                                                            </div><div className="flex flex-col justify-between gap-2 rounded p-4">
                                                                <div className="flex flex-row justify-between align-middle text-xs font-medium opacity-50">
                                                                    <span className="w-4/6">Hi, what is the delivery time?</span><span className="text-[0.6rem]">5 Hours ago</span>
                                                                </div><span className="text-xs">Depending on the destination, the typical delivery time is between 2-5 business days working days. I...</span>
                                                            </div></div><div className="col-span-2 ml-4 flex flex-col gap-1 bg-white"><span className="text-sm font-bold opacity-70">Source: Widget</span>
                                                                <section className="flex h-full flex-col  gap-1 overflow-auto rounded-md border p-2"><div className="mr-8 flex justify-start">
                                                                    <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ backgroundColor: '#f1f1f0', color: 'black' }} >
                                                                        <div className="flex flex-col items-start gap-4 break-words">
                                                                            <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                                                <p>👋 Hi! my name is studio AI, I am here to help you with any questions you may have.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                    <div className="ml-8 flex justify-end"><div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ backgroundColor: '#8b5cf6', color: 'white' }}>
                                                                        <div className="flex flex-col items-start gap-4 break-words dark">
                                                                            <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs"><p>Hi, what is the delivery time?</p></div>
                                                                        </div></div></div><div className="mr-8 flex justify-start">
                                                                        <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{ backgroundColor: '#f1f1f0', color: 'black' }}>
                                                                            <div className="flex flex-col items-start gap-4 break-words">
                                                                                <div className="flex justify-start">
                                                                                    <span className="-ml-2 inline-flex items-center rounded-md px-2 py-1 font-medium ring-1 ring-inset bg-violet-100 text-violet-600 ring-violet-700/10 text-xs">Confidence Score: 0.900</span>
                                                                                </div>
                                                                                <div className="prose w-full break-words text-left text-inherit dark:prose-invert text-xs">
                                                                                    <p>Depending on the destination, the typical delivery time is between 2-5 business days working days. If you tell me what location you are ordering from I will tell you exactly.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </div>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section1;
