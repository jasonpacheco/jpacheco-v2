export interface DirectoryNode {
  fullPath: string;
  relativePath: string;
  type: 'directory' | 'node';
  children: DirectoryNode[];
}

const sitemap: DirectoryNode = {
  fullPath: '~',
  relativePath: '~',
  type: 'directory',
  children: [
    {
      fullPath: '~/about',
      relativePath: 'about',
      type: 'directory',
      children: [
        {
          fullPath: '~/about/about.tsx',
          relativePath: 'about.tsx',
          type: 'node',
          children: [],
        },
      ],
    },
    {
      fullPath: '~/contact',
      relativePath: 'contact',
      type: 'directory',
      children: [
        {
          fullPath: '~/contact/contact.tsx',
          relativePath: 'contact.tsx',
          type: 'node',
          children: [],
        },
      ],
    },
    {
      fullPath: '~/projects',
      relativePath: 'projects',
      type: 'directory',
      children: [
        {
          fullPath: '~/projects/onitama',
          relativePath: 'onitama',
          type: 'directory',
          children: [
            {
              fullPath: '~/projects/onitama/onitama.tsx',
              relativePath: 'onitama.tsx',
              type: 'node',
              children: [],
            },
            {
              fullPath: '~/projects/onitama/yama.tsx',
              relativePath: 'yama.tsx',
              type: 'node',
              children: [],
            },
            {
              fullPath: '~/projects/onitama/wama.tsx',
              relativePath: 'wama.tsx',
              type: 'node',
              children: [],
            },
            {
              fullPath: '~/projects/onitama/oni',
              relativePath: 'oni',
              type: 'directory',
              children: [
                {
                  fullPath: '~/projects/onitama/oni/ta',
                  relativePath: 'ta.tsx',
                  type: 'node',
                  children: [],
                },
                {
                  fullPath: '~/projects/onitama/oni/ta',
                  relativePath: 'ta',
                  type: 'directory',
                  children: [
                    {
                      fullPath: '~/projects/onitama/oni/ta/ma.tsx',
                      relativePath: 'ma.tsx',
                      type: 'node',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              fullPath: '~/projects/onitama/onima.tsx',
              relativePath: 'onima.tsx',
              type: 'node',
              children: [],
            },
          ],
        },
      ],
    },
    {
      fullPath: '~/links',
      relativePath: 'links',
      type: 'directory',
      children: [
        {
          fullPath: '~/links/links.tsx',
          relativePath: 'links.tsx',
          type: 'node',
          children: [],
        },
      ],
    },
  ],
};

export default sitemap;
