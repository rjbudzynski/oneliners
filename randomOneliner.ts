#!/usr/bin/env -S deno run --allow-net

const urlBase =
  "https://raw.githubusercontent.com/rjbudzynski/oneliners/master/data/";

const getUrl = async (url: string): Promise<string> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `${response.url}: ${response.status} ${response.statusText}`,
    );
  }
  return response.text();
};

const printRandomOneliner = async (): Promise<void> => {
  const len: number = await getUrl(urlBase + "len").then(parseInt);
  const index = Math.floor(len * Math.random());
  await getUrl(urlBase + index).then(console.log);
};

printRandomOneliner().catch((e: Error) => {
  console.error(e);
  Deno.exit(1);
});
