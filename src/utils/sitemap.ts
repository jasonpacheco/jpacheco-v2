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
      fullPath: '~/about.tsx',
      relativePath: 'about.tsx',
      type: 'node',
      children: [],
    },
    {
      fullPath: '~/contact.tsx',
      relativePath: 'contact.tsx',
      type: 'node',
      children: [],
    },
    {
      fullPath: '~/projects',
      relativePath: 'projects',
      type: 'directory',
      children: [
        {
          fullPath: '~/projects/fauxnitama.tsx',
          relativePath: 'fauxnitama.tsx',
          type: 'node',
          children: [],
        },
        {
          fullPath: '~/projects/shell.tsx',
          relativePath: 'shell.tsx',
          type: 'node',
          children: [],
        },
        {
          fullPath: '~/projects/lle.tsx',
          relativePath: 'lle.tsx',
          type: 'node',
          children: [],
        },
      ],
    },
    {
      fullPath: '~/links.tsx',
      relativePath: 'links.tsx',
      type: 'node',
      children: [],
    },
  ],
};

export default sitemap;
