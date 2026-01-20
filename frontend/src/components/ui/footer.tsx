"use client";

import { H3 } from "./typography";

export const Footer = () => {
  return (
    <div className="border-t border-border mx-auto w-full flex flex-col gap-8 px-8 pt-6 pb-10">
      <div className="flex items-center gap-8">
        <H3 text="Granime" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Copyright© Granime All Rights Reserved</p>
        <p className="text-sm">
          Granime does not store any files on our server, we only linked to the
          media which is hosted on 3rd party services.
        </p>
      </div>
    </div>
  );
};
