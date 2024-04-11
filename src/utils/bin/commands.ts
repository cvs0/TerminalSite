/* eslint-disable prettier/prettier */
// List of commands that do not require API calls
import Image from 'next/image';
import * as bin from './index';
import config from '../../../config.json';
import HeadshotImg from "../../Headshot.png"

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const discord = async (args?: string[]): Promise<String> => {
  window.open('https://discord.com/users/1147380185893716068')
  return('[USERNAME]: cvs0.\n[USERID]: 1147380185893716068')
}

export const jndildap = async (args?: string[]): Promise<String> => {
  return('Hello from Minecraft RCE exploit! :)')
}

export const cat = async (args: string[]): Promise<string> => {
  if (args.length !== 1) {
    return 'Usage: cat <file>';
  }

  const fileName = args[0];

  try {
    const response = await fetch(`/cat_files/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${fileName}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// Define the list of websites to search
const websites: { name: string, url: (username: string) => string }[] = [
  { name: 'Twitter', url: (username) => `https://twitter.com/${username}` },
  { name: 'Facebook', url: (username) => `https://www.facebook.com/${username}` },
  { name: 'Youtube', url: (username) => `https://www.youtube.com/@${username}`},
  { name: 'Instagram', url: (username) => `https://www.instagram.com/${username}`},
  { name: 'Ebay', url: (username) => `https://www.ebay.com/usr/${username}`},
  { name: 'Steam', url: (username) => `https://steamcommunity.com/id/${username}`},
  { name: 'Reddit', url: (username) => `https://www.reddit.com/user/${username}`},
  { name: 'Github', url: (username) => `https://www.github.com/${username}`},
  { name: 'Pinterest', url: (username) => `https://www.pinterest.com/${username}`},
  { name: 'Snapchat', url: (username) => `https://www.snapchat.com/add/${username}`},
  { name: 'Twitch', url: (username) => `https://www.twitch.tv/${username}`},
];

export const osint = async (args: string[]): Promise<string> => {
  if (args.length !== 1) {
    return 'Usage: osint <username>';
  }

  const username = args[0];
  let results = '';

  for (const site of websites) {
    const url = site.url(username);
      results += `<a href="${url}" target="_blank">${site.name}: Found</a><br>`;
  }

  return results;
};

export const listdir = async (args: string[]): Promise<string> => {
  const paths: string[] = [];
  const numPaths = 100; // Number of paths to generate

  for (let i = 0; i < numPaths; i++) {
    const pathLength = Math.floor(Math.random() * 10) + 1; // Random path length
    let path = '';
    for (let j = 0; j < pathLength; j++) {
      const dirNameLength = Math.floor(Math.random() * 5) + 1; // Random directory name length
      const dirName = Math.random().toString(36).substring(2, 2 + dirNameLength); // Random directory name
      path += `/${dirName}`;
    }
    paths.push(path);
  }

  return paths.join('\n');
};


export const banner = (args?: string[]): string => {
  return `
  <div style="display: flex; align-items: center;">
    <Image 
      style="margin-right: 2em;" 
      src="${HeadshotImg.src}" 
      width={180} 
      height={180} 
      alt="Headshot Image"
    />
    <div>
      <pre style="font-family: monospace;">
         ██████╗██╗   ██╗███████╗ ██████╗ 
        ██╔════╝██║   ██║██╔════╝██╔═████╗
        ██║     ██║   ██║███████╗██║██╔██║
        ██║     ╚██╗ ██╔╝╚════██║████╔╝██║
        ╚██████╗ ╚████╔╝ ███████║╚██████╔╝
         ╚═════╝  ╚═══╝  ╚══════╝ ╚═════╝ 
      </pre>
      <p>Type 'help' to see the list of available commands.</p>
      <p>Type 'sumfetch' to display summary.</p>
      <p>Type 'projects' to display my projects.</p>
    </div>
  </div>
  </div>
  `;
};
