import Head from 'next/head';
import React from 'react';
import { SiMinutemailer } from 'react-icons/si';
import UiCard from '@/components/ui/uiCard';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full">
        <div className="flex justify-center h-full w-full">
          <UiCard className="flex flex-col h-full items-center gap-4 p-16 mb-26">
            <SiMinutemailer size={100} />
            <p className="flex flex-col sm:flex-row text-2xl font-medium gap-1.5 ">
              Email:<span className="break-all">pytsko.oleh@gmail.com</span>
            </p>
            <p className="flex flex-col sm:flex-row text-2xl font-medium gap-1.5">
              Telegram:
              <a href={'https://t.me/gloriousu7'} target="_blank" className="underline break-all">
                https://t.me/gloriousu7
              </a>
            </p>
            <p className="flex flex-col sm:flex-row text-2xl font-medium gap-1.5">
              LinkedIn:
              <a
                href={'https://www.linkedin.com/in/oleh-pytsko-9b9033339/'}
                target="_blank"
                className="underline break-all"
              >
                https://www.linkedin.com/in/oleh-pytsko-9b9033339/
              </a>
            </p>
          </UiCard>
        </div>
      </div>
    </>
  );
};

export default Contacts;
