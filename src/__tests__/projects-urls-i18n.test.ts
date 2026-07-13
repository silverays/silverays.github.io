import { describe, it, expect, vi } from 'vitest';

// Exercise the project URL helpers with i18n turned ON and two locales. The
// default locale stays at the site root; the secondary locale is prefixed.
// This guards the locale-prefixed project routing wired up for #437, mirroring
// the blog coverage in `blog-urls-i18n.test.ts`.
vi.mock('astro:content', () => ({
  getCollection: vi.fn(async () => []),
}));

vi.mock('@/config/i18n.config', () => ({
  default: {
    enabled: true,
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeNames: { en: 'English', nl: 'Nederlands' },
    detectBrowserLocale: false,
  },
}));

import {
  getProjectUrl,
  getProjectsBaseUrl,
  getProjectsPageUrl,
  getProjectTagUrl,
  getSecondaryLocales,
} from '@/lib/projects';

describe('project URL helpers (i18n enabled — en default, nl secondary)', () => {
  it('keeps default-locale project URLs at the site root', () => {
    expect(getProjectUrl('en/astro-rocket')).toBe('/work/astro-rocket');
    expect(getProjectUrl('en/astro-rocket', 'en')).toBe('/work/astro-rocket');
  });

  it('prefixes secondary-locale project URLs with the locale', () => {
    expect(getProjectUrl('nl/astro-rocket', 'nl')).toBe('/nl/work/astro-rocket');
  });

  it('prefixes the projects index base URL for the secondary locale only', () => {
    expect(getProjectsBaseUrl()).toBe('/work');
    expect(getProjectsBaseUrl('en')).toBe('/work');
    expect(getProjectsBaseUrl('nl')).toBe('/nl/work');
  });

  it('prefixes paginated URLs for the secondary locale', () => {
    expect(getProjectsPageUrl(1, 'nl')).toBe('/nl/work');
    expect(getProjectsPageUrl(2, 'nl')).toBe('/nl/work/page/2');
    expect(getProjectsPageUrl(2)).toBe('/work/page/2');
  });

  it('prefixes tag URLs for the secondary locale', () => {
    expect(getProjectTagUrl('Client Work', 'nl')).toBe('/nl/work/tag/client-work');
    expect(getProjectTagUrl('Client Work')).toBe('/work/tag/client-work');
  });

  it('lists the non-default locales as needing prefixed routes', () => {
    expect(getSecondaryLocales()).toEqual(['nl']);
  });
});
