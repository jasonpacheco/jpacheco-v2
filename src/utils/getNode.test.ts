import getNode, {
  checkEachRelativePath,
  formatPathRequest,
  isOnlyAlphanumeric,
  trimStartEnd,
} from './getNode';

describe('tests for getNode', () => {
  describe('tests for trimStartEnd', () => {
    test('trims start', () => {
      expect(trimStartEnd('/about')).toBe('~/about');
    });

    test('trims end', () => {
      expect(trimStartEnd('about/')).toBe('about');
    });

    test('appends ~', () => {
      expect(trimStartEnd('/about/')).toBe('~/about');
    });

    test('appends properly', () => {
      expect(trimStartEnd('..////////////..')).toBe('../..');
    });

    test('removes duplicates', () => {
      expect(trimStartEnd('/////about///////')).toBe('~/about');
    });

    test('removes duplicates 2', () => {
      expect(trimStartEnd('///~//about///////')).toBe('~/~/about');
    });

    test('removes duplicates 3', () => {
      expect(trimStartEnd('/////about///a///about.tsx////')).toBe(
        '~/about/a/about.tsx',
      );
    });

    test('removes duplicates 4', () => {
      expect(trimStartEnd('~///////about///a///about.tsx////')).toBe(
        '~/about/a/about.tsx',
      );
    });
  });

  describe('tests for allowOnlyAlphanumeric', () => {
    test('allows valid input', () => {
      expect(isOnlyAlphanumeric(['~', 'about', 'about.tsx'])).toBe(true);
    });

    test('reject invalid input', () => {
      expect(isOnlyAlphanumeric(['~', 'about', 'ab@ab3out', 'about.tsx'])).toBe(
        false,
      );
    });
  });

  describe('tests for checkEachRelativePath', () => {
    test('formats a string', () => {
      expect(checkEachRelativePath(['~', '..', '..'])).toBe('~');
    });

    test('formats a string 2', () => {
      expect(
        checkEachRelativePath([
          '~',
          '..',
          '..',
          '..',
          '..',
          '.',
          '.',
          '..',
          '..',
        ]),
      ).toBe('~');
    });

    test('formats a string 3', () => {
      expect(
        checkEachRelativePath(['~', 'projects', 'contact', '..', '..']),
      ).toBe('~');
    });

    test('formats a string 4', () => {
      expect(checkEachRelativePath(['~', '.', 'projects'])).toBe('~/projects');
    });

    test('formats a string 5', () => {
      expect(checkEachRelativePath(['~', '.', 'projects', '.', '.'])).toBe(
        '~/projects',
      );
    });

    test('formats a string 6', () => {
      expect(checkEachRelativePath(['~', '..', 'projects', '..', '.'])).toBe(
        '~',
      );
    });

    test('formats a string 7', () => {
      expect(
        checkEachRelativePath([
          '~',
          'projects',
          'about',
          'folder',
          'links',
          '.',
          '..',
          '..',
          'site',
        ]),
      ).toBe('~/projects/about/site');
    });

    test('formats a string 8', () => {
      expect(checkEachRelativePath(['~'])).toBe('~');
    });

    test('formats a string 9', () => {
      expect(
        checkEachRelativePath([
          '~',
          '.',
          '.',
          '.',
          '.',
          '.',
          '.',
          '..',
          '.',
          'folder',
          '..',
          'folder',
        ]),
      ).toBe('~/folder');
    });

    test('formats a string 10', () => {
      expect(
        checkEachRelativePath([
          '~',
          'folder',
          '..',
          '.',
          '.',
          '.',
          '.',
          '.',
          '..',
          '.',
          'folder',
          '..',
          'folder',
          '..',
          '..',
          '..',
          '..',
          '.',
          '.',
          'another',
        ]),
      ).toBe('~/another');
    });

    test('returns false', () => {
      expect(
        checkEachRelativePath([
          '~',
          'folder',
          '..',
          '.',
          '.',
          '.folder',
          '.',
          '.',
          '...',
          '.',
          'folder',
          '..',
          'folder',
          '..',
          '..',
          '..',
          '..',
          '.',
          '.',
          'another',
        ]),
      ).toBe(false);
    });
  });

  describe('tests for formatPathRequest', () => {
    test('returns a formatted string', () => {
      expect(formatPathRequest('~/contact/folder', '..')).toBe('~/contact');
    });

    test('returns a formatted string 2', () => {
      expect(formatPathRequest('~/contact/folder', '../..')).toBe('~');
    });

    test('returns a formatted string 3', () => {
      expect(formatPathRequest('~/contact/folder', '../////////////..')).toBe(
        '~',
      );
    });

    test('returns a formatted string 4', () => {
      expect(
        formatPathRequest('~/contact/folder', '../../../../../../../'),
      ).toBe('~');
    });

    test('returns false', () => {
      expect(
        formatPathRequest('~/contact/folder', '../../../../.../../../'),
      ).toBe(false);
    });

    test('returns false 2', () => {
      expect(
        formatPathRequest('~/contact/folder', '../../../.%./../../../'),
      ).toBe(false);
    });

    test('returns the correct directory after many dot notation changes', () => {
      expect(
        formatPathRequest(
          '~/contact/folder',
          '../../folder/folder2/../folder3/./../folder4',
        ),
      ).toBe('~/folder/folder4');
    });

    test('returns the correct directory', () => {
      expect(formatPathRequest('~/contact/folder', 'about/folder2')).toBe(
        '~/contact/folder/about/folder2',
      );
    });

    test('returns the correct directory 2', () => {
      expect(formatPathRequest('~/contact/folder', '/about/folder2')).toBe(
        '~/about/folder2',
      );
    });

    test('returns the correct directory 3', () => {
      expect(formatPathRequest('~/contact/folder', '~/about/folder2')).toBe(
        '~/about/folder2',
      );
    });

    test('returns the correct directory 4', () => {
      expect(formatPathRequest('~/contact/folder', '~/about/../.')).toBe('~');
    });

    test('returns the correct directory 5', () => {
      expect(formatPathRequest('~/contact/folder', '~/about/..//./')).toBe('~');
    });

    test('returns current directory', () => {
      expect(formatPathRequest('~/contact/folder', '././././././.')).toBe(
        '~/contact/folder',
      );
    });
    test('returns current directory 2', () => {
      expect(formatPathRequest('~/contact/folder', '.')).toBe(
        '~/contact/folder',
      );
    });
    test('returns a directory above', () => {
      expect(formatPathRequest('~/contact/folder', '..')).toBe('~/contact');
    });
    test('returns two directories above', () => {
      expect(formatPathRequest('~/contact/folder', '../../')).toBe('~');
    });
    test('returns root if input goes above number of directories', () => {
      expect(formatPathRequest('~/contact/folder', '../../..')).toBe('~');
    });
    test('returns current directory if no input is given', () => {
      expect(formatPathRequest('~/contact/folder', '')).toBe(
        '~/contact/folder',
      );
    });
    test('returns root directory', () => {
      expect(formatPathRequest('~/contact/folder', '~')).toBe('~');
    });
  });

  describe('test for getNode method', () => {
    test('returns root node', () => {
      const res = getNode('~', '~');
      expect(res?.fullPath).toBe('~');
    });
    test('returns root node 2', () => {
      const res = getNode('~', '~/..');
      expect(res?.fullPath).toBe('~');
    });
    test('returns root node 3', () => {
      const res = getNode('~', '~/../../');
      expect(res?.fullPath).toBe('~');
    });
    test('returns root node 4', () => {
      const res = getNode('~', '..');
      expect(res?.fullPath).toBe('~');
    });
    test('returns projects node', () => {
      const res = getNode('~', 'projects');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns projects node 2', () => {
      const res = getNode('~', 'projects/../projects');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns projects node 3', () => {
      const res = getNode('~', 'projects/../projects');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns projects node 4', () => {
      const res = getNode('~/projects', '../projects');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns projects node 5', () => {
      const res = getNode('~/projects', '');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns projects node 6', () => {
      const res = getNode('~/projects/onitama', '..');
      expect(res?.fullPath).toBe('~/projects');
    });
    test('returns folder inside projects 1', () => {
      const res = getNode('~', 'projects/onitama');
      expect(res?.fullPath).toBe('~/projects/onitama');
    });
    test('returns folder inside projects 2', () => {
      const res = getNode('~', 'projects/onitama/onitama.tsx');
      expect(res?.fullPath).toBe('~/projects/onitama/onitama.tsx');
    });
    test('returns undefined', () => {
      const res = getNode('~', 'projects/onitamaa');
      expect(res?.fullPath).toBe(undefined);
    });
    test('returns undefined 2', () => {
      const res = getNode('~/projects', 'contact');
      expect(res?.fullPath).toBe(undefined);
    });
  });
});
