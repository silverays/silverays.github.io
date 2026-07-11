import type { Alpine } from 'alpinejs';
import type { ThemeStore } from './types';
import collapse from '@alpinejs/collapse';

const entrypoint = (Alpine: Alpine) => {
  Alpine.plugin(collapse);

  Alpine.data('accordion', () => ({
    selected: null as number | null,
    toggle(value: number) {
      this.selected = this.selected === value ? null : value;
    },
  }));

  Alpine.data('accordionItem', (id: number) => ({
    id,
    isOpen(this: { id: number; selected: number | null }): boolean {
      return this.id === this.selected;
    },
    isNextOpen(this: { id: number; selected: number | null }): boolean {
      return this.id + 1 === this.selected;
    },
  }));

  const themeStore: ThemeStore = {
    isDark: false,

    init() {
      this.isDark = document.documentElement.classList.contains('dark');
    },

    toggle() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
  };

  Alpine.store('theme', themeStore);
};

export default entrypoint;
